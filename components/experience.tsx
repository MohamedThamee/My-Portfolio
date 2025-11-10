export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Ele5 Solution Private Limited",
      period: "2022 - Present",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and architecting scalable component systems.",
      highlights: ["React JS", "Redux","Redux-Saga","Zustand", "JavaScript","Component Architecture", "Auth0","Role-Based Access Control"],
    },
    {
      title: "Software Developer",
      company: "Ele5 Solution Private Limited",
      period: "2020 - 2022",
      description:
        "Contributed to backend API development using Java Spring Boot. Implemented microservices architecture.",
      highlights: ["Java", "Spring Boot", "Microservices", "RESTful APIs"],
    },
    {
      title: "RPA Developer",
      company: "Ele5 Solution Private Limited",
      period: "2019 - 2020",
      description:
        "Designed and implemented business process automation solutions using UiPath, reducing manual workload by 70%.",
      highlights: ["UiPath Studio", "UiPath", "Orchestrator", "REFramework", "Image Recognition"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 section-divider">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-pretty">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-accent">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground md:text-right">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <span key={i} className="skill-badge">
                    {highlight}
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
