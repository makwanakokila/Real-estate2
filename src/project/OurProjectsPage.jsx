"use client"; // Added as requested

import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you have react-router-dom installed

// Moved gridData directly into this file
const gridData = [
  {
    id: 1,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
    alt: "Modern building with glass facade",
    title: "EcoBuilders Group",
    subtitle: "Modern Sustainable Architecture",
    description:
      "Leading the way in sustainable construction with innovative eco-friendly designs and green building practices.",
    location: "Green Valley, Sector 21",
    type: "3 BHK HOMES & RETAIL",
    status: "Under Construction",
  },
  {
    id: 2,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
    alt: "Architectural detail of a building corner",
    title: "Urban Sprawl Co.",
    subtitle: "Contemporary Urban Living",
    description:
      "Redefining urban living with contemporary designs that blend functionality with aesthetic appeal.",
    location: "City Center, Sector 15",
    type: "2/3 BHK APARTMENTS",
    status: "Launching Soon",
  },
  {
    id: 3,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
    alt: "Symmetrical view of a modern building",
    title: "Vista Properties",
    subtitle: "Panoramic Living Spaces",
    description:
      "Offering breathtaking views and spacious living with modern amenities and sustainable features.",
    location: "Hill View, Sector 8",
    type: "4/5 BHK VILLAS",
    status: "Pre-Launch",
  },
  {
    id: 4,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
    alt: "Building with a unique wave-like structure",
    title: "Zenith Developments",
    subtitle: "Innovative Wave Architecture",
    description:
      "Pushing boundaries with unique architectural forms that create distinctive living experiences.",
    location: "Waterfront, Sector 12",
    type: "LUXURY CONDOS",
    status: "Under Construction",
  },
  {
    id: 5,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
    alt: "A tall skyscraper against a blue sky",
    title: "Skyline Ventures",
    subtitle: "Vertical Living Excellence",
    description:
      "Reaching new heights with premium high-rise living that offers unparalleled city views.",
    location: "Business District, Sector 5",
    type: "PREMIUM TOWERS",
    status: "Ready to Move",
  },
  {
    id: 6,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
    alt: "Residential building with many balconies",
    title: "Harmony Homes Inc.",
    subtitle: "Balanced Community Living",
    description:
      "Creating harmonious communities with thoughtfully designed homes and shared spaces.",
    location: "Residential Zone, Sector 18",
    type: "COMMUNITY HOMES",
    status: "Launching Soon",
  },
  {
    id: 7,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
    alt: "A modern house with a clean design",
    title: "Greenland Estates",
    subtitle: "Eco-Friendly Residences",
    description:
      "Sustainable living with green technologies and environmentally conscious design principles.",
    location: "Eco Park, Sector 22",
    type: "ECO HOMES",
    status: "Under Construction",
  },
  {
    id: 8,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
    alt: "Office building with illuminated windows at dusk",
    title: "Corporate Hub Ltd.",
    subtitle: "Modern Business Centers",
    description:
      "State-of-art commercial spaces designed for the future of work and business.",
    location: "IT Corridor, Sector 10",
    type: "OFFICE COMPLEXES",
    status: "Ready to Move",
  },
  {
    id: 9,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
    alt: "Suburban house with a large front yard",
    title: "Pristine Living",
    subtitle: "Suburban Luxury",
    description:
      "Premium suburban living with spacious layouts and modern amenities in peaceful settings.",
    location: "Suburb Hills, Sector 25",
    type: "LUXURY VILLAS",
    status: "Pre-Launch",
  },
  {
    id: 10,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
    alt: "Luxury home with a swimming pool",
    title: "Elite Residences",
    subtitle: "Ultra-Luxury Living",
    description:
      "The pinnacle of luxury living with exclusive amenities and bespoke design elements.",
    location: "Elite Enclave, Sector 1",
    type: "ULTRA-LUXURY HOMES",
    status: "Launching Soon",
  },
  {
    id: 11,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
    alt: "Modern minimalist house exterior",
    title: "Minimalist Builds",
    subtitle: "Clean Contemporary Design",
    description:
      "Embracing minimalism with clean lines, open spaces, and functional beauty.",
    location: "Design District, Sector 14",
    type: "MINIMALIST HOMES",
    status: "Under Construction",
  },
  {
    id: 12,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
    alt: "House with a beautiful garden",
    title: "Garden Homes Co.",
    subtitle: "Nature-Integrated Living",
    description:
      "Seamlessly blending indoor and outdoor living with beautiful landscaped gardens.",
    location: "Garden Valley, Sector 20",
    type: "GARDEN HOMES",
    status: "Ready to Move",
  },
];

export default function OurProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [heroVisible, setHeroVisible] = useState(false); // State for hero animation
  const [projectsVisible, setProjectsVisible] = useState(false); // State for projects grid animation

  // Set hero section and projects grid to visible after component mounts
  useEffect(() => {
    setHeroVisible(true);
    const timer = setTimeout(() => setProjectsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const uniqueTypes = useMemo(() => {
    const types = new Set(gridData.map((item) => item.type));
    return ["All", ...Array.from(types)].sort();
  }, []);

  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(gridData.map((item) => item.status));
    return ["All", ...Array.from(statuses)].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    let projects = gridData;

    if (searchTerm) {
      projects = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== "All") {
      projects = projects.filter((project) => project.type === filterType);
    }

    if (filterStatus !== "All") {
      projects = projects.filter((project) => project.status === filterStatus);
    }

    return projects;
  }, [searchTerm, filterType, filterStatus]);


  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url(${'https://www.sekene.com/wp-content/uploads/2024/02/image-1-2.jpg'})` }} // Added hero image
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Projects Portfolio
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Explore our diverse portfolio of architectural marvels, each a
            testament to our commitment to innovation and design excellence.
          </p>
          <div
            className={`flex space-x-12 text-white transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div>
              <div className="text-3xl font-bold">{gridData.length}+</div>
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
              Explore Our Projects
            </h2>
            <p
              className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Discover our trending projects, from pre-launch opportunities to residences currently under construction
              that are shaping the future of luxury living.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search by builder name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-[#2C2C2C] text-white border border-[#444] rounded-md p-2 focus:border-white focus:ring-white"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full sm:w-[180px] bg-[#2C2C2C] text-white border border-[#444] rounded-md p-2 focus:ring-white"
            >
              <option value="All">Filter by Type</option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full sm:w-[180px] bg-[#2C2C2C] text-white border border-[#444] rounded-md p-2 focus:ring-white"
            >
              <option value="All">Filter by Status</option>
              {uniqueStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Link
                  to={`/project/${project.id}`} // Using Link for navigation
                  key={project.id}
                  className={`group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-1000 ${
                    projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="relative h-80 bg-black">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.alt}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Changed status tag to white background and black text */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium bg-white text-black`}>
                      {project.status}
                    </div>
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>

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
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-lg py-10">
                No projects found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}