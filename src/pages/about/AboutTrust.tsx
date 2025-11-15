const AboutTrust = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About The Trust
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Sri Devaraj Urs Educational Trust (SDUET)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">Our Heritage</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sri Devaraj Urs Educational Trust (SDUET) was founded in the year 1986 at Kolar with a noble 
                vision to serve the people of rural and backward classes through quality education. The trust 
                was established by Late Sri. R. L. Jalappa, a visionary social worker and educationist who 
                dedicated his life to the upliftment of society through education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Named after the great leader Sri Devaraj Urs, the trust embodies the principles of social justice, 
                equality, and accessibility in education. Under the trust's umbrella, multiple institutions have 
                been established, providing education from kindergarten to post-doctoral levels.
              </p>
            </div>
          </div>

          {/* Institutions Under Trust */}
          <div className="bg-secondary p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Institutions Under SDUET</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">R. L. Jalappa Institute of Technology</h3>
                <p className="text-muted-foreground">Engineering college offering undergraduate and postgraduate programs</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Sri Devaraj Urs Medical College</h3>
                <p className="text-muted-foreground">Medical education and healthcare services</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Educational Institutions</h3>
                <p className="text-muted-foreground">Schools providing quality education from primary to higher secondary</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Professional Colleges</h3>
                <p className="text-muted-foreground">Various professional courses and training programs</p>
              </div>
            </div>
          </div>

          {/* Trust's Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Trust's Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an educated society by providing quality education accessible to all, especially 
                those from rural and backward communities, thereby contributing to nation-building and social development.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Trust's Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To establish and maintain educational institutions that promote academic excellence, character 
                development, and social responsibility, while ensuring affordability and accessibility for students 
                from all backgrounds.
              </p>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Trust's Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <div className="text-muted-foreground text-sm">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground text-sm">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground text-sm">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4500+</div>
                <div className="text-muted-foreground text-sm">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTrust;
