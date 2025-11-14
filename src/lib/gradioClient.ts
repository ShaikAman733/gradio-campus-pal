import { Client } from "@gradio/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGradio = async (message: string): Promise<string> => {
  try {
    const client = await Client.connect("amanshaik7/mate");
    // The API expects an array format, not an object
    const result = await client.predict("/chat", [message]);

    console.log("Full API result:", result);
    console.log("API result.data:", result.data);
    
    // The API returns JSON data
    if (result && result.data !== undefined && result.data !== null) {
      // Convert to string if it's not already
      const response = typeof result.data === 'string' 
        ? result.data 
        : JSON.stringify(result.data);
      return response;
    }
    
    throw new Error("Invalid response from chatbot");
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    throw new Error("Failed to get response from chatbot. Please try again.");
  }
};
