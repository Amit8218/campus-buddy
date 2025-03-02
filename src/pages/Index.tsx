
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ChatContainer } from "@/components/ChatContainer";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main className="flex-1">
        <section className="pt-20">
          <HeroSection />
        </section>
        
        <section className="py-16 px-4 lg:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <ChatContainer />
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Explore?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with Campus Buddy today and never miss important campus information again.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                Start Now
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
