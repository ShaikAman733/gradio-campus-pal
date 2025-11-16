const Library = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Library & Information Centre</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">About the Library</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed mb-4">
              The RLJIT Library is the academic heart of the institution, providing extensive resources 
              and services to support teaching, learning, and research activities. Our library houses 
              a vast collection of books, journals, magazines, and digital resources.
            </p>
            <p className="text-card-foreground leading-relaxed">
              With a spacious reading room, digital library section, and modern facilities, we create 
              an ideal environment for academic pursuits and knowledge exploration.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Collections & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Books</h3>
              <p className="text-muted-foreground">
                Over 50,000 volumes covering all disciplines, including textbooks, reference books, 
                and general reading materials.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">E-Resources</h3>
              <p className="text-muted-foreground">
                Access to IEEE, Springer, ScienceDirect, and other premium digital databases and journals.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Journals & Magazines</h3>
              <p className="text-muted-foreground">
                Subscriptions to national and international journals, magazines, and periodicals.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Digital Library</h3>
              <p className="text-muted-foreground">
                Dedicated digital library section with computers for accessing online resources.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Services</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-card-foreground">
              <li>• Book lending and reference services</li>
              <li>• Digital resource access (DELNET, NDL)</li>
              <li>• Inter-library loan facility</li>
              <li>• VTU Consortium e-resources</li>
              <li>• Plagiarism detection software</li>
              <li>• Reading room with seating capacity</li>
              <li>• Book exhibitions and library orientation programs</li>
              <li>• Best user awards and National Librarian's Day celebrations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Library Timings</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground text-lg mb-2">
              <strong>Monday to Friday:</strong> 8:30 AM - 5:30 PM
            </p>
            <p className="text-card-foreground text-lg">
              <strong>Saturday:</strong> 8:30 AM - 1:30 PM
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Library;
