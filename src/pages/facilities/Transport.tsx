const Transport = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Transport Facilities</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              RLJIT provides safe and reliable transport facilities for students and staff. Our fleet 
              of buses covers various routes across Bengaluru and surrounding areas, ensuring convenient 
              commute for everyone.
            </p>
            <p className="text-card-foreground leading-relaxed">
              The transport service is designed to provide hassle-free travel, allowing students to 
              focus on their studies without worrying about daily commute challenges.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Wide Coverage</h3>
              <p className="text-muted-foreground">
                Multiple bus routes covering major areas of Bengaluru and nearby towns for easy accessibility.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                All buses equipped with GPS tracking, first aid kits, and experienced drivers with 
                valid licenses.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Well-Maintained Fleet</h3>
              <p className="text-muted-foreground">
                Regular maintenance and servicing of all vehicles to ensure safe and comfortable journey.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Timely Service</h3>
              <p className="text-muted-foreground">
                Buses run on schedule with designated pickup and drop points along each route.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Major Routes</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Bengaluru City - Doddaballapur</li>
              <li>• Yelahanka - Doddaballapur</li>
              <li>• Hebbal - Doddaballapur</li>
              <li>• Devanahalli - Doddaballapur</li>
              <li>• Chikkaballapur - Doddaballapur</li>
              <li>• Other surrounding areas</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Transport Guidelines</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Students must carry their bus pass while traveling</li>
              <li>• Board the bus only at designated stops</li>
              <li>• Maintain discipline and cleanliness inside the bus</li>
              <li>• Report any issues to the transport coordinator immediately</li>
              <li>• Transport fees must be paid on time</li>
              <li>• Follow instructions given by bus staff and drivers</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transport;
