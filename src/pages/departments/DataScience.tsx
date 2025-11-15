import { BarChart, TrendingUp, Database, Brain } from "lucide-react";

const DataScience = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Data Science
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Transforming Data into Insights
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About Data Science Program</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Data Science program at RLJIT equips students with the skills to extract meaningful insights 
            from complex data sets. In today's data-driven world, data scientists are crucial for helping 
            organizations make informed decisions and drive innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our curriculum combines mathematics, statistics, programming, and machine learning to prepare 
            students for careers in data analysis, predictive modeling, and AI-driven decision making.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Program Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Data Analytics</h3>
              <p className="text-sm text-muted-foreground">Advanced statistical analysis and visualization</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Deep learning and predictive modeling</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <Database className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Big Data</h3>
              <p className="text-sm text-muted-foreground">Hadoop, Spark, and distributed computing</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">Business Intelligence</h3>
              <p className="text-sm text-muted-foreground">Data-driven decision making and strategy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Opportunities</h2>
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Data Scientist</h3>
                <p className="text-sm text-muted-foreground">Build predictive models and extract insights</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">ML Engineer</h3>
                <p className="text-sm text-muted-foreground">Develop and deploy machine learning systems</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Data Analyst</h3>
                <p className="text-sm text-muted-foreground">Analyze data and create visualizations</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">BI Developer</h3>
                <p className="text-sm text-muted-foreground">Design business intelligence solutions</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Research Scientist</h3>
                <p className="text-sm text-muted-foreground">Conduct research in AI and data science</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Quantitative Analyst</h3>
                <p className="text-sm text-muted-foreground">Apply data science to finance and trading</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataScience;
