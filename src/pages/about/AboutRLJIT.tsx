import { GraduationCap, Trophy } from "lucide-react";

const AboutRLJIT = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About RLJIT
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Building Future Leaders in Technology Since 2001
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              R. L. Jalappa Institute of Technology (RLJIT) established in the year 2001 at Doddaballapur, 
              Bangalore Rural District by Sri R. L. Jalappa, a visionary, social worker and educationist. 
              RLJIT is a unit of Sri Devaraj Urs Educational Trust (SDUET) founded in the year 1986 at Kolar 
              to serve the people of rural and backward classes. It is approved by AICTE – New Delhi and is 
              affiliated to VTU- Belgaum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The institution is having well qualified, experienced and dedicated team of teaching, non-teaching 
              faculty and state of art laboratories in all the departments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RLJIT is spread across 34 acres of land, amidst greenery gardens having excellent infrastructure 
              with independent block for each department, well stacked library, equipped seminar halls, internet, 
              Wi-Fi facility, separate hostels accommodating 600 students for boys and girls within the campus, 
              24hrs. medical facility, modern Gymnasium, Indoor games, Swimming Pool national standard playgrounds 
              and an open air theater of 2500 seating capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">Vision</h3>
              <p className="text-center text-muted-foreground text-lg leading-relaxed">
                "To be a premier institution by imparting Quality in Technical Education, 
                Professional Training and Research"
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">Mission</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Mission M1:</strong> "To provide an outstanding Teaching, 
                  Learning and Research environment through Innovative Practices in Quality Education"
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Mission M2:</strong> "To develop Leaders with high level 
                  of Professionalism to have a career in the Industry, Zeal for Higher Education, focus on 
                  Entrepreneurial and Societal activities"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Infrastructure</h3>
              <p className="text-muted-foreground">34-acre campus with modern facilities, independent department blocks, and lush greenery</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Academic Excellence</h3>
              <p className="text-muted-foreground">AICTE approved, VTU affiliated programs with experienced faculty</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Student Facilities</h3>
              <p className="text-muted-foreground">Hostels for 600 students, 24/7 medical facility, gymnasium, swimming pool</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Research & Innovation</h3>
              <p className="text-muted-foreground">State-of-the-art laboratories and research facilities across all departments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRLJIT;
