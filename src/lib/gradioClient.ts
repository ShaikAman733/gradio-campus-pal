import { Client } from "@gradio/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const client = await Client.connect("amanshaik7/mate");
    const result = await client.predict("/chat", { 
      message: message
    });

    console.log(result.data);
    
    if (result.data) {
      return result.data as string;
    }
    
    throw new Error("Invalid response from AI");
  } catch (error) {
    console.error("Error communicating with AI:", error);
    throw new Error("Failed to get response from AI. Please try again.");
  }
};
