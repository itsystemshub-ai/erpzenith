export class ChatbotMessageDto {
  message: string;
  conversationId?: string;
  context?: string;
}

export class SentimentAnalysisDto {
  text: string;
  entityId?: string;
  entityType?: string;
}

export class SalesPredictionDto {
  productId: string;
  months?: number;
}

export class TextClassificationDto {
  text: string;
  labels: string[];
}

export class TextSummaryDto {
  text: string;
  maxLength?: number;
}

/** Llamada directa a OpenRouter con control total sobre el modelo y mensajes */
export class OpenRouterChatDto {
  /** Modelo en formato "provider/model-name", ej: "openai/gpt-4o", "anthropic/claude-3-haiku" */
  model?: string;
  /** Sistema (instrucciones al asistente), opcional */
  systemPrompt?: string;
  /** Mensaje del usuario */
  message: string;
}

