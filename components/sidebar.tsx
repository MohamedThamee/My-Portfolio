"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="fixed top-6 left-6 z-50 md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40 flex flex-col p-8`}
      >
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-sidebar-foreground tracking-tight">Mohamed Thameemuthari</h1>
          <p className="text-sidebar-foreground/60 text-sm mt-2">React Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block nav-link text-sidebar-foreground hover:text-sidebar-primary transition-colors text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="border-t border-sidebar-border pt-6 space-y-3">
          <p className="text-xs text-sidebar-foreground/60 uppercase tracking-widest mb-4">Connect</p>
          <a href="#contact" className="block text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors">
            LinkedIn
          </a>
          <a href="#contact" className="block text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors">
            GitHub
          </a>
          <a href="#contact" className="block text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors">
            Email
          </a>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
