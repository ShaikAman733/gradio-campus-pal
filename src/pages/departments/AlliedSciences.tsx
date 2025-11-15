import { Atom, Calculator, FlaskConical, Languages } from "lucide-react";

const AlliedSciences = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Allied Sciences
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Foundation for Engineering Excellence
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About Allied Sciences</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Department of Allied Sciences provides the foundational knowledge in Physics, Chemistry, 
            Mathematics, and English that forms the backbone of engineering education. Our department is 
            committed to building strong fundamentals that enable students to excel in their core engineering disciplines.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With well-equipped laboratories and experienced faculty, we offer comprehensive courses that 
            blend theoretical concepts with practical applications, preparing students for advanced 
            engineering studies and research.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <Atom className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Physics</h3>
              <p className="text-sm text-muted-foreground">
                Engineering Physics, Mechanics, Thermodynamics, Electromagnetism
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <FlaskConical className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Chemistry</h3>
              <p className="text-sm text-muted-foreground">
                Engineering Chemistry, Materials Science, Environmental Chemistry
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Mathematics</h3>
              <p className="text-sm text-muted-foreground">
                Calculus, Linear Algebra, Differential Equations, Probability
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <Languages className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">English</h3>
              <p className="text-sm text-muted-foreground">
                Technical Communication, Presentation Skills, Professional English
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Laboratory Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Physics Labs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mechanics Laboratory</li>
                <li>• Optics Laboratory</li>
                <li>• Electronics Laboratory</li>
                <li>• Modern Physics Laboratory</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Chemistry Labs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• General Chemistry Laboratory</li>
                <li>• Analytical Chemistry Lab</li>
                <li>• Materials Testing Lab</li>
                <li>• Environmental Chemistry Lab</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why Allied Sciences Matter</h2>
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-muted-foreground text-center mb-6">
              Strong fundamentals in allied sciences are essential for:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-card-foreground">Engineering Analysis</h3>
                <p className="text-sm text-muted-foreground">Mathematical and scientific problem-solving</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-card-foreground">Innovation</h3>
                <p className="text-sm text-muted-foreground">Understanding principles behind new technologies</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-card-foreground">Communication</h3>
                <p className="text-sm text-muted-foreground">Effective technical and professional communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlliedSciences;
