const MBA = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Master of Business Administration</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Program Overview</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              The MBA program at RLJIT is designed to develop future business leaders and managers. Our 
              curriculum blends theoretical knowledge with practical application, preparing students for 
              leadership roles in various industries.
            </p>
            <p className="text-card-foreground leading-relaxed">
              We offer specializations in Finance, Marketing, Human Resources, and Operations Management, 
              allowing students to focus on their areas of interest.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Case Studies</h3>
              <p className="text-muted-foreground">
                Real-world case studies from leading companies to develop analytical and decision-making skills.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Industry Visits</h3>
              <p className="text-muted-foreground">
                Regular visits to corporations and business organizations for practical exposure.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Guest Lectures</h3>
              <p className="text-muted-foreground">
                Sessions by industry experts, entrepreneurs, and corporate leaders sharing insights.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Internships</h3>
              <p className="text-muted-foreground">
                Mandatory summer internships in reputed companies for hands-on business experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Career Opportunities</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Business Analyst</li>
              <li>• Marketing Manager</li>
              <li>• Financial Analyst</li>
              <li>• HR Manager</li>
              <li>• Operations Manager</li>
              <li>• Management Consultant</li>
              <li>• Entrepreneur</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MBA;
