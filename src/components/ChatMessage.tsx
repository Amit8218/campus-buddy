
import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useRef, useState } from "react";

interface ChatMessageProps {
  content: string;
  isUser?: boolean;
  isLoading?: boolean;
  timestamp?: Date;
  className?: string;
}

export const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ content, isUser = false, isLoading = false, timestamp = new Date(), className }, ref) => {
    const [visible, setVisible] = useState(false);
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        ref={ref || messageRef}
        className={cn(
          "flex w-full items-start gap-2 transition-opacity px-4",
          {
            "justify-end": isUser,
            "opacity-0": !visible,
            "opacity-100": visible,
          },
          className
        )}
        style={{ transitionDuration: "300ms" }}
      >
        {!isUser && (
          <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary/10 text-primary">
            CB
          </div>
        )}
        <div
          className={cn(
            "max-w-[80%] rounded-xl px-4 py-2.5 message-fade-in",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          )}
        >
          {isLoading ? (
            <div className="flex space-x-1 items-center justify-center h-6">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></div>
            </div>
          ) : (
            <>
              <p className="text-sm leading-relaxed">{content}</p>
              <div className="mt-1 flex justify-end">
                <p className="text-[10px] text-muted-foreground/50">
                  {timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </>
          )}
        </div>
        {isUser && (
          <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground">
            U
          </div>
        )}
      </div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";
