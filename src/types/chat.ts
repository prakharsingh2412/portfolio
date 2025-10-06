export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  isTyping?: boolean;
}

export interface ChatResponse {
  message: string;
  delay?: number;
}