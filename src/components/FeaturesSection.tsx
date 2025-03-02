
import { FeatureCard } from "./FeatureCard";
import { School, Calendar, Clock, Users, BookOpen, MapPin } from "lucide-react";

export function FeaturesSection() {
  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Smart Campus Assistant
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered chatbot provides instant answers to all your campus-related questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={School}
            title="Course Information"
            description="Get details about courses, prerequisites, professors, and syllabi instantly."
          />
          <FeatureCard
            icon={Calendar}
            title="Events & Schedules"
            description="Stay updated with campus events, exam schedules, and important dates."
          />
          <FeatureCard
            icon={Clock}
            title="24/7 Availability"
            description="Access information anytime, day or night, without waiting in lines or during office hours."
          />
          <FeatureCard
            icon={Users}
            title="Faculty Directory"
            description="Find contact information for professors and staff across all departments."
          />
          <FeatureCard
            icon={BookOpen}
            title="Library Resources"
            description="Check book availability, opening hours, and access digital resources."
          />
          <FeatureCard
            icon={MapPin}
            title="Campus Navigation"
            description="Locate buildings, classrooms, parking, and facilities around campus."
          />
        </div>
      </div>
    </div>
  );
}
