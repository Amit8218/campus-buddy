
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4 animate-fade-in">
          <span className="text-xs">Campus Information Chatbot</span>
        </div>
        
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 animate-slide-down [animation-delay:0.2s] [animation-fill-mode:backwards]">
          Your <span className="text-primary">Campus Buddy</span><br />Always Ready to Help
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-down [animation-delay:0.3s] [animation-fill-mode:backwards] text-balance">
          Get instant answers about courses, schedules, facilities, and everything else about your campus. 
          Our AI-powered chatbot is available 24/7 to assist you.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-down [animation-delay:0.4s] [animation-fill-mode:backwards]">
          <Button size="lg" className="font-medium">
            Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
