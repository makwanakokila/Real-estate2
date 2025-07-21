"use client"

import { useState } from "react"

const ProjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState("residential")
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const categories = [
    {
      id: "commercial",
      title: "Commercial",
      subtitle: "INTERIOR DESIGN",
      image: "/images/commercial-interior.jpg",
    },
    {
      id: "residential",
      title: "Residential",
      subtitle: "INTERIOR DESIGN",
      image: "/images/residential-interior.png",
    },
    {
      id: "architecture",
      title: "Architecture",
      subtitle: "",
      image: "/images/architecture-exterior.jpg",
    },
  ]

  // Get the current background image based on hover state
  const getCurrentImage = () => {
    if (hoveredCategory) {
      const hoveredCat = categories.find((cat) => cat.id === hoveredCategory)
      return hoveredCat?.image
    }
    // When no hover, return null to show individual box images
    return null
  }

  const currentBackgroundImage = getCurrentImage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - Only show when hovering */}
      {currentBackgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${currentBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="relative z-10 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative cursor-pointer group flex items-center justify-center transition-all duration-300"
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Individual Box Background Image - Only show when not hovering */}
              {!hoveredCategory && (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              )}

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div
                className={`relative z-10 text-center transition-all duration-300 ${
                  hoveredCategory && hoveredCategory !== category.id ? "text-gray-400" : "text-white"
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-2">{category.title}</h2>
                {category.subtitle && (
                  <p
                    className={`text-sm md:text-base tracking-[0.2em] transition-all duration-300 ${
                      hoveredCategory && hoveredCategory !== category.id ? "text-gray-500" : "text-white/80"
                    }`}
                  >
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* Active indicator */}
              {activeCategory === category.id && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

     

      {/* Side Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 z-10 hidden lg:block">
        <div className="text-white text-sm tracking-[0.3em] font-light">Honors</div>
      </div>
    </div>
  )
}

export default ProjectCategories
