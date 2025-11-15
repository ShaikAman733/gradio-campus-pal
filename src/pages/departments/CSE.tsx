import { Code, Cpu, Database, Brain } from "lucide-react";

const CSE = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Computer Science & Engineering
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Building Tomorrow's Technology Leaders
          </p>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About the Department</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Department of Computer Science & Engineering at RLJIT is dedicated to producing skilled 
              professionals equipped with cutting-edge knowledge and practical skills in computer science. 
              Our curriculum is designed to meet industry standards and includes comprehensive coverage of 
              programming, software development, data structures, algorithms, and emerging technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With state-of-the-art laboratories, experienced faculty, and strong industry connections, the 
              department provides an excellent learning environment that fosters innovation, critical thinking, 
              and problem-solving abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-card-foreground">Modern Labs</h3>
              <p className="text-sm text-muted-foreground">Well-equipped computer labs with latest hardware and software</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-card-foreground">AI & ML Focus</h3>
              <p className="text-sm text-muted-foreground">Specialized courses in artificial intelligence and machine learning</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-card-foreground">Big Data</h3>
              <p className="text-sm text-muted-foreground">Hands-on experience with big data technologies and analytics</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2 text-card-foreground">IoT & Cloud</h3>
              <p className="text-sm text-muted-foreground">Training in Internet of Things and cloud computing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Curriculum Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Core Subjects</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Data Structures & Algorithms</li>
                <li>• Object-Oriented Programming</li>
                <li>• Database Management Systems</li>
                <li>• Operating Systems</li>
                <li>• Computer Networks</li>
                <li>• Software Engineering</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Specializations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Artificial Intelligence</li>
                <li>• Machine Learning</li>
                <li>• Web Development</li>
                <li>• Mobile Application Development</li>
                <li>• Cloud Computing</li>
                <li>• Cybersecurity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Opportunities</h2>
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Graduates from our CSE department are well-prepared for diverse career paths in the IT industry:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">Software Developer</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">Data Scientist</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">Systems Analyst</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">Web Developer</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">Network Engineer</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-card-foreground">AI/ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSE;
