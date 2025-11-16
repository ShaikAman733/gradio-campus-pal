const AboutPrincipal = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Principal's Message</h1>
      
      <div className="prose max-w-none">
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <p className="text-lg text-card-foreground leading-relaxed mb-4">
            Welcome to R. L. Jalappa Institute of Technology. As the Principal of this esteemed institution, 
            it is my privilege to lead an institution committed to academic excellence and holistic development.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed mb-4">
            At RLJIT, we believe in nurturing not just engineers, but well-rounded individuals who can contribute 
            meaningfully to society. Our dedicated faculty, state-of-the-art infrastructure, and industry connections 
            provide students with the best possible environment for learning and growth.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed">
            We encourage innovation, research, and entrepreneurship among our students, preparing them to face 
            the challenges of tomorrow with confidence and competence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPrincipal;
