"use client"

import { useEffect, useState, useRef } from "react" // Import useState
import AOS from 'aos' // Import AOS
import 'aos/dist/aos.css' // Import AOS CSS
// import { Link } from "react-router-dom" // REMOVE THIS LINE
import ContactFormModal from "../about/ContactFormModal " // Import ContactFormModal

// All original media items (keeping them all as requested)
const ALL_MEDIA_ITEMS = [
  {
    name: "arch daily",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/archday-1.png",
    category: "Online",
    projectTitle: "Modern Minimalist Office Design",
    projectDescription:
      "A contemporary workspace featuring clean lines, natural materials, and innovative lighting solutions.",
    projectName: "Corporate Headquarters",
  },
  {
    name: "dwell",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/dwell.png",
    category: "Magazines",
    projectTitle: "Sustainable Living Space",
    projectDescription: "An eco-friendly residential design that combines comfort with environmental consciousness.",
    projectName: "Green Home Project",
  },
  {
    name: "Attitude",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/2-1.png",
    category: "Magazines",
    projectTitle: "Luxury Apartment Interior",
    projectDescription: "A sophisticated urban dwelling with premium finishes and custom furniture pieces.",
    projectName: "Diamond Apartment",
  },
  {
    name: "Interior Design",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/1-1.png",
    category: "Magazines",
    projectTitle: "A Family's Kiev Apartment Is Filled With Copper, Marble, and a Sophisticated Palette",
    projectDescription: "An elegant family residence showcasing rich materials and thoughtful design elements.",
    projectName: "Diamond apartment",
  },
  {
    name: "Elle Decor",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/2-2.png",
    category: "Magazines",
    projectTitle: "Contemporary Art Gallery",
    projectDescription: "A curated space designed to showcase modern art with perfect lighting and flow.",
    projectName: "Gallery Renovation",
  },
  {
    name: "Elle Decoration",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/3-1.png",
    category: "Magazines",
    projectTitle: "Boutique Hotel Design",
    projectDescription: "A unique hospitality experience with custom interiors and local cultural elements.",
    projectName: "Urban Retreat Hotel",
  },
  {
    name: "Интерьер+Дизайн",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/4-1.png",
    category: "Magazines",
    projectTitle: "Industrial Loft Conversion",
    projectDescription: "A former warehouse transformed into a modern living space with exposed elements.",
    projectName: "Loft Transformation",
  },
  {
    name: "Office Snapshots",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/loffi.png",
    category: "Online",
    projectTitle: "Tech Startup Office",
    projectDescription: "A dynamic workspace designed to foster creativity and collaboration.",
    projectName: "Innovation Hub",
  },
  {
    name: "Contemporist",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/contemporist-1.png",
    category: "Online",
    projectTitle: "Coastal Villa Design",
    projectDescription: "A seaside retreat featuring panoramic views and natural materials.",
    projectName: "Ocean View Villa",
  },
  {
    name: "The Plus",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/the-plus.png",
    category: "Online",
    projectTitle: "Restaurant Interior",
    projectDescription: "A dining experience enhanced by thoughtful interior design and ambiance.",
    projectName: "Culinary Space",
  },
  {
    name: "Caan Design",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/caandesign-1.png",
    category: "Online",
    projectTitle: "Penthouse Renovation",
    projectDescription: "A luxury penthouse featuring panoramic city views and premium finishes.",
    projectName: "Sky High Living",
  },
  {
    name: "DesignWanted",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/designwanted.png",
    category: "Magazines",
    projectTitle: "Retail Store Design",
    projectDescription: "A flagship store interior that enhances the brand experience and customer journey.",
    projectName: "Brand Flagship",
  },
  {
    name: "HIS",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/his.png",
    category: "Online",
    projectTitle: "Medical Clinic Interior",
    projectDescription: "A healing environment designed with patient comfort and functionality in mind.",
    projectName: "Wellness Center",
  },
  {
    name: "Home Design",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/Home-Design-1.png",
    category: "Online",
    projectTitle: "Family Home Renovation",
    projectDescription: "A complete home transformation balancing style with family functionality.",
    projectName: "Modern Family Home",
  },
  {
    name: "Interni",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/interni.png",
    category: "Online",
    projectTitle: "Art Studio Design",
    projectDescription: "A creative workspace designed to inspire artistic expression and productivity.",
    projectName: "Artist's Haven",
  },
  {
    name: "Design Milk",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/5.png",
    category: "Online",
    projectTitle: "Co-working Space",
    projectDescription: "A flexible workspace designed for modern professionals and entrepreneurs.",
    projectName: "Collaborative Hub",
  },
  {
    name: "ID Interior",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/id-interior.png",
    category: "Magazines",
    projectTitle: "Spa & Wellness Center",
    projectDescription: "A tranquil environment designed to promote relaxation and well-being.",
    projectName: "Serenity Spa",
  },
  {
    name: "Kitchen",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/%D0%BA%D1%83%D1%85%D0%BD%D0%B8.png",
    category: "Magazines",
    projectTitle: "Gourmet Kitchen Design",
    projectDescription: "A chef's kitchen featuring professional-grade appliances and custom cabinetry.",
    projectName: "Culinary Workshop",
  },
  {
    name: "Salon",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/%D1%81%D0%B0%D0%BB%D0%BE%D0%BD-1.png",
    category: "Magazines",
    projectTitle: "Beauty Salon Interior",
    projectDescription: "A luxurious salon space designed to pamper clients and enhance the service experience.",
    projectName: "Beauty Sanctuary",
  },
  {
    name: "Another",
    img: "https://yodezeen.com/wp-content/uploads/2019/09/3-1.png",
    category: "Online",
    projectTitle: "Library Renovation",
    projectDescription: "A modern library design that encourages learning and community engagement.",
    projectName: "Knowledge Center",
  },
  {
    name: "DesignWanted 2",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/designwanted.png",
    category: "Online",
    projectTitle: "Event Space Design",
    projectDescription: "A versatile venue designed to host memorable events and celebrations.",
    projectName: "Celebration Hall",
  },
  {
    name: "Book 1",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/dwell.png",
    category: "Books",
    projectTitle: "Design Philosophy Book",
    projectDescription: "A comprehensive guide to modern interior design principles and practices.",
    projectName: "Design Fundamentals",
  },
  {
    name: "Book 2",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/contemporist-1.png",
    category: "Books",
    projectTitle: "Contemporary Spaces",
    projectDescription: "A visual journey through innovative contemporary interior design projects.",
    projectName: "Modern Living",
  },
  {
    name: "Book 3",
    img: "https://yodezeen.com/wp-content/uploads/2018/03/designwanted.png",
    category: "Books",
    projectTitle: "Sustainable Design Guide",
    projectDescription: "Exploring eco-friendly design solutions for modern living spaces.",
    projectName: "Green Design",
  },
]

