
import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatContainerProps {
  className?: string;
}

export function ChatContainer({ className }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      content: "👋 Hi there! I'm your Campus Buddy. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        "hi": "Hello there! How can I help you with your campus inquiries today?",
        "hello": "Hi! I'm your Campus Buddy. What would you like to know about your campus?",
        "help": "I can help with information about campus facilities, courses, faculty contacts, events, and general student services. Just ask!",
        "library": "The campus library is open from 8 AM to 10 PM on weekdays, and 10 AM to 6 PM on weekends. You can access the digital catalog through the student portal.",
        "courses": "We offer a wide range of courses across multiple disciplines. You can check the full course catalog on the student portal or ask me about specific departments.",
        "events": "There are several upcoming events including the Tech Fest next week and the Cultural Night at the end of the month. Check the campus notice board for more details.",
        "faculty": "Our faculty directory is available online. You can search by name or department. Would you like me to help you find a specific professor?",
        "cafeteria": "The main cafeteria is open from 7 AM to 8 PM daily. We also have coffee shops in the library and science buildings.",
        "sports": "Our campus has facilities for basketball, tennis, swimming, and track. The gym is open to all students with a valid ID card.",
        "exams": "The final exam schedule is published three weeks before the exam period. You can find your personal schedule on the student portal.",
        "deadline": "Most assignment deadlines are set by individual professors. Check your course syllabus or the class portal for specific dates.",
        "wifi": "Campus WiFi is available throughout all buildings. Connect to 'Campus-Net' using your student credentials.",
        "parking": "Student parking is available in Lots A, B, and C. You need a valid parking permit which can be purchased from the administration office.",
        "housing": "On-campus housing applications for next semester are due by the end of this month. Visit the Housing Office or check their website for details.",
        "thanks": "You're welcome! Feel free to ask if you have any other questions. I'm here to help!",
        "thank you": "You're welcome! Is there anything else you'd like to know about the campus?",
      };
      
      // Find a relevant response or use default
      const lowerContent = content.toLowerCase();
      let responseContent = "I don't have specific information about that yet. Please check with the campus administration office or the student portal.";
      
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowerContent.includes(keyword)) {
          responseContent = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={cn("flex h-full w-full flex-col overflow-hidden rounded-md border glass-card", className)}>
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <ChatMessage
            content=""
            isLoading={true}
            timestamp={new Date()}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
