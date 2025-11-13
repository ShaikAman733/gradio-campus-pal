import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500", isUser ? "flex-row-reverse" : "flex-row")}>
      <div className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-md",
        isUser 
          ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground ring-2 ring-primary/20" 
          : "bg-gradient-to-br from-secondary to-card text-secondary-foreground ring-2 ring-border/50"
      )}>
        {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </div>
      
      <div className={cn("flex flex-col gap-2 max-w-[80%] md:max-w-[70%]", isUser ? "items-end" : "items-start")}>
        <div className={cn(
          "rounded-2xl px-5 py-3.5 shadow-sm",
          isUser 
            ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-tr-md" 
            : "bg-card text-card-foreground border border-border/60 rounded-tl-md hover:border-border transition-colors"
        )}>
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">{message}</p>
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground/70 px-2 font-medium">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
};
