const MechanicalEngineering = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Mechanical Engineering</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Department Overview</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              The Department of Mechanical Engineering at RLJIT is one of the oldest and most respected 
              departments, offering comprehensive education in the core discipline of engineering. We focus 
              on developing strong fundamentals while incorporating modern technologies and practices.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Our curriculum covers thermodynamics, fluid mechanics, manufacturing, design, robotics, and 
              renewable energy, preparing students for diverse career opportunities.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">CAD/CAM Labs</h3>
              <p className="text-muted-foreground">
                Advanced computer-aided design and manufacturing labs with latest software tools.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Workshop</h3>
              <p className="text-muted-foreground">
                Well-equipped workshop with CNC machines, lathe machines, and modern manufacturing equipment.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Thermal Lab</h3>
              <p className="text-muted-foreground">
                State-of-the-art thermal engineering laboratory for heat transfer and thermodynamics experiments.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Materials Testing</h3>
              <p className="text-muted-foreground">
                Comprehensive materials testing lab with universal testing machines and other equipment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Career Paths</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Design Engineer</li>
              <li>• Production Engineer</li>
              <li>• Automotive Engineer</li>
              <li>• Quality Control Engineer</li>
              <li>• Project Manager</li>
              <li>• Research & Development</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MechanicalEngineering;
