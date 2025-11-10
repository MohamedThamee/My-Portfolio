"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 section-divider">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-pretty">Let's Connect</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or just chat!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:contact@example.com" className="text-accent hover:text-primary transition-colors">
                  mohamedthameem89@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Social</p>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", url: "#" },
                    { name: "LinkedIn", url: "#" },
                    { name: "Twitter", url: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary h-32 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
