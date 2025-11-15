import { CheckCircle, FileText, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admissions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Join RLJIT - Shape Your Future in Engineering
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to RLJIT</h2>
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to RLJ Institute of Technology, a prestigious engineering college dedicated to 
                  shaping the future of the engineering profession. With a strong emphasis on academic 
                  excellence, industry relevance, and holistic development, we provide a comprehensive 
                  educational experience that prepares students to thrive in a rapidly changing world.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At RLJIT, we boast a distinguished faculty comprising accomplished scholars, industry 
                  experts, and experienced educators who are committed to imparting knowledge and 
                  fostering critical thinking skills. Our rigorous and innovative curriculum is designed 
                  to cultivate technical proficiency, problem-solving abilities, and a deep understanding 
                  of engineering principles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We take pride in our state-of-the-art infrastructure, well-equipped laboratories, and 
                  cutting-edge research facilities that facilitate hands-on learning and foster 
                  innovation. Through industry collaborations, internships, and guest lectures, we ensure 
                  that our students gain practical exposure and stay updated with the latest industry trends.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Programs Offered</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">B.E. Computer Science & Engineering</h3>
              <p className="text-muted-foreground mb-4">4-year undergraduate program</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>AICTE Approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>VTU Affiliated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry-focused curriculum</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">B.E. Data Science</h3>
              <p className="text-muted-foreground mb-4">4-year undergraduate program</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cutting-edge curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Research opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">B.E. Cybersecurity</h3>
              <p className="text-muted-foreground mb-4">4-year undergraduate program</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Specialized training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Certification support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Expert faculty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">1. Application</h3>
              <p className="text-sm text-muted-foreground">Submit online application with required documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">2. Entrance Exam</h3>
              <p className="text-sm text-muted-foreground">Qualify in KCET/COMED-K or equivalent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">3. Counseling</h3>
              <p className="text-sm text-muted-foreground">Attend counseling session and select branch</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">4. Enrollment</h3>
              <p className="text-sm text-muted-foreground">Complete admission formalities and join</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RLJIT */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose RLJIT?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">Vibrant Campus Life</h3>
              <p className="text-muted-foreground">
                Beyond academics, RLJIT offers a vibrant campus life with a plethora of clubs, societies, and 
                extracurricular activities that cater to diverse interests.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">Holistic Development</h3>
              <p className="text-muted-foreground">
                We encourage students to actively participate in cultural, sports, and social events, fostering 
                personal growth, leadership skills, and lifelong friendships.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">Industry Connections</h3>
              <p className="text-muted-foreground">
                Strong industry collaborations, internships, and guest lectures ensure practical exposure and 
                updated knowledge of industry trends.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">Excellent Placements</h3>
              <p className="text-muted-foreground">
                Dedicated placement cell with strong industry partnerships ensuring successful career launches 
                for our graduates.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Apply Now for 2024-25
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
