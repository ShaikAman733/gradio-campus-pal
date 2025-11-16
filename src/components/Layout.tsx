import { Link, Outlet } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Index from "@/pages/Index";

const Layout = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary">RLJIT</div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors font-medium">
                  About
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/about/trust" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Trust</Link>
                  <Link to="/about/rljit" className="block px-4 py-2 hover:bg-secondary text-card-foreground">About RLJIT</Link>
                  <Link to="/about/founder" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Founder</Link>
                  <Link to="/about/principal" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Principal</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors font-medium">
                  Departments
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/departments/cse" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Computer Science & Engineering</Link>
                  <Link to="/departments/aiml" className="block px-4 py-2 hover:bg-secondary text-card-foreground">AI & Machine Learning</Link>
                  <Link to="/departments/cys" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Cybersecurity</Link>
                  <Link to="/departments/ds" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Data Science</Link>
                  <Link to="/departments/me" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Mechanical Engineering</Link>
                  <Link to="/departments/allied" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Allied Sciences</Link>
                  <Link to="/departments/mba" className="block px-4 py-2 hover:bg-secondary text-card-foreground">MBA</Link>
                  <Link to="/departments/mtech" className="block px-4 py-2 hover:bg-secondary text-card-foreground">M.Tech</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors font-medium">
                  Facilities
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/facilities/library" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Library</Link>
                  <Link to="/facilities/hostel" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Hostel</Link>
                  <Link to="/facilities/transport" className="block px-4 py-2 hover:bg-secondary text-card-foreground">Transport</Link>
                </div>
              </div>
              
              <Link to="/admissions" className="text-foreground hover:text-primary transition-colors font-medium">
                Admissions
              </Link>
              
              <Link to="/committees" className="text-foreground hover:text-primary transition-colors font-medium">
                Committees
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">Menu</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    <Link to="/" className="text-lg font-medium">Home</Link>
                    <div className="border-t pt-2">
                      <div className="font-semibold mb-2 text-muted-foreground">About</div>
                      <Link to="/about/trust" className="block pl-4 py-2">Trust</Link>
                      <Link to="/about/rljit" className="block pl-4 py-2">About RLJIT</Link>
                      <Link to="/about/founder" className="block pl-4 py-2">Founder</Link>
                      <Link to="/about/principal" className="block pl-4 py-2">Principal</Link>
                    </div>
                    <div className="border-t pt-2">
                      <div className="font-semibold mb-2 text-muted-foreground">Departments</div>
                      <Link to="/departments/cse" className="block pl-4 py-2">CSE</Link>
                      <Link to="/departments/aiml" className="block pl-4 py-2">AI & ML</Link>
                      <Link to="/departments/cys" className="block pl-4 py-2">Cybersecurity</Link>
                      <Link to="/departments/ds" className="block pl-4 py-2">Data Science</Link>
                      <Link to="/departments/me" className="block pl-4 py-2">Mechanical Engg</Link>
                      <Link to="/departments/allied" className="block pl-4 py-2">Allied Sciences</Link>
                      <Link to="/departments/mba" className="block pl-4 py-2">MBA</Link>
                      <Link to="/departments/mtech" className="block pl-4 py-2">M.Tech</Link>
                    </div>
                    <div className="border-t pt-2">
                      <div className="font-semibold mb-2 text-muted-foreground">Facilities</div>
                      <Link to="/facilities/library" className="block pl-4 py-2">Library</Link>
                      <Link to="/facilities/hostel" className="block pl-4 py-2">Hostel</Link>
                      <Link to="/facilities/transport" className="block pl-4 py-2">Transport</Link>
                    </div>
                    <Link to="/admissions" className="text-lg font-medium border-t pt-2">Admissions</Link>
                    <Link to="/committees" className="text-lg font-medium border-t pt-2">Committees</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact Us</h3>
              <p className="text-muted-foreground">
                R. L. Jalappa Institute of Technology<br />
                Kodigehalli, Doddaballapur-561203<br />
                Bengaluru Rural District, Karnataka<br />
                Email: info@rljit.ac.in
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/admissions" className="text-muted-foreground hover:text-primary">Admissions</Link></li>
                <li><Link to="/about/rljit" className="text-muted-foreground hover:text-primary">About RLJIT</Link></li>
                <li><a href="https://portal.vmedulife.com/public/auth/#/login/rljit-bangalore" className="text-muted-foreground hover:text-primary">ERP Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Accreditations</h3>
              <p className="text-muted-foreground">
                AICTE Approved<br />
                VTU Affiliated<br />
                NAAC Accredited
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 R. L. Jalappa Institute of Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 z-50"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-2xl p-0 overflow-hidden">
          <div className="h-full">
            <Index />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Layout;
