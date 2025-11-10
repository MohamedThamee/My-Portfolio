export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
        <p>© {currentYear} All rights reserved. Built with React and modern web technologies.</p>
      </div>
    </footer>
  )
}
