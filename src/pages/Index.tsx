import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { TypingIndicator } from "@/components/TypingIndicator";
import { sendMessageToGemini, ChatMessage as ChatMessageType } from "@/lib/gradioClient";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (message: string) => {
    const userMessage: ChatMessageType = {
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(message);
      
      const assistantMessage: ChatMessageType = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="p-4 border-b border-border/60 bg-background/80 backdrop-blur-sm shrink-0">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
          Campus Mate
        </h1>
        <p className="text-center text-muted-foreground text-sm mt-1">Your AI Campus Assistant</p>
      </header>

      {/* Chat Area */}
      <div className="flex-1 px-4 py-4 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          {messages.length === 0 ? (
            <WelcomeScreen onQuestionClick={handleSendMessage} />
          ) : (
            <div className="space-y-4 pb-4">
              {messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  message={msg.content}
                  isUser={msg.role === 'user'}
                  timestamp={msg.timestamp}
                />
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Input Area */}
      <div className="border-t border-border/60 bg-background/80 backdrop-blur-sm p-4 shrink-0">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;
