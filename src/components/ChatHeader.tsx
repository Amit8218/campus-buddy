
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  className?: string;
}

export function ChatHeader({ className }: ChatHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 px-6 pt-6", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse-gentle"></div>
          <h2 className="text-lg font-semibold tracking-tight">Campus Buddy</h2>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-flex h-6 items-center rounded-full border px-2.5 text-xs font-semibold transition-colors">
            Online
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Ask me anything about your campus
      </p>
    </div>
  );
}
