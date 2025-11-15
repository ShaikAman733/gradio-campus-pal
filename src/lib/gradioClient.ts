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
      // Gradio returns nested array: [[{role, content}, {role, content}], null]
      if (Array.isArray(result.data) && result.data.length > 0) {
        const messages = result.data[0];
        if (Array.isArray(messages) && messages.length > 0) {
          // Get the last message (AI's response)
          const lastMessage = messages[messages.length - 1];
          if (typeof lastMessage === 'object' && 'content' in lastMessage) {
            return lastMessage.content as string;
          }
        }
      }
      
      // Fallback: if it's a plain string
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
