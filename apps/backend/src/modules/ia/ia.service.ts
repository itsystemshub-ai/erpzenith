import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import {
  ChatbotMessageDto,
  SentimentAnalysisDto,
  SalesPredictionDto,
  TextClassificationDto,
  TextSummaryDto,
} from './dto';

@Injectable()
export class IaService {
  private geminiApiKey: string;
  private hfToken: string;
  private openRouterApiKey: string;
  private openRouterModel: string;
  private openRouterSiteUrl: string;
  private openRouterSiteTitle: string;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    this.geminiApiKey = this.config.get('GEMINI_API_KEY', '');
    this.hfToken = this.config.get('HF_TOKEN', '');
    this.openRouterApiKey = this.config.get('OPENROUTER_API_KEY', '');
    this.openRouterModel = this.config.get('OPENROUTER_MODEL', 'openai/gpt-4o');
    this.openRouterSiteUrl = this.config.get('OPENROUTER_SITE_URL', 'https://erp-zenith.app');
    this.openRouterSiteTitle = this.config.get('OPENROUTER_SITE_TITLE', 'ERP ZENITH');
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CHATBOT ERP CON GEMINI
  // ───────────────────────────────────────────────────────────────────────────

  async chat(dto: ChatbotMessageDto, userId: string) {
    await this.checkLimit('GEMINI', userId);

    // Obtener o crear conversación
    let conversation = dto.conversationId
      ? await this.prisma.chatbotConversation.findUnique({
          where: { id: dto.conversationId },
        })
      : null;

    if (!conversation) {
      conversation = await this.prisma.chatbotConversation.create({
        data: {
          userId,
        },
      });
    }

    // Guardar mensaje del usuario
    await this.prisma.chatbotMessage.create({
      data: {
        conversationId: conversation.id,
        role: 'USER',
        content: dto.message,
      },
    });

    // Obtener contexto del ERP
    const erpContext = await this.getERPContext(userId);

    // Construir prompt con contexto
    const prompt = this.buildPrompt(dto.message, erpContext, dto.context);

    // Llamar a OpenRouter (preferido) o Gemini como fallback
    const response = this.openRouterApiKey
      ? await this.callOpenRouter([{ role: 'user', content: prompt }])
      : await this.callGemini(prompt);

    // Guardar respuesta
    const assistantMessage = await this.prisma.chatbotMessage.create({
      data: {
        conversationId: conversation.id,
        role: 'ASSISTANT',
        content: response,
      },
    });

    // Log de uso
    const provider = this.openRouterApiKey ? 'OPENROUTER' : 'GEMINI';
    const model = this.openRouterApiKey ? this.openRouterModel : 'gemini-pro';
    await this.logUsage(provider, model, userId, prompt.length, 1);

    return {
      conversationId: conversation.id,
      messageId: assistantMessage.id,
      response,
    };
  }

  private async getERPContext(userId: string) {
    const [ventasHoy, stockBajo, tareasPendientes] = await Promise.all([
      this.prisma.sale.count({
        where: {
          date: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      this.prisma.product.findMany({
        where: {
          isActive: true,
        },
        take: 5,
        select: { name: true },
      }),
      this.prisma.task.count({
        where: {
          assignedTo: userId,
          status: 'PENDING',
        },
      }),
    ]);

    return {
      ventasHoy,
      stockBajo: stockBajo.length,
      productosStockBajo: stockBajo,
      tareasPendientes,
      fechaActual: new Date().toLocaleDateString('es-VE'),
    };
  }

  private buildPrompt(
    message: string,
    erpContext: any,
    context?: string,
  ): string {
    return `Eres un asistente virtual experto en el sistema ERP ZENITH.
    
Contexto actual del usuario:
- Ventas hoy: ${erpContext.ventasHoy}
- Productos con stock bajo: ${erpContext.stockBajo}
- Tareas pendientes: ${erpContext.tareasPendientes}
- Fecha actual: ${erpContext.fechaActual}

${context ? 'Contexto adicional: ' + context : ''}

Pregunta del usuario: ${message}

Responde de manera clara, concisa y útil. Si la pregunta requiere datos específicos del sistema, indícalo.`;
  }

  private async callGemini(prompt: string): Promise<string> {
    if (!this.geminiApiKey) {
      return 'La API de Gemini no está configurada. Por favor contacta al administrador.';
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.geminiApiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la llamada a Gemini');
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude generar una respuesta.';
    } catch (error) {
      console.error('Error calling Gemini:', error);
      throw new BadRequestException('Error al conectar con Gemini');
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // OPENROUTER – PROVEEDOR COMPATIBLE CON OPENAI
  // ───────────────────────────────────────────────────────────────────────────

  private async callOpenRouter(
    messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
  ): Promise<string> {
    if (!this.openRouterApiKey) {
      return 'La API de OpenRouter no está configurada. Por favor contacta al administrador.';
    }

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.openRouterApiKey}`,
          'HTTP-Referer': this.openRouterSiteUrl,
          'X-Title': this.openRouterSiteTitle,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.openRouterModel,
          messages,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`OpenRouter error ${response.status}: ${errBody}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || 'No pude generar una respuesta.';
    } catch (error) {
      console.error('Error calling OpenRouter:', error);
      throw new BadRequestException('Error al conectar con OpenRouter');
    }
  }

  /** Endpoint dedicado: llama a OpenRouter con modelo y prompt personalizables */
  async chatOpenRouter(dto: { model?: string; systemPrompt?: string; message: string }, userId: string) {
    if (!this.openRouterApiKey) {
      throw new BadRequestException('OPENROUTER_API_KEY no está configurada en el servidor.');
    }

    const messages: { role: 'user' | 'assistant' | 'system'; content: string }[] = [];

    if (dto.systemPrompt) {
      messages.push({ role: 'system', content: dto.systemPrompt });
    }
    messages.push({ role: 'user', content: dto.message });

    const modelToUse = dto.model || this.openRouterModel;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.openRouterApiKey}`,
        'HTTP-Referer': this.openRouterSiteUrl,
        'X-Title': this.openRouterSiteTitle,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: modelToUse,
        messages,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new BadRequestException(`OpenRouter error ${response.status}: ${errBody}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || 'Sin respuesta.';

    await this.logUsage('OPENROUTER', modelToUse, userId, dto.message.length, 1);

    return {
      model: modelToUse,
      response: content,
      usage: data.usage,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ANÁLISIS DE SENTIMIENTO CON HUGGING FACE
  // ───────────────────────────────────────────────────────────────────────────

  async analyzeSentiment(dto: SentimentAnalysisDto) {
    await this.checkLimit('HUGGINGFACE');

    const result = await this.callHuggingFace(
      dto.text,
      'cardiffnlp/twitter-roberta-base-sentiment-latest',
    );

    // Procesar resultado
    const sentiment = this.processSentimentResult(result);

    // Guardar log
    await this.logUsage('HUGGINGFACE', 'roberta-sentiment', null, dto.text.length, 1);

    return {
      text: dto.text,
      sentiment: sentiment.label,
      score: sentiment.score,
      breakdown: result,
      entityId: dto.entityId,
      entityType: dto.entityType,
    };
  }

  private async callHuggingFace(text: string, model: string) {
    if (!this.hfToken) {
      throw new BadRequestException('Hugging Face token no configurado');
    }

    const url = `https://api-inference.huggingface.co/models/${model}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.hfToken}`,
        },
        body: JSON.stringify({ inputs: text }),
      });

      if (!response.ok) {
        throw new Error('Error en la llamada a Hugging Face');
      }

      return await response.json();
    } catch (error) {
      console.error('Error calling Hugging Face:', error);
      throw new BadRequestException('Error al conectar con Hugging Face');
    }
  }

