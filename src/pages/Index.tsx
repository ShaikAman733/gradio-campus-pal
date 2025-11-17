import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { TypingIndicator } from "@/components/TypingIndicator";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [botpressWebchat, setBotpressWebchat] = useState<any>(null);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Botpress webchat
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          composerPlaceholder: 'Type a message...',
          botConversationDescription: 'Your AI Campus Assistant',
          botId: '2J0Y7YX0',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v3.3',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: '2J0Y7YX0',
          webhookId: 'your-webhook-id',
          lazySocket: true,
          hideWidget: true, // Hide the default widget
          disableAnimations: false,
          closeOnEscape: false,
          showConversationsButton: false,
          enableTranscriptDownload: false,
          className: 'webchatIframe',
          containerWidth: '100%25',
          layoutWidth: '100%25',
          showPoweredBy: false,
        });
        setBotpressWebchat(window.botpressWebChat);
      }
    };

    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send message to Botpress using their messaging API
      const response = await fetch('https://messaging.botpress.cloud/api/v1/webchat/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'text',
          text: message,
          conversationId: localStorage.getItem('bp-conversation-id') || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message to Botpress');
      }

      const data = await response.json();
      
      // Store conversation ID for future messages
      if (data.conversationId) {
        localStorage.setItem('bp-conversation-id', data.conversationId);
      }

      // Get bot response
      const botResponse = data.responses?.[0]?.text || 'Sorry, I could not process your request.';
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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
            <div className="space-y-4 pb-4" ref={scrollRef}>
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
