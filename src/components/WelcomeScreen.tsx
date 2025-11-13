import { GraduationCap, MapPin, Calendar, Book, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onQuestionClick: (question: string) => void;
}

const suggestedQuestions = [
  { icon: MapPin, text: "Where is the library located?", color: "text-primary" },
  { icon: Calendar, text: "What are the campus event schedules?", color: "text-accent" },
  { icon: Book, text: "How do I register for courses?", color: "text-primary" },
  { icon: Users, text: "Tell me about student clubs", color: "text-accent" },
];

export const WelcomeScreen = ({ onQuestionClick }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-8 animate-in fade-in duration-700">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-lg mb-4">
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Campus Mate
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your friendly college assistant. Ask me anything about campus life, courses, events, and more!
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
            <HelpCircle className="h-4 w-4" />
            <span>Try asking:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 px-4 justify-start text-left hover:bg-secondary hover:border-primary transition-all duration-300"
                onClick={() => onQuestionClick(question.text)}
              >
                <question.icon className={`h-5 w-5 mr-3 shrink-0 ${question.color}`} />
                <span className="text-sm">{question.text}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
