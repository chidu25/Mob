import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. I cannot reply.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    // Convert history to string context or use multi-turn chat if implementing full chat object
    // For simplicity in this single-file service, we'll use generateContent with a system prompt context
    // or just the latest message for now, but a chat object is better.
    
    // Let's use a fresh chat for simplicity or just stateless generation for this demo
    // to avoid complex state management in the UI for the `history` object mapping.
    // However, to be "world class", let's do a simple generation.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: "You are a helpful, witty, and concise AI assistant living inside a simulated iPhone web app. Keep responses short (under 50 words) and conversational, like Siri or a personal assistant.",
      }
    });

    return response.text || "I'm not sure what to say.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the cloud right now.";
  }
};
