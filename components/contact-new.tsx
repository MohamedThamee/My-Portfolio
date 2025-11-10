export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-b border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Talk</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="space-y-4">
          <a
            href="mailto:mohamedthameem89@gmail.com"
            className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            Gmail
            <span className="text-primary">→</span>
          </a>
          <a
            href="https://linkedin.com/in/thamee "
            className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            LinkedIn Profile
            <span className="text-primary">→</span>
          </a>
          <a
            href="https://github.com/MohamedThamee"
            className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            GitHub
            <span className="text-primary">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
