import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about campus..."
          disabled={disabled}
          className="min-h-[64px] max-h-[140px] resize-none bg-background border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary rounded-2xl px-5 py-4 text-[15px] shadow-sm"
          rows={1}
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground/50 pointer-events-none">
          Press Enter to send
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="h-[64px] w-[64px] bg-gradient-to-br from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};
