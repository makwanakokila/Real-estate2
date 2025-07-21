"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./Homepage/Hero"
import About from "./Homepage/About"
import ProjectCategories from "./Homepage/ProjectCategories"
import CareersSection from "./Homepage/CareersSection"
import FooterSection from "./Homepage/FooterSection"
import ContactSection from "./Homepage/ContactSection"

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerTheme, setHeaderTheme] = useState("dark")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)
      setIsScrolled(scrollPosition > 100)

      // Get heights of all sections
      const heroHeight = document.getElementById("hero")?.offsetHeight || window.innerHeight
      const aboutHeight = document.getElementById("about")?.offsetHeight || window.innerHeight
      const projectCategoriesHeight = document.getElementById("project-categories")?.offsetHeight || window.innerHeight
      const careersHeight = document.getElementById("careers")?.offsetHeight || window.innerHeight
      const contactHeight = document.getElementById("contact")?.offsetHeight || window.innerHeight
      const footerHeight = document.getElementById("footer")?.offsetHeight || window.innerHeight

      // Calculate start positions of each section
      const aboutStart = heroHeight
      const projectCategoriesStart = aboutStart + aboutHeight
      const careersStart = projectCategoriesStart + projectCategoriesHeight
      const contactStart = careersStart + careersHeight
      const footerStart = contactStart + contactHeight

      // Determine header theme based on scroll position
      // Order matters: check from bottom-most sections upwards
      if (scrollPosition >= footerStart - 100) {
        setHeaderTheme("dark-scrolled") // Dark theme for footer
      } else if (scrollPosition >= contactStart - 100) {
        setHeaderTheme("dark-scrolled") // Dark theme for contact section
      } else if (scrollPosition >= careersStart - 100) {
        setHeaderTheme("light") // Light theme for careers section
      } else if (scrollPosition >= projectCategoriesStart - 100) {
        setHeaderTheme("project-categories") // Custom dark theme for ProjectCategories
      } else if (scrollPosition >= aboutStart - 100) {
        setHeaderTheme("light") // Light theme for About section
      } else if (scrollPosition > 50) {
        setHeaderTheme("dark-scrolled") // Dark scrolled theme for hero after initial scroll
      } else {
        setHeaderTheme("dark") // Transparent dark theme at top of hero
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isScrolled={isScrolled} scrollY={scrollY} headerTheme={headerTheme} />

      {/* Hero Section */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <About />
      </section>

      {/* Project Categories Section */}
      <section id="project-categories" className="relative">
        <ProjectCategories />
      </section>

      {/* Careers Section */}
      <section id="careers" className="relative">
        <CareersSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <ContactSection />
      </section>

      {/* Footer Section */}
      <section id="footer" className="relative">
        <FooterSection />
      </section>
    </div>
  )
}

export default App
