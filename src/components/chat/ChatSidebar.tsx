import { useState, useEffect } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface Department {
  id: string;
  name: string;
  icon: string;
  path: string;
}

interface FAQ {
  id: string;
  question: string;
  category: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionClick: (question: string) => void;
}

export const ChatSidebar = ({ isOpen, onClose, onQuestionClick }: ChatSidebarProps) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [faqs, setFAQs] = useState<FAQ[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"departments" | "faq">("faq");

  useEffect(() => {
    fetch("/docs/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data.departments || []);
        setFAQs(data.faq || []);
      })
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
  };

  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-card border-r border-border shadow-xl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg">Quick Access</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab("faq")}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === "faq"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Quick Questions
          </button>
          <button
            onClick={() => setActiveTab("departments")}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === "departments"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Departments
          </button>
        </div>

        {/* Content */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            {activeTab === "faq" && (
              <>
                {Object.entries(groupedFAQs).map(([category, questions]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      {questions.map((faq) => (
                        <button
                          key={faq.id}
                          onClick={() => {
                            onQuestionClick(faq.question);
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors group text-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="line-clamp-2">{faq.question}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "departments" && (
              <div className="space-y-2">
                {filteredDepartments.map((dept) => (
                  <a
                    key={dept.id}
                    href={dept.path}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {getIcon(dept.icon)}
                    </div>
                    <span className="flex-1 text-sm font-medium">{dept.name}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            )}

            {((activeTab === "faq" && filteredFAQs.length === 0) ||
              (activeTab === "departments" && filteredDepartments.length === 0)) && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No results found
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
