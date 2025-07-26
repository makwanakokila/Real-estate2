"use client"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { gridData } from "./PortfolioGallery"

const ExploreProjects = () => {
  const { builderId } = useParams()
  const navigate = useNavigate()
  const [heroVisible, setHeroVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)

  const builder = gridData.find((p) => p.id === Number.parseInt(builderId))
  const builderProjects = gridData

  useEffect(() => {
    setHeroVisible(true)
    const timer = setTimeout(() => setProjectsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!builder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Builder not found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-[#1C1C1C] text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Construction":
        return "bg-yellow-500"
      case "Launching Soon":
        return "bg-blue-500"
      case "Pre-Launch":
        return "bg-purple-500"
      case "Ready to Move":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url(${builder.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {builder.title}
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Explore Our Complete Portfolio of Exceptional Projects
          </p>
          <div
            className={`flex space-x-12 text-white transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div>
              <div className="text-3xl font-bold">{builderProjects.length}+</div>
              <div className="text-sm">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our Projects Portfolio
            </h2>
            <p
              className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Explore our trending projects, from pre-launch opportunities to residences currently under construction
              that are shaping the future of luxury living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builderProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-1000 ${
                  projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative h-80 bg-black">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.alt}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>

                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium bg-white text-black border`}
                  >
                    {project.status}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-wider">{project.title}</h3>
                    <p className="text-sm mb-3 text-gray-300">{project.subtitle}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-sm">🏠 {project.type}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-sm">📍 {project.location}</span>
                    </div>
                    <button className="w-full bg-transparent text-white border border-white py-2 rounded font-medium transition-colors duration-300 hover:bg-white hover:text-black">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/")}
              className="bg-transparent text-white border border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors"
            >
              Back to Main Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExploreProjects
