import { Client } from "@gradio/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGradio = async (message: string): Promise<string> => {
  try {
    const client = await Client.connect("amanshaik7/mate");
    const result = await client.predict("/chat", [message]);

    // The API returns: [[{"role":"assistant","content":"..."},{"role":"assistant","content":"..."}]]
    if (result && result.data && Array.isArray(result.data)) {
      // Get the outer array's first element
      const outerArray = result.data[0];
      
      if (Array.isArray(outerArray) && outerArray.length > 0) {
        // Get the last message from the conversation
        const lastMessage = outerArray[outerArray.length - 1];
        
        if (lastMessage && typeof lastMessage === 'object' && 'content' in lastMessage) {
          return lastMessage.content as string;
        }
      }
    }
    
    throw new Error("Invalid response from chatbot");
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    throw new Error("Failed to get response from chatbot. Please try again.");
  }
};
