import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "./FileUploader";

interface ComposerProps {
  onSend: (message: string, files: File[]) => void;
  disabled?: boolean;
}

export const Composer = ({ onSend, disabled }: ComposerProps) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && files.length === 0) return;
    
    onSend(message, files);
    setMessage("");
    setFiles([]);
    
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-border bg-background/95 backdrop-blur-lg p-4 space-y-2">
      <FileUploader onFilesChange={setFiles} disabled={disabled} />
      
      <div className="flex items-end gap-2">
        <div className="flex-1 relative">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Shift + Enter for new line)"
            disabled={disabled}
            className="min-h-[44px] max-h-[150px] resize-none pr-12 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary"
            rows={1}
          />
        </div>
        
        <Button
          type="submit"
          size="icon"
          disabled={disabled || (!message.trim() && files.length === 0)}
          className="h-11 w-11 rounded-full shrink-0 shadow-lg hover:shadow-xl transition-shadow"
        >
          {disabled ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground px-1">
        Press Enter to send • Shift + Enter for new line
      </p>
    </form>
  );
};
