import { useState, useEffect, useRef } from "react";
import { Menu, Download, Upload, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/chat/ThemeToggle";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { Composer } from "@/components/chat/Composer";
import { TypingIndicator } from "@/components/TypingIndicator";
import { DateSeparator } from "@/components/chat/DateSeparator";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { isSameDay } from "date-fns";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chat-history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })));
      } catch (err) {
        console.error('Failed to load chat history:', err);
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Keyboard shortcut for dev panel (Ctrl+K)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Show dev panel options
        const action = prompt('Dev Panel:\n1. Clear chat history\n2. Toggle theme\n3. Simulate long response\n\nEnter number:');
        
        if (action === '1') {
          handleClearHistory();
        } else if (action === '2') {
          document.documentElement.classList.toggle('dark');
        } else if (action === '3') {
          simulateLongResponse();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleSendMessage = async (message: string, files: File[]) => {
    if (!message.trim() && files.length === 0) return;

    const userMessage: Message = {
      role: 'user',
      content: message || `[${files.length} file(s) attached]`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Replace with actual Botpress API integration
      // For now, using a mock response
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: `I received your message: "${message}". This is a mock response. To integrate with Botpress, you'll need to use their Web Chat API with proper authentication. Check the documentation at https://botpress.com/docs`,
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

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question, []);
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear chat history?')) {
      setMessages([]);
      localStorage.removeItem('chat-history');
      localStorage.removeItem('bp-conversation-id');
      toast({ description: "Chat history cleared" });
    }
  };

  const handleExportChat = () => {
    const dataStr = JSON.stringify(messages, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chat-export-${Date.now()}.json`;
    link.click();
    toast({ description: "Chat history exported" });
  };

  const handleImportChat = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target?.result as string);
          setMessages(imported.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          })));
          toast({ description: "Chat history imported" });
        } catch (err) {
          toast({
            title: "Import failed",
            description: "Invalid JSON file",
            variant: "destructive"
          });
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const simulateLongResponse = async () => {
    const longText = "This is a simulated long response for testing purposes. ".repeat(20);
    const userMsg: Message = {
      role: 'user',
      content: 'Test long response',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const assistantMsg: Message = {
      role: 'assistant',
      content: longText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  // Group messages by date
  const messageGroups: { date: Date; messages: Message[] }[] = [];
  messages.forEach((msg) => {
    const lastGroup = messageGroups[messageGroups.length - 1];
    if (lastGroup && isSameDay(lastGroup.date, msg.timestamp)) {
      lastGroup.messages.push(msg);
    } else {
      messageGroups.push({ date: msg.timestamp, messages: [msg] });
    }
  });

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <ChatSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onQuestionClick={handleQuestionClick}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="shrink-0 border-b border-border bg-card/95 backdrop-blur-lg shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div>
                <h1 className="font-display font-bold text-lg bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  RLJIT Campus Mate
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Your AI Campus Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleImportChat}
                title="Import chat history"
                className="h-9 w-9"
              >
                <Upload className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleExportChat}
                title="Export chat history"
                className="h-9 w-9"
                disabled={messages.length === 0}
              >
                <Download className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClearHistory}
                title="Clear chat history"
                className="h-9 w-9 text-destructive"
                disabled={messages.length === 0}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1 px-4 lg:px-6">
          <div className="max-w-4xl mx-auto py-6">
            {messages.length === 0 ? (
              <WelcomeScreen onQuestionClick={handleQuestionClick} />
            ) : (
              <>
                {messageGroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <DateSeparator date={group.date} />
                    {group.messages.map((msg, msgIndex) => (
                      <MessageBubble
                        key={`${groupIndex}-${msgIndex}`}
                        message={msg.content}
                        isUser={msg.role === 'user'}
                        timestamp={msg.timestamp}
                      />
                    ))}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent border border-accent/20">
                      <span className="text-xs">🤖</span>
                    </div>
                    <TypingIndicator />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </ScrollArea>

        {/* Composer */}
        <div className="shrink-0 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <Composer onSend={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
