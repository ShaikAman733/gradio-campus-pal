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
      // Handle if response is an object with content property
      if (typeof result.data === 'object' && result.data !== null) {
        if ('content' in result.data) {
          return result.data.content as string;
        }
        // Handle if it's an array of messages
        if (Array.isArray(result.data) && result.data.length > 0) {
          const lastMessage = result.data[result.data.length - 1];
          if (typeof lastMessage === 'object' && 'content' in lastMessage) {
            return lastMessage.content as string;
          }
        }
      }
      // If it's already a string, return it
      if (typeof result.data === 'string') {
        return result.data;
      }
    }
    
    throw new Error("Invalid response from AI");
  } catch (error) {
    console.error("Error communicating with AI:", error);
    throw new Error("Failed to get response from AI. Please try again.");
  }
};
