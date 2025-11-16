const MTech = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">M.Tech Programs</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Program Overview</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              The M.Tech programs at RLJIT are designed for engineering graduates who wish to specialize 
              in advanced areas of technology. Our programs emphasize research, innovation, and deep 
              technical knowledge.
            </p>
            <p className="text-card-foreground leading-relaxed">
              We offer M.Tech specializations in Computer Science and Engineering, preparing students 
              for research careers and advanced technical roles in industry.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Specializations</h2>
          <div className="space-y-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                M.Tech in Computer Science and Engineering
              </h3>
              <p className="text-muted-foreground mb-3">
                Advanced program covering areas like:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Advanced Algorithms and Data Structures</li>
                <li>• Machine Learning and AI</li>
                <li>• Cloud Computing and Distributed Systems</li>
                <li>• Cybersecurity and Cryptography</li>
                <li>• Big Data Analytics</li>
                <li>• Software Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Research Focus</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              All M.Tech students undertake a comprehensive research project in their final semester, 
              working on cutting-edge problems under the guidance of experienced faculty members.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Students are encouraged to publish their research in reputed journals and conferences, 
              contributing to the advancement of knowledge in their field.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Career Prospects</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Research Scientist</li>
              <li>• Senior Software Engineer</li>
              <li>• Technical Architect</li>
              <li>• Data Scientist</li>
              <li>• Academic Positions</li>
              <li>• R&D Engineer</li>
              <li>• Technology Consultant</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MTech;
