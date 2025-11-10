export default function Projects() {
  const projects = [
    {title: "Healthcare Eligibility Verification and Authorization System",
      description:
        "Comprehensive React-based healthcare SaaS platform for eligibility verification, authorization management, and claims processing serving 50+ healthcare provider organizations.",
      tech: [" React 18", "Redux", "Zustand", "Redux-Saga", "JavaScript ES6+", "Auth0", "ApexCharts", "Vite"],
      link: "#",
    },{
      title: "EHR Site Health Monitoring System",
      description: "RPA solutions using UiPath to automate complex business processes, reducing manual work by 70%.",
      tech: ["Java 8+", "Spring Boot", "Spring Boot Actuator", "MongoDB", "Multi-threading", "RESTful APIs", "Microservices"],
      link: "#",
    }, {
      title: "Healthcare Workflow Automation",
      description:
       "End-to-end automation of healthcare administrative workflows including eligibility verification, prior authorizations, admissions, medical records, and revenue cycle management.",
      tech: ["UiPath Studio", "UiPath Orchestrator", "REFramework", "Image Recognition", "Process Automation"],
       link: "#",
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-4 text-foreground">Projects</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl font-light text-lg italic">
          Selected work showcasing expertise in full-stack development, automation, and system design.
        </p>

        {/* Three-column grid for sophisticated layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group bg-card/40 border border-border/40 rounded-sm p-6 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-lg font-light mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-light">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-sm border border-primary/20 font-light uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
