export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight text-foreground">
          <span className="block font-light">React Developer</span>
          <span className="block text-primary font-light italic">with 5 years</span>
          <span className="block font-light">of refined expertise</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-light italic">
          Crafting polished applications with React, Java, and process automation. Building interfaces that matter and
          systems that scale.
        </p>

        <div className="space-y-6 mb-16 max-w-3xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            In the past I've developed sophisticated solutions with complex business requirements, web experiences, and
            digital systems. Full-stack specialist with deep expertise in frontend architecture and backend systems.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Currently building scalable applications and exploring the intersection of design and engineering. I believe
            great software comes from thoughtful interaction design and robust technical implementation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground/5 rounded font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
