export default function Skills() {
  const skills = {
    "Frontend Development": ["React JS", "Redux","Redux-Saga","Zustand", "JavaScript","Component Architecture", "Auth0","Role-Based Access Control"],
    "Backend Development": ["Java", "Apache Kafka", "Postman", "Spring Boot", "Microservices", "RESTful APIs"],
    "Automation & Tools": ["UiPath", "Process Automation", "Workflow Design", "System Integration"],
    "Other Skills": ["Git","Agile/Scrum", "Team Leadership","Good Communication"],
  }

  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-b border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-foreground border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
