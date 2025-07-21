"use client"

import { useState, useEffect, useRef } from "react"
import { Facebook, Instagram, MousePointer2 } from "lucide-react" // Added MousePointer2

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState("default")
  const [showCursor, setShowCursor] = useState(false)
  const heroRef = useRef(null)

  const slides = [
    {
      id: 1,
      title: "Passeridae",
      description: "View project",
      backgroundImage: "/images/restaurant-design.png",
      // Added subtitle to match usage in main content
      subtitle: "Innovative Restaurant Interior",
    },
    {
      id: 2,
      title: "Asian Fusion\nRestaurant",
      description: "View project",
      backgroundImage: "/images/residential-interior.png",
      subtitle: "A Modern Home Transformation",
    },
    {
      id: 3,
      title: "Native House",
      description: "View project",
      backgroundImage: "/images/modern-house.png",
      subtitle: "Contemporary Architectural Design",
    },
  ]

  const projectCategories = [
    { number: "01", title: "Passeridae", category: "Commercial" },
    { number: "02", title: "Asian Fusion Restaurant", category: "Residential" },
    { number: "03", title: "Native House", category: "Architecture" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleMouseMove = (e) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2

    setCursorPosition({ x: e.clientX, y: e.clientY })

    if (x < centerX) {
      setCursorType("prev")
    } else {
      setCursorType("next")
    }
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorType("default")
  }

  const handleClick = (e) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const centerX = rect.width / 2

    if (x < centerX) {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      {showCursor && cursorType !== "default" && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-150 ease-out"
          style={{
            left: cursorPosition.x - 30, // Adjust to center cursor
            top: cursorPosition.y - 30, // Adjust to center cursor
            transform: "translate3d(0, 0, 0)", // Optimize for smooth movement
          }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center transparent backdrop-blur-sm shadow-lg">
            <div className="flex items-center space-x-1">
              {/* Previous Arrow */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className={`transition-opacity duration-200 ${cursorType === "prev" ? "opacity-100" : "opacity-40"}`}
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>

              {/* Next Arrow */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className={`transition-opacity duration-200 ${cursorType === "next" ? "opacity-100" : "opacity-40"}`}
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      )}

      <div
        ref={heroRef}
        className="relative min-h-screen overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center pl-48 top-0"> {/* Adjusted top and removed fixed position */}
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-white"> {/* Added text-white for visibility */}
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight whitespace-pre-line mt-36">
                {slides[currentSlide].title}
              </h1>
              {/* Ensure subtitle exists for currentSlide */}
              <p className="text-sm tracking-[0.2em] text-gray-300 mb-8">{slides[currentSlide].subtitle || ''}</p>
              <button className="text-sm font-medium hover:text-gray-300 transition-colors">
                {slides[currentSlide].description}
              </button>
            </div>
          </div>
        </div>

        {/* Project Navigation - Right Side */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:block text-white"> {/* Added text-white */}
          <div className="flex items-end space-x-12">
            {projectCategories.map((project, index) => (
              <div
                key={project.number}
                className={`text-start cursor-pointer transition-opacity ${ // Changed "text-cneter" to "text-center"
                  index === currentSlide ? "opacity-100" : "opacity-60"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentSlide(index)
                }}
              >
                <div className="text-lg text-gray-400 mb-1">{project.number}</div>
                <div className="text-xl font-medium">{project.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-10 hidden md:block text-white"> {/* Added text-white */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-gray-300 text-xs font-bold">
              Be
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-gray-300">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-gray-300">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-gray-300 text-xs font-bold">
              P
            </a>
          </div>
        </div>

        {/* Slide Counter - Left Side Below Logo Area */}
        <div className="absolute top-44 left-12 z-10 hidden md:block text-white"> {/* Added text-white */}
          <div className="flex items-center space-x-4">
            <div className="flex items-baseline font-light text-white/80 space-x-1">
              {/* Corrected order for current/total slides */}
              <span className="text-4xl">{String(currentSlide + 1).padStart(2, "0")}</span>/
              <span className="text-1xl">{String(slides.length).padStart(2, "0")}</span>
            </div>
            {/* The original code had this commented out, keeping it that way
            <div className="text-sm text-gray-400">{slides[currentSlide].title}</div>
            */}
          </div>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center">
          <div className="h-[100px] w-px overflow-hidden mt-2">
            <div className="w-full h-full bg-white/80 animate-wipe-down"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero