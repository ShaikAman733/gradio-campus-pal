import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-md bg-gradient-to-br from-secondary to-card text-secondary-foreground ring-2 ring-border/50">
        <Bot className="h-5 w-5" />
      </div>
      
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md px-5 py-3.5 bg-card border border-border/60 shadow-sm">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};
