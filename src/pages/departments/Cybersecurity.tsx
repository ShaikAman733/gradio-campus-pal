import { Shield, Lock, AlertTriangle, Key } from "lucide-react";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Cybersecurity
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Protecting the Digital World
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About Cybersecurity Program</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Cybersecurity program at RLJIT prepares students to become experts in protecting digital 
            assets and information systems. With the growing threat landscape, cybersecurity professionals 
            are in high demand across all industries.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive curriculum covers network security, cryptography, ethical hacking, incident 
            response, and security compliance, providing students with both theoretical knowledge and 
            practical skills needed in the cybersecurity field.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Network Security</h3>
              <p className="text-sm text-muted-foreground">Advanced training in securing network infrastructure</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Cryptography</h3>
              <p className="text-sm text-muted-foreground">In-depth study of encryption and data protection</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Ethical Hacking</h3>
              <p className="text-sm text-muted-foreground">Hands-on penetration testing and vulnerability assessment</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <Key className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Security Compliance</h3>
              <p className="text-sm text-muted-foreground">Understanding security standards and regulations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Security Roles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security Analyst</li>
                <li>• Penetration Tester</li>
                <li>• Security Architect</li>
                <li>• Incident Response Specialist</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">Specialized Fields</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Threat Intelligence Analyst</li>
                <li>• Forensics Investigator</li>
                <li>• Security Consultant</li>
                <li>• Chief Information Security Officer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
