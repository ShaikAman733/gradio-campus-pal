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
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 animate-in fade-in duration-700">
      <div className="max-w-3xl w-full space-y-12">
        <div className="text-center space-y-6">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-full"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-glow shadow-2xl shadow-primary/30 rotate-3 hover:rotate-6 transition-transform duration-300">
              <GraduationCap className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
              Campus Mate
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed">
              Your friendly AI assistant for everything campus-related
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground justify-center">
            <HelpCircle className="h-4 w-4" />
            <span>Popular questions</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onQuestionClick(question.text)}
                className="group relative h-auto py-5 px-5 justify-start text-left rounded-2xl border border-border bg-card hover:bg-card/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-${question.color === 'text-primary' ? 'primary' : 'accent'}/10 to-${question.color === 'text-primary' ? 'primary' : 'accent'}/5 group-hover:scale-110 transition-transform duration-300`}>
                    <question.icon className={`h-5 w-5 ${question.color}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground leading-relaxed flex-1 pt-1.5">
                    {question.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Type your question below to get started 👇
          </p>
        </div>
      </div>
    </div>
  );
};
