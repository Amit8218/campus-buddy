
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "py-2 glass border-b shadow-sm" : "py-4 bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <CheckCircle className="h-6 w-6 text-primary mr-2" />
            <span className="font-display text-xl font-bold">Campus Buddy</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Products
              </a>
              <div className="absolute h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="relative group">
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <div className="absolute h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="relative group">
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Resources
              </a>
              <div className="absolute h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-secondary hover:border-primary">
              Sign in
            </Button>
            <Button size="sm" className="bg-primary text-background hover:bg-primary/90">
              Get started
              <svg className="ml-1 h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
          
          <button 
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="glass border-b px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Products
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Resources
              </a>
            </nav>
            
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center border-secondary hover:border-primary">
                Sign in
              </Button>
              <Button className="w-full justify-center bg-primary text-background hover:bg-primary/90">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
