export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer ",
      company: "Ele5 Solution Private Limited",
      period: "2022 – Present",
      description:
        `Led frontend development for comprehensive healthcare SaaS platform serving 50+ provider organizations. Reduced application load times by 45% through strategic code splitting, lazy loading, and Vite optimization. Maintained 95% on-time delivery rate across agile sprint cycles with bi-weekly releases`,
    },
    {
      title: "Software Developer",
      company: "Ele5 Solutions Private Limited",
      period: "2021 – 2022",
      description:
        ` Contributed to backend API development using Java Spring Boot. Implemented microservices architecture. Reduced incident detection time by 87% (from 15 minutes to 2 minutes) through multi-threaded architecture`,
    },
    {
      title: "RPA Developer",
      company: "Ele5 Solutions Private Limited",
      period: "2019 - 2020",
      description:
        "Designed and implemented business process automation solutions using UiPath, reducing manual workload by 70%.",
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 md:px-12 border-b border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-8">
              {index !== experiences.length - 1 && <div className="absolute left-0 top-12 w-px h-12 bg-border" />}
              <div className="flex gap-6">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                  <p className="text-base text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
