export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-divider">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-pretty">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated full-stack developer with 5 years of experience in the IT industry. My passion lies in
              crafting elegant solutions to complex problems using modern technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across React for dynamic user interfaces, Java for robust backend systems, and UiPath
              for process automation. I thrive in collaborative environments and enjoy mentoring junior developers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying
              updated with industry trends.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">Experience</p>
                <p className="text-lg font-semibold text-accent">5+ Years</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
                <p className="text-lg font-semibold text-accent">50+</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Technologies Mastered</p>
                <p className="text-lg font-semibold text-accent">React, Java, UiPath</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Current Focus</p>
                <p className="text-lg font-semibold text-accent">Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
