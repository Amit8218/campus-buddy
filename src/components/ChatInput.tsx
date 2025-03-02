
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  className?: string;
}

export function ChatInput({ onSend, disabled = false, className }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative mt-auto flex items-center px-4 py-4 chat-input-container",
        className
      )}
    >
      <input
        type="text"
        placeholder="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-sm px-4 py-2.5 rounded-full bg-secondary/50"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={disabled || !input.trim()} 
        className="ml-2 h-9 w-9 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-200"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}