// FadeUp Component With Delay
const FadeUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  )
}

// Media Item Component with Hover Effect (No Cancel Icon)
const MediaItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center h-40 border border-gray-200 bg-white">
        <img
          src={item.img || "/placeholder.svg"}
          alt={item.name}
          className="max-h-12 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Hover Overlay - No Cancel Icon */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-95 transition-all duration-300 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center p-4 text-center">
          {" "}
          {/* Adjusted padding to p-4 for better mobile responsiveness */}
          {/* Project Title */}
          <h3 className="text-sm font-medium text-gray-800 mb-3 leading-tight">{item.projectTitle}</h3>
          {/* Project Description */}
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">{item.projectDescription}</p>
          {/* Project Name */}
          <p className="text-xs text-gray-400 font-light">{item.projectName}</p>
        </div>
      </div>
    </div>
  )
}

const ContactSection = ({ setShowModal }) => { // Pass setShowModal as a prop
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.3 }
    )
    if (btnRef.current) observer.observe(btnRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-white py-20 px-4 md:px-12"> {/* Full width section */}
      {/* Main content of the section, centered */}
      <div
        className="max-w-7xl mx-auto flex flex-col items-start justify-center h-full relative z-20"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="text-xl md:text-3xl font-normal text-black mb-6 mt-10">
          Let's talk about <br /> your project!
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10">
          We are ready to share with you our design vision and lead
          you into the exciting world of creativity.
        </p>
        <div className="p-10">
          {/* Use onClick to open the modal */}
          <button
            ref={btnRef}
            onClick={() => setShowModal(true)} // THIS IS THE KEY CHANGE
            className="relative px-24 py-4 text-sm font-normal uppercase tracking-wider text-black hover:bg-black hover:text-white hover:font-bold overflow-hidden"
          >
            {/* Text with slide-in effect */}
            <span
              className={`inline-block ${visible ? "animate-text" : "opacity-0"}`}
            >
              SEND REQUEST
            </span>

            {/* Top border */}
            <span
              className={`absolute left-0 top-0 h-[2px] bg-black ${visible ? "animate-top w-full" : "w-0"}`}
            ></span>
            {/* Right border */}
            <span
              className={`absolute right-0 top-0 w-[2px] bg-black ${visible ? "animate-right h-full" : "h-0"}`}
            ></span>
            {/* Bottom border */}
            <span
              className={`absolute right-0 bottom-0 h-[2px] bg-black ${visible ? "animate-bottom w-full" : "w-0"}`}
            ></span>
            {/* Left border */}
            <span
              className={`absolute left-0 bottom-0 w-[2px] bg-black ${visible ? "animate-left h-full" : "h-0"}`}
            ></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Media() {
  const itemsToDisplay = ALL_MEDIA_ITEMS;
  const [showModal, setShowModal] = useState(false); // Add state for modal visibility
  const [selectedCity] = useState("Ahmedabad"); // Example, if your modal needs this prop

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <div className="w-full bg-white">
      {/* Section for Builder Logos content */}
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1
            className="text-4xl font-bold mb-10 text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Our Esteemed Builders
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
            {itemsToDisplay.map((item, index) => (
              <FadeUp key={item.name + index} delay={index * 100}>
                <MediaItem item={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pass setShowModal to ContactSection */}
      <ContactSection setShowModal={setShowModal} />

      {/* MODAL IS RENDERED OUTSIDE OF THE SECTION FLOW */}
      {showModal && (
        <ContactFormModal
          selectedCity={selectedCity}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}