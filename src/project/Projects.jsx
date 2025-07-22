"use client"

import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Modern Interior Design",
    category: "COMMERCIAL",
    image: "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
  },
  {
    id: 2,
    title: "Queen Country Club Restaurant",
    category: "COMMERCIAL",
    image: "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
  },
  {
    id: 3,
    title: "Forest Retreat House",
    category: "RESIDENTIAL",
    image: "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
  },
  {
    id: 4,
    title: "Executive Lounge",
    category: "COMMERCIAL",
    image: "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
  },
  {
    id: 5,
    title: "Urban Loft",
    category: "RESIDENTIAL",
    image: "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
  },
  {
    id: 6,
    title: "Cultural Center",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
  },
  {
    id: 7,
    title: "Luxury Villa",
    category: "RESIDENTIAL",
    image: "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
  },
  {
    id: 8,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
  },
  {
    id: 9,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
  },
  {
    id: 10,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
  },
  {
    id: 11,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
  },
  {
    id: 12,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image:
      "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
  },
  {
    id: 13,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/05/Ccam_013-1-1024x512.jpg",
  },
  {
    id: 14,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/04/IMG_1810-1024x529.jpg",
  },
  {
    id: 15,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image:
      "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
  },
  {
    id: 16,
    title: "Office Complex",
    category: "ARCHITECTURE",
    image: "https://yodezeen.com/wp-content/uploads/2024/04/1-1-1024x683.jpg",
  },
]

const categories = ["ALL", "COMMERCIAL", "ARCHITECTURE", "RESIDENTIAL"]

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
      <section id="contact-section" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h4
          className={`text-4xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight transition-all duration-800 ${
            isVisible ? "animate-fadeUp opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          Let's talk about
          <br />
          your project!
        </h4>

        {/* Description Text - Left aligned with delayed animation */}
        <p
          className={`text-gray-500 text-lg font-light text-[14px] mb-12 leading-relaxed max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            animation: isVisible ? "fadeUp 0.8s ease-out forwards" : "none",
            animationDelay: "200ms",
          }}
        >
          We are ready to share with you our design vision and lead you into the exciting world of creativity.
        </p>

        {/* CTA Button - Left aligned with delayed animation */}
        <button
          className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            animation: isVisible ? "fadeUp 0.8s ease-out forwards" : "none",
            animationDelay: "400ms",
          }}
        >
          SEND REQUEST
        </button>
      </div>
    </section>
  )
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [itemsPerRow, setItemsPerRow] = useState(4)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(false)

  const filteredProjects =
    activeFilter === "ALL" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleFilterChange = (category) => {
    setIsLoading(true)
    setActiveFilter(category)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleItemsPerRowChange = (newItemsPerRow) => {
    setItemsPerRow(newItemsPerRow)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  // Auto refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  // Intersection observer for hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const heroSection = document.getElementById("hero-section")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => observer.disconnect()
  }, [])

  // Intersection observer for controls
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setControlsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const controlsSection = document.getElementById("controls-section")
    if (controlsSection) {
      observer.observe(controlsSection)
    }

    return () => observer.disconnect()
  }, [])

  // Intersection observer for projects grid
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const projectsGrid = document.getElementById("projects-grid")
    if (projectsGrid) {
      observer.observe(projectsGrid)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Text */}
      <div
        id="hero-section"
        className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex justify-center items-center overflow-hidden"
      >
        <h1
          className={`absolute inset-0 flex items-center justify-center text-[20vw] sm:text-[15vw] md:text-[10vw] font-bold text-black/5 uppercase tracking-wide select-none transition-all duration-1000 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            animation: heroVisible ? "fadeInScale 1.2s ease-out forwards" : "none",
          }}
        >
          P R O J E C T S
        </h1>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .portfolio-image {
          filter: grayscale(100%) !important;
          -webkit-filter: grayscale(100%) !important;
          transition: all 0.5s ease !important;
          -webkit-transition: all 0.5s ease !important;
        }
        
        .portfolio-image:hover {
          filter: grayscale(0%) !important;
          -webkit-filter: grayscale(0%) !important;
          transform: scale(1.05);
        }
        
        .image-container:hover .portfolio-image {
          filter: grayscale(0%) !important;
          -webkit-filter: grayscale(0%) !important;
        }

        .project-card {
          animation-fill-mode: both;
        }

        /* Enhanced animation classes */
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 1.2s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Filter Tabs and Controls */}
        <div
          id="controls-section"
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0"
        >
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-8">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                disabled={isLoading}
                className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 disabled:opacity-50 hover:scale-105 ${
                  activeFilter === category
                    ? "text-black border-black"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                } ${controlsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{
                  animation: controlsVisible ? "slideInLeft 0.6s ease-out forwards" : "none",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div
            className={`flex items-center space-x-4 transition-all duration-700 ${
              controlsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{
              animation: controlsVisible ? "slideInRight 0.6s ease-out forwards" : "none",
              animationDelay: "300ms",
            }}
          >
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 disabled:opacity-50 hover:scale-110"
              title="Refresh"
            >
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>

            {/* Items Per Row Buttons */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 font-light">See</span>
              <button
                onClick={() => handleItemsPerRowChange(2)}
                className={`px-3 py-1 text-sm font-medium transition-all duration-300 rounded hover:scale-105 ${
                  itemsPerRow === 2 ? "bg-black text-white shadow-lg" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                2
              </button>
              <button
                onClick={() => handleItemsPerRowChange(4)}
                className={`px-3 py-1 text-sm font-medium transition-all duration-300 rounded hover:scale-105 ${
                  itemsPerRow === 4 ? "bg-black text-white shadow-lg" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                4
              </button>
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-xl animate-fadeUp">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="text-lg font-medium text-gray-800">Loading...</span>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div
          id="projects-grid"
          className={`grid gap-1 transition-all duration-700 ${
            isLoading ? "opacity-50 scale-95" : "opacity-100 scale-100"
          } ${itemsPerRow === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 project-card ${
                isRefreshing ? "animate-pulse" : ""
              } ${projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                animation: projectsVisible ? "fadeUp 0.8s ease-out forwards" : "none",
                animationDelay: `${index * 100}ms`,
                "--stagger": index,
              }}
            >
              {/* Square aspect ratio container */}
              <div className="relative aspect-[4/3] overflow-hidden image-container rounded-lg">
                <img
                  src={project.image || "/placeholder.svg?height=400&width=500"}
                  alt={project.title}
                  className="w-full h-full object-cover portfolio-image transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">{project.title}</h3>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Refresh Indicator */}
        {isRefreshing && (
          <div className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3 animate-slideUp">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="text-sm font-medium">Refreshing content...</span>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
