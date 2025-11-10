"use client"

import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MainContent />
    </div>
  )
}
