import { supabase } from "@/integrations/supabase/client";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('chat', {
      body: { message }
    });

    if (error) {
      console.error("Error calling chat function:", error);
      throw new Error("Failed to get response from AI. Please try again.");
    }

    if (data && data.response) {
      return data.response;
    }
    
    throw new Error("Invalid response from AI");
  } catch (error) {
    console.error("Error communicating with AI:", error);
    throw new Error("Failed to get response from AI. Please try again.");
  }
};
