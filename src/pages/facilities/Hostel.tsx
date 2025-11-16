const Hostel = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Hostel Facilities</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed">
              The Institution has two boys and two girls hostels consisting of six blocks within the 
              campus. The hostel is well secured with the CCTV surveillance system in each floor and 
              has well-furnished, spacious rooms. The hostels have the accommodation capacity for 800 
              plus students, equipped with the modern amenities with homely atmosphere.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Accommodation</h3>
              <p className="text-muted-foreground">
                Spacious rooms with attached and common bathroom facilities. Both single and shared 
                occupancy options available.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Security</h3>
              <p className="text-muted-foreground">
                24/7 CCTV surveillance on every floor, security guards, and biometric access control 
                for student safety.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Dining Hall</h3>
              <p className="text-muted-foreground">
                Well-maintained mess providing nutritious and hygienic food. Both vegetarian and 
                non-vegetarian options available.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Common Areas</h3>
              <p className="text-muted-foreground">
                Recreation rooms, TV rooms, and common study areas for students to relax and interact.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Wi-Fi & Internet</h3>
              <p className="text-muted-foreground">
                High-speed internet connectivity available in all blocks for academic and personal use.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Medical Care</h3>
              <p className="text-muted-foreground">
                First aid facilities and tie-up with nearby hospitals for emergency medical care.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Hostel Capacity</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-card-foreground">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Block</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Rooms</th>
                    <th className="text-left py-3 px-4">Current Occupancy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Boys Block - 01</td>
                    <td className="py-3 px-4">Common</td>
                    <td className="py-3 px-4">139</td>
                    <td className="py-3 px-4">117</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Boys Block - 02</td>
                    <td className="py-3 px-4">Attached</td>
                    <td className="py-3 px-4">57</td>
                    <td className="py-3 px-4">124</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Girls Block - 01</td>
                    <td className="py-3 px-4">Common</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">41</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Girls Block - 02</td>
                    <td className="py-3 px-4">Common</td>
                    <td className="py-3 px-4">16</td>
                    <td className="py-3 px-4">79</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="py-3 px-4" colSpan={2}>Total Capacity</td>
                    <td className="py-3 px-4">339 Rooms</td>
                    <td className="py-3 px-4">591 Students</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Rules & Regulations</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Students must maintain discipline and cleanliness</li>
              <li>• Visitors allowed only during specified timings</li>
              <li>• Late night entry requires prior permission from hostel warden</li>
              <li>• Ragging is strictly prohibited and punishable</li>
              <li>• Alcohol, smoking, and drugs are strictly forbidden</li>
              <li>• Students must attend mess during meal hours</li>
              <li>• Damage to hostel property will be charged from the student</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hostel;