  private processSentimentResult(result: any) {
    if (!result || !result[0]) {
      return { label: 'NEUTRO', score: 0 };
    }

    const scores = result[0];
    const maxScore = Math.max(...scores.map((s: any) => s.score));
    const maxLabel = scores.find((s: any) => s.score === maxScore)?.label || 'NEUTRO';

    // Mapear labels de inglés a español
    const labelMap: Record<string, string> = {
      LABEL_0: 'NEGATIVO',
      LABEL_1: 'NEUTRO',
      LABEL_2: 'POSITIVO',
      negative: 'NEGATIVO',
      neutral: 'NEUTRO',
      positive: 'POSITIVO',
    };

    return {
      label: labelMap[maxLabel] || maxLabel,
      score: maxScore,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // PREDICCIÓN DE VENTAS CON GEMINI
  // ───────────────────────────────────────────────────────────────────────────

  async predictSales(dto: SalesPredictionDto, userId: string) {
    await this.checkLimit('GEMINI', userId);

    // Obtener histórico de ventas
    const historicalData = await this.getSalesHistory(dto.productId, dto.months || 12);

    if (historicalData.length < 3) {
      throw new BadRequestException('No hay suficientes datos históricos');
    }

    // Construir prompt para Gemini
    const prompt = `Analiza las siguientes ventas mensuales y predice los próximos 3 meses:

${historicalData.map((d) => `${d.month}: ${d.amount}`).join('\n')}

Proporciona una predicción numérica para los próximos 3 meses con una breve explicación.`;

    const aiProvider = this.openRouterApiKey ? 'OPENROUTER' : 'GEMINI';
    const aiModel = this.openRouterApiKey ? this.openRouterModel : 'gemini-pro';
    const response = this.openRouterApiKey
      ? await this.callOpenRouter([{ role: 'user', content: prompt }])
      : await this.callGemini(prompt);

    // Guardar predicción
    const prediction = await this.prisma.aIPrediction.create({
      data: {
        entityType: 'PRODUCT' as any,
        entityId: dto.productId,
        prediction: response,
        confidence: 0.75,
        model: aiModel,
      } as any,
    });

    await this.logUsage(aiProvider, aiModel, userId, prompt.length, 1);

    return prediction;
  }

  private async getSalesHistory(productId: string, months: number) {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - months);

    const sales = await this.prisma.saleItem.groupBy({
      by: ['productId'],
      where: {
        productId,
        sale: {
          date: { gte: startDate },
        },
      },
      _sum: {
        quantity: true,
        total: true,
      },
    });

    // Agrupar por mes
    const byMonth = await this.prisma.$queryRaw`
      SELECT 
        TO_CHAR("sale"."date", 'YYYY-MM') as month,
        SUM("SaleItem".quantity) as quantity,
        SUM("SaleItem".total) as amount
      FROM "SaleItem"
      JOIN "Sale" ON "SaleItem"."saleId" = "Sale".id
      WHERE "SaleItem"."productId" = ${productId}
        AND "Sale"."date" >= ${startDate}
      GROUP BY TO_CHAR("sale"."date", 'YYYY-MM')
      ORDER BY month
    `;

    return byMonth as any[];
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CLASIFICACIÓN DE TEXTO
  // ───────────────────────────────────────────────────────────────────────────

  async classifyText(dto: TextClassificationDto) {
    await this.checkLimit('HUGGINGFACE');

    const result = await this.callHuggingFace(
      dto.text,
      'facebook/bart-large-mnli',
    );

    await this.logUsage('HUGGINGFACE', 'bart-classification', null, dto.text.length, 1);

    return {
      text: dto.text,
      classifications: result[0]?.labels?.map((label: string, i: number) => ({
        label,
        score: result[0].scores[i],
      })) || [],
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // RESUMEN DE TEXTO
  // ───────────────────────────────────────────────────────────────────────────

  async summarizeText(dto: TextSummaryDto) {
    const provider = this.openRouterApiKey ? 'OPENROUTER' : 'GEMINI';
    await this.checkLimit(provider);

    const prompt = `Resume el siguiente texto en máximo ${dto.maxLength || 100} palabras:\n\n${dto.text}`;

    const summary = this.openRouterApiKey
      ? await this.callOpenRouter([{ role: 'user', content: prompt }])
      : await this.callGemini(prompt);

    const model = this.openRouterApiKey ? this.openRouterModel : 'gemini-pro';
    await this.logUsage(provider, model, null, dto.text.length, 1);

    return {
      originalLength: dto.text.length,
      summaryLength: summary.length,
      summary,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // GESTIÓN DE LÍMITES Y LOGS
  // ───────────────────────────────────────────────────────────────────────────

  private async checkLimit(provider: string, userId?: string) {
    const config = await this.prisma.aIConfig.findUnique({
      where: { provider: provider as any },
    });

    if (!config) {
      return; // Sin configuración, sin límites
    }

    if (config.usageToday >= config.dailyLimit) {
      throw new BadRequestException(`Límite diario alcanzado para ${provider}`);
    }

    // Actualizar uso
    await this.prisma.aIConfig.update({
      where: { provider: provider as any },
      data: { usageToday: { increment: 1 } },
    });
  }

  private async logUsage(
    provider: string,
    model: string,
    userId: string | null,
    tokensUsed?: number,
    requestsCount?: number,
  ) {
    await this.prisma.aIUsageLog.create({
      data: {
        provider: provider as any,
        model,
        userId: userId || undefined,
        success: true,
      } as any,
    });
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ESTADÍSTICAS Y DASHBOARD
  // ───────────────────────────────────────────────────────────────────────────

  async getDashboard() {
    const configs = await this.prisma.aIConfig.findMany();

    const logs = await this.prisma.aIUsageLog.findMany({
      where: {
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
      orderBy: { id: 'desc' },
      take: 100,
    });

    const totalCost = await this.prisma.aIUsageLog.aggregate({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
      _sum: { cost: true },
    });

    return {
      providers: configs.map((c) => ({
        provider: c.provider,
        isActive: c.isActive,
        dailyLimit: c.dailyLimit,
        usageToday: c.usageToday,
        remainingToday: c.dailyLimit - c.usageToday,
      })),
      recentLogs: logs,
      totalCostThisMonth: totalCost._sum.cost || 0,
    };
  }

  async getConversations(userId: string) {
    return this.prisma.chatbotConversation.findMany({
      where: { userId },
      include: {
        messages: {
          orderBy: { id: 'asc' },
          take: 1,
        },
        _count: {
          select: { messages: true },
        },
      },
      orderBy: { id: 'desc' },
    });
  }

  async getConversation(id: string) {
    return this.prisma.chatbotConversation.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: { id: 'asc' },
        },
      },
    });
  }
}
