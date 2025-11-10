export default function Projects() {
  const projects = [
    {
      title: "Healthcare Eligibility Verification and Authorization System",
      description:
        "Comprehensive React-based healthcare SaaS platform for eligibility verification, authorization management, and claims processing serving 50+ healthcare provider organizations.",
      tech: [" React 18", "Redux", "Zustand", "Redux-Saga", "JavaScript ES6+", "Auth0", "ApexCharts", "Vite"],
    },
    {
      title: "EHR Site Health Monitoring System",
      description: "Enterprise monitoring solution tracking uptime, downtime, and stability across 100+ post-acute Electronic Health Record sites.",
      tech: ["Java 8+", "Spring Boot", "Spring Boot Actuator", "MongoDB", "Multi-threading", "RESTful APIs", "Microservices"],
    },
    {
      title: "Healthcare Workflow Automation",
      description:
       "End-to-end automation of healthcare administrative workflows including eligibility verification, prior authorizations, admissions, medical records, and revenue cycle management.",
      tech: ["UiPath Studio", "UiPath Orchestrator", "REFramework", "Image Recognition", "Process Automation"],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-b border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-primary hover:bg-card/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded border border-primary/20 font-medium"
                  >
                    {tech}
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
