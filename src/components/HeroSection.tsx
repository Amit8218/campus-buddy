
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="spotlight"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Simplify</span><br />
            <span className="text-primary">compliance</span><br />
            <span className="text-white">with Google</span>
          </h1>
        </div>
        
        <div className="my-12 code-background animate-slide-up [animation-delay:0.3s] [animation-fill-mode:backwards]">
          <div className="code-line">import java.util.List;</div>
          <div className="code-line">import java.net.http.HttpResponse;</div>
          <div className="code-line">import java.net.URI;</div>
          <div className="code-line">&nbsp;</div>
          <div className="code-line">@RestController</div>
          <div className="code-line">public class DataController {'{'}</div>
          <div className="code-line">&nbsp;</div>
          <div className="code-line">  @GetMapping("/getPartnerAccountId")</div>
          <div className="code-line">  public String getPartnerAccountId(@RequestParam("userId") String userId) {'{'}</div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-down [animation-delay:0.4s] [animation-fill-mode:backwards]">
          <Button size="lg" className="font-medium bg-primary text-background hover:bg-primary/90">
            Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-medium border-secondary hover:border-primary">
            Learn More
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="glass-card p-4 px-6 rounded-xl flex items-center gap-3 animate-float">
            <div className="h-10 w-10 flex items-center justify-center bg-primary/20 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-medium">Campus Buddy</h3>
              <p className="text-xs text-muted-foreground">Smart AI assistant for campus information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9 12L11 14L15 10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
