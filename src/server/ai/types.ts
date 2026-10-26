export type ChatRole = "system" | "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

export type ChatImage = {
  url: string;
};

export type StreamChatInput = {
  persona: string;
  summary: string;
  recent: ChatTurn[];
  userMessage: string;
  images?: ChatImage[];
};

export type GenerateImageInput = {
  personaId: string;
  references: string[];
  prompt: string;
  jobId: string;
};

export type VoiceSessionInput = {
  personaId: string;
  voiceId: string;
  maxSeconds: number;
};

export type VoiceSession = {
  token: string;
  expiresAt: string;
};

/** Chat and photo understanding. Landing does not call this. */
export interface ChatProvider {
  streamChat(input: StreamChatInput): AsyncIterable<string>;
}

/** Character images. Landing does not call this. */
export interface ImageProvider {
  generateImage(input: GenerateImageInput): Promise<{ jobId: string }>;
}

/** In-app call session tokens. Landing does not call this. */
export interface VoiceProvider {
  createVoiceSession(input: VoiceSessionInput): Promise<VoiceSession>;
}
