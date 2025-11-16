const Committees = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Committees</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">About Committees</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed">
              RLJIT has established various committees to ensure smooth functioning of the institution 
              and to address specific concerns of students and staff. These committees work towards 
              creating a safe, inclusive, and conducive environment for learning.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Committees</h2>
          <div className="space-y-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">SC/ST Committee</h3>
              <p className="text-muted-foreground mb-4">
                The SC/ST Committee ensures equal opportunities and addresses grievances of SC/ST students 
                and staff members. The committee works towards creating an inclusive environment free from 
                discrimination.
              </p>
              <a 
                href="/documents/sc-st-committee.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View SC/ST Committee Details (PDF)
              </a>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Anti-Ragging Committee</h3>
              <p className="text-muted-foreground">
                Responsible for maintaining a ragging-free campus and taking strict action against any 
                ragging incidents. Students can report complaints confidentially.
              </p>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Grievance Redressal Committee</h3>
              <p className="text-muted-foreground">
                Addresses academic and non-academic grievances of students, providing a platform for 
                fair resolution of issues.
              </p>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Internal Complaints Committee (ICC)</h3>
              <p className="text-muted-foreground">
                Deals with complaints of sexual harassment at the workplace, ensuring a safe environment 
                for all women staff and students.
              </p>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">IQAC (Internal Quality Assurance Cell)</h3>
              <p className="text-muted-foreground">
                Monitors and enhances the quality of education and overall institutional performance 
                through continuous quality improvement initiatives.
              </p>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Library Committee</h3>
              <p className="text-muted-foreground">
                Oversees library operations, recommends new books and resources, and ensures efficient 
                library services for students and faculty.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed">
              For any queries or complaints related to committee matters, students can contact the 
              respective committee coordinators through the college administration office or via email 
              at info@rljit.ac.in
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;
