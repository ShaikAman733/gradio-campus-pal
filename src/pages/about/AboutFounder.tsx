const AboutFounder = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Founder
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Late Sri. R. L. Jalappa - Visionary, Educationist, Social Worker
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Image Placeholder */}
            <div className="md:col-span-2">
              <div className="bg-secondary rounded-2xl p-8 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🙏</div>
                    <p className="text-sm text-muted-foreground">Sri. R. L. Jalappa</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-foreground">Late Sri. R. L. Jalappa</h3>
                <p className="text-center text-muted-foreground">
                  Founder, Sri Devaraj Urs Educational Trust, Tamaka, Kolar
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Late Sri. R. L. Jalappa, the Founder and Chairman of Sri Devaraj Urs Educational Trust (SDUET), 
                  Tamaka, Kolar. He is an outspoken politician, educationist, and leader of co-operative movement. 
                  Under his leadership, Sri Devaraj Urs Educational Trust has 8 Institutions in which more than 500 
                  dedicated, motivated faculties are serving and over 4500 students have enrolled for various courses 
                  from kindergarten to post-doctoral courses, in traditional, technical, and medical educational Institutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  His Special Interests are, Promoting Agricultural, Horticultural, Dairy Farming, Education & 
                  Co-operative movements.
                </p>
              </div>
            </div>
          </div>

          {/* Political Career */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">Political Career</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sri. R. L Jalappa was a member of the INC till 1979 when he quit the party to form the Karnataka 
                Kranti Ranga with D. Devaraj Urs, which merged with the Janata Party the following year. Ten years 
                later, he joined the Janata Dal and was elected to the Lok Sabha, the lower House of the Indian 
                Parliament, in 1996, from Chikballapur.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                He served as the Union Minister of Textiles from 1996 to January 1998, when he quit the party and 
                resigned as minister to rejoin the INC. He was elected to the Lok Sabha again, a member of which he 
                remained till 2009.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He also served as the chairman of the Sri Devaraj Urs Medical College situated in Kolar, Karnataka. 
                He died from respiratory and kidney failure in Kolar, on 17 December 2021, at the age of 96.
              </p>
            </div>
          </div>

          {/* Legacy */}
          <div className="mt-12 bg-secondary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-foreground">His Legacy</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4500+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounder;
