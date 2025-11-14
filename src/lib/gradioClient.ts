import { Client } from "@gradio/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGradio = async (message: string): Promise<string> => {
  try {
    const client = await Client.connect("amanshaik7/mate");
    const result = await client.predict("/chat", { 		
      message: message, 
    });

    // Extract the response from the result
    if (result && result.data) {
      // Handle both string and object responses
      if (typeof result.data === 'string') {
        return result.data;
      }
      // If it's an object with content property, extract it
      if (typeof result.data === 'object' && 'content' in result.data) {
        return result.data.content as string;
      }
      // If it's an array, get the first item's content
      if (Array.isArray(result.data) && result.data.length > 0) {
        const firstItem = result.data[0];
        if (typeof firstItem === 'string') return firstItem;
        if (typeof firstItem === 'object' && 'content' in firstItem) {
          return firstItem.content as string;
        }
      }
    }
    
    throw new Error("Invalid response from chatbot");
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    throw new Error("Failed to get response from chatbot. Please try again.");
  }
};
