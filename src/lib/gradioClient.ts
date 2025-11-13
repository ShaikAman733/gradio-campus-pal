import { Client } from "@gradio/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGradio = async (message: string): Promise<string> => {
  try {
    const client = await Client.connect("amanshaik7/college_chatbot");
    const result = await client.predict("/chat", { 		
      message: message, 
    });

    // Extract the response from the result
    // The exact structure might vary based on the API response
    if (result && result.data) {
      return result.data as string;
    }
    
    throw new Error("Invalid response from chatbot");
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    throw new Error("Failed to get response from chatbot. Please try again.");
  }
};
