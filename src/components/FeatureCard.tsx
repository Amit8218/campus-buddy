
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl p-6 glass-card hover:shadow-soft transition-smooth",
      className
    )}>
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></div>
    </div>
  );
}
