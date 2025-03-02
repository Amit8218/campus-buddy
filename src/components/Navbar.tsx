
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
            <span className="font-display text-xl font-bold">Campus Buddy</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
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
                Features
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
