import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/permissions.decorator';
import { User } from '../../common/decorators/user.decorator';
import { IaService } from './ia.service';
import {
  ChatbotMessageDto,
  SentimentAnalysisDto,
  SalesPredictionDto,
  TextClassificationDto,
  TextSummaryDto,
  OpenRouterChatDto,
} from './dto';

@Controller('ia')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class IaController {
  constructor(private iaService: IaService) {}

  // ───────────────────────────────────────────────────────────────────────────
  // CHATBOT ERP
  // ───────────────────────────────────────────────────────────────────────────

  @Post('chat')
  @RequirePermissions('ia:use')
  async chat(@Body() dto: ChatbotMessageDto, @User() user: any) {
    return this.iaService.chat(dto, user.id);
  }

  @Get('chat/conversations')
  @RequirePermissions('ia:use')
  async getConversations(@User() user: any) {
    return this.iaService.getConversations(user.id);
  }

  @Get('chat/conversations/:id')
  @RequirePermissions('ia:use')
  async getConversation(@Param('id') id: string) {
    return this.iaService.getConversation(id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ANÁLISIS DE SENTIMIENTO
  // ───────────────────────────────────────────────────────────────────────────

  @Post('sentiment')
  @RequirePermissions('ia:use')
  async analyzeSentiment(@Body() dto: SentimentAnalysisDto) {
    return this.iaService.analyzeSentiment(dto);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // PREDICCIÓN DE VENTAS
  // ───────────────────────────────────────────────────────────────────────────

  @Post('predictions/sales')
  @RequirePermissions('ia:use')
  async predictSales(@Body() dto: SalesPredictionDto, @User() user: any) {
    return this.iaService.predictSales(dto, user.id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CLASIFICACIÓN DE TEXTO
  // ───────────────────────────────────────────────────────────────────────────

  @Post('classify')
  @RequirePermissions('ia:use')
  async classifyText(@Body() dto: TextClassificationDto) {
    return this.iaService.classifyText(dto);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // RESUMEN DE TEXTO
  // ───────────────────────────────────────────────────────────────────────────

  @Post('summarize')
  @RequirePermissions('ia:use')
  async summarizeText(@Body() dto: TextSummaryDto) {
    return this.iaService.summarizeText(dto);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // DASHBOARD Y ESTADÍSTICAS
  // ───────────────────────────────────────────────────────────────────────────

  @Get('dashboard')
  @RequirePermissions('ia:use')
  async getDashboard() {
    return this.iaService.getDashboard();
  }

  @Get('usage')
  @RequirePermissions('ia:use')
  async getUsage(
    @Query('provider') provider?: string,
    @Query('days') days?: number,
  ) {
    return this.iaService.getDashboard();
  }

  // ───────────────────────────────────────────────────────────────────────────
  // OPENROUTER DIRECT
  // ───────────────────────────────────────────────────────────────────────────

  /**
   * Llamada directa a OpenRouter con modelo personalizable.
   * Body: { model?: string, systemPrompt?: string, message: string }
   * Ejemplo de modelos: "openai/gpt-4o", "anthropic/claude-3-haiku", "google/gemini-pro"
   */
  @Post('openrouter')
  @RequirePermissions('ia:use')
  async chatOpenRouter(@Body() dto: OpenRouterChatDto, @User() user: any) {
    return this.iaService.chatOpenRouter(dto, user.id);
  }
}
