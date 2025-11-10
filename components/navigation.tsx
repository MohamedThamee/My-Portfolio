"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border/30 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Elegant logo with refined typography */}
        <a href="#" className="text-lg font-light text-foreground tracking-[0.2em] uppercase">
          Alex
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border/30 md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link font-medium" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
