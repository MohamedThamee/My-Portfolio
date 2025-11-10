import Hero from "@/components/hero-new"
import About from "@/components/about-new"
import Experience from "@/components/experience-new"
import Skills from "@/components/skills-new"
import Projects from "@/components/projects-new"
import Contact from "@/components/contact-new"
import Footer from "@/components/footer-new"

export default function MainContent() {
  return (
    <main className="flex-1 md:ml-64">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
