"use client"

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "../Documents/Resume- Mohamed_Thameemuthari_Resume_Dubai_2025.pdf"
    link.download = "My-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div>
          <div className="mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium mb-4">Welcome</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              React Developer with 5 Years of Expertise
            </h1>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I specialize in building modern, scalable web applications with React, Java backend systems, and business
            process automation using UiPath. Combining technical excellence with thoughtful design.
          </p>

          <div className="space-y-4 mb-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              Over the past 5 years, I've developed comprehensive solutions ranging from full-stack web applications to
              complex automation workflows that streamline business operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              View My Work
            </a>
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
            >
              Download My Resume
            </button>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-foreground text-foreground hover:bg-foreground/5 rounded-lg font-semibold transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <img
              src="/Thameem pic.png"
              alt="React Developer Profile"
              className="relative w-full rounded-2xl shadow-2xl border border-primary/20 object-cover aspect-[5/6]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
