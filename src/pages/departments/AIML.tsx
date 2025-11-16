const AIML = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        Artificial Intelligence & Machine Learning
      </h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Department Overview</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              The Department of Artificial Intelligence and Machine Learning at RLJIT is at the forefront 
              of cutting-edge technology education. We prepare students to excel in the rapidly evolving 
              fields of AI and ML, equipping them with both theoretical knowledge and practical skills.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Our curriculum is designed to cover fundamental concepts as well as advanced topics in deep 
              learning, neural networks, natural language processing, computer vision, and more.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Modern Labs</h3>
              <p className="text-muted-foreground">
                State-of-the-art AI/ML labs with high-performance computing resources and GPU clusters 
                for deep learning projects.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Industry Collaboration</h3>
              <p className="text-muted-foreground">
                Strong partnerships with leading tech companies for internships, projects, and placements.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Research Focus</h3>
              <p className="text-muted-foreground">
                Active research in areas like computer vision, NLP, reinforcement learning, and AI ethics.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Faculty</h3>
              <p className="text-muted-foreground">
                Experienced faculty members with PhDs and industry experience in AI/ML domains.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Career Opportunities</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Machine Learning Engineer</li>
              <li>• Data Scientist</li>
              <li>• AI Research Scientist</li>
              <li>• Computer Vision Engineer</li>
              <li>• NLP Engineer</li>
              <li>• Deep Learning Specialist</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIML;
