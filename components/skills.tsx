export default function Skills() {
  const skills = {
    Frontend: ["React", "Redux","Redux-Saga","Zustand", "JavaScript","Component Architecture", "Auth0","Role-Based Access Control"],
    Backend:  ["Java", "Apache Kafka", "Spring Boot", "Microservices", "RESTful APIs"],
    "Tools & Platforms": ["UiPath", "Git", "Postman", "Workflow Design"],
  }
  return (
    <section id="skills" className="py-24 px-6 section-divider">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-pretty">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-primary/20 text-foreground border border-primary/30 rounded text-sm font-medium hover:bg-primary/30 transition-colors"
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
