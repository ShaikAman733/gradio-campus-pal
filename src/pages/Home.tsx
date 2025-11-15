import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            R. L. Jalappa Institute of Technology
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Approved By AICTE, New Delhi | Affiliated to VTU, Belagavi
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            Kodigehalli, Doddaballapur-561203, Bengaluru Rural District, Karnataka, India
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
            <Link to="/admissions">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
                Apply Now
              </Button>
            </Link>
            <Link to="/about/rljit">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Welcome to RLJIT</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              R. L. Jalappa Institute of Technology (RLJIT) established in 2001 at Doddaballapur, Bangalore Rural District 
              by Sri R. L. Jalappa, a visionary, social worker and educationist. RLJIT is a unit of Sri Devaraj Urs Educational 
              Trust (SDUET) founded in 1986 to serve the people of rural and backward classes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spread across 34 acres of land with excellent infrastructure, well-stacked library, equipped seminar halls, 
              separate hostels accommodating 600 students, 24hrs medical facility, modern Gymnasium, Indoor games, 
              Swimming Pool, and national standard playgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">Vision</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                "To be a premier institution by imparting Quality in Technical Education, 
                Professional Training and Research"
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">Mission</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-3">
                <strong>M1:</strong> "To provide an outstanding Teaching, Learning and Research environment 
                through Innovative Practices in Quality Education"
              </p>
              <p className="text-muted-foreground text-center leading-relaxed">
                <strong>M2:</strong> "To develop Leaders with high level of Professionalism for careers in 
                Industry, Higher Education, Entrepreneurial and Societal activities"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4500+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">34</div>
              <div className="text-muted-foreground">Acres Campus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose RLJIT?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Quality Education</h3>
              <p className="text-muted-foreground">
                AICTE approved programs with industry-relevant curriculum and experienced faculty
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Modern Infrastructure</h3>
              <p className="text-muted-foreground">
                State-of-the-art labs, library, hostels, sports facilities, and open-air theater
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Excellent Placements</h3>
              <p className="text-muted-foreground">
                Strong industry connections and dedicated placement cell for career success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
