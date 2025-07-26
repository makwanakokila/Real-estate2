// "use client"; // Keep this if you're using Next.js App Router

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Link and useNavigate are for routing
import { motion } from "framer-motion"; // Needed for ContactFormModal animations
import AOS from "aos"; // Needed for ContactSection animations
import "aos/dist/aos.css";

// --- ContactFormModal Component ---
// This component should be in its own file, e.g., components/ContactFormModal.js
// It's included here for completeness of the solution.

const ContactFormModal = ({ onClose, selectedCity }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryNature: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.enquiryNature.trim()) {
      newErrors.enquiryNature = "Please select an enquiry type";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form submitted:", formData, "City:", selectedCity);
      // Here, you would typically send the form data to your backend API.
      // For demonstration, close modal and navigate immediately:
      onClose(); // <-- ✅ This calls the onClose prop to close the modal
      navigate("/thank-you"); // Navigate to a thank-you page after successful submission
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="bg-[#1f1f1f] text-white p-8 rounded-lg w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Close icon - This button calls the onClose prop */}
        <button
          onClick={onClose} // <-- ✅ This is the key to closing the modal
          className="absolute top-4 right-4 text-white text-3xl font-light hover:scale-110 transition-transform"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-semibold mb-4 text-center">
          Don’t hesitate to contact us
        </h2>

        {selectedCity && (
          <p className="text-center text-gray-400 mb-6 text-sm">
            Location: <strong>{selectedCity}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 bg-transparent border ${
                errors.fullName ? "border-red-500" : "border-gray-600"
              } rounded focus:outline-none focus:border-white text-base`}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 bg-transparent border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } rounded focus:outline-none focus:border-white text-base`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              className={`w-full px-4 py-3 bg-transparent border ${
                errors.phone ? "border-red-500" : "border-gray-600"
              } rounded focus:outline-none focus:border-white text-base`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
            )}
          </div>

          {/* Enquiry Nature */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Nature of Enquiry
            </label>
            <select
              name="enquiryNature"
              className={`w-full px-4 py-3 bg-transparent border ${
                errors.enquiryNature ? "border-red-500" : "border-gray-600"
              } rounded appearance-none focus:outline-none focus:border-white text-base`}
              value={formData.enquiryNature}
              onChange={handleChange}
            >
              <option className="bg-[#111111]" value="">
                Please select
              </option>
              <option className="bg-[#111111]" value="General Inquiry">
                General Inquiry
              </option>
              <option className="bg-[#111111]" value="Careers">
                Careers
              </option>
              <option className="bg-[#111111]" value="PR & Collaborations">
                PR & Collaborations
              </option>
            </select>
            {errors.enquiryNature && (
              <p className="text-red-500 text-xs mt-2">{errors.enquiryNature}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full border border-white py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider"
          >
            SEND REQUEST
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// --- gridData (No changes) ---
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
    description: "Redefining urban living with contemporary designs that blend functionality with aesthetic appeal.",
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
    description: "Offering breathtaking views and spacious living with modern amenities and sustainable features.",
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
    description: "Pushing boundaries with unique architectural forms that create distinctive living experiences.",
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
    description: "Reaching new heights with premium high-rise living that offers unparalleled city views.",
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
    description: "Creating harmonious communities with thoughtfully designed homes and shared spaces.",
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
    description: "Sustainable living with green technologies and environmentally conscious design principles.",
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
    description: "State-of-the-art commercial spaces designed for the future of work and business.",
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
    description: "Premium suburban living with spacious layouts and modern amenities in peaceful settings.",
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
    description: "The pinnacle of luxury living with exclusive amenities and bespoke design elements.",
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
    description: "Embracing minimalism with clean lines, open spaces, and functional beauty.",
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
    description: "Seamlessly blending indoor and outdoor living with beautiful landscaped gardens.",
    location: "Garden Valley, Sector 20",
    type: "GARDEN HOMES",
    status: "Ready to Move",
  },
];

// --- ContactSection Component (MODIFIED to open modal) ---
function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // ✅ State to control modal visibility

  useEffect(() => {
    const section = document.getElementById("contact-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true); // Open the modal
    console.log("Modal opened from Contact Section!");
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
    console.log("Modal closed from Contact Section!");
  };

  return (
    <section id="contact-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h4
          className={`text-4xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's talk about
          <br />
          your project!
        </h4>
        <p
          className={`text-gray-500 text-lg font-light text-[14px] mb-12 leading-relaxed max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          We are ready to share with you our design vision and lead you into the exciting world of creativity.
        </p>
        {/* Changed from <Link> to <button> to open the modal */}
        <button
          onClick={handleOpenModal} // ✅ Call handleOpenModal to show the modal
          className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          SEND REQUEST
        </button>
      </div>

      {/* ✅ Conditionally render the modal here */}
      {modalOpen && (
        <ContactFormModal
          onClose={handleCloseModal} // Pass the close handler
          selectedCity="Your Project Inquiry City" // You can dynamically set this if needed
        />
      )}
    </section>
  );
}

// --- ImageGrid Component (No changes in functionality, only added useNavigate import) ---
export function ImageGrid() {
  const navigate = useNavigate();

  const handleGridClick = (index) => {
    const project = gridData[index];
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://southcoastimprovement.com/wp-content/uploads/2025/03/8254661.jpg"
          alt="Construction site background"
          className="w-full h-full object-cover grayscale"
        />
        <video
  src="/hero1.mp4" // Yahan apni video file ka path daalein
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover grayscale"
>
  {/* Fallback message agar browser video support na kare */}
  Your browser does not support the video tag.
</video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Clickable Grid Container */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 w-full h-full">
        {gridData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleGridClick(index)}
            className="group relative border border-white cursor-pointer overflow-hidden"
          >
            {/* Image that appears on hover */}
            <img
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
            {/* Dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-end justify-start p-4 text-white text-lg font-bold text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main PortfolioGallery Component (Adjusted "Contact Us" Link) ---
export default function PortfolioGallery() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [galleryHeaderVisible, setGalleryHeaderVisible] = useState(false);

  useEffect(() => {
    // Observer for Hero Section
    const heroSection = document.getElementById("hero-section");
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          heroObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (heroSection) heroObserver.observe(heroSection);

    // Observer for Gallery Header Section
    const galleryHeaderSection = document.getElementById("gallery-header");
    const galleryHeaderObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryHeaderVisible(true);
          galleryHeaderObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (galleryHeaderSection) galleryHeaderObserver.observe(galleryHeaderSection);

    return () => {
      if (heroSection) heroObserver.unobserve(heroSection);
      if (galleryHeaderSection) galleryHeaderObserver.unobserve(galleryHeaderSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section with Background Video */}
      {/* <div
        id="hero-section"
        className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden"
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1
            className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Innovative Spaces, Timeless Designs
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Explore Our Architectural Showcase
          </p>
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link
              to="/Projects" 
              className="border border-white px-8 py-3 text-white font-light text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Our Projects
            </Link>
           
            <Link
              to="/contact"
              className="bg-white px-8 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}

      {/* Gallery Header Section */}
      <section id="gallery-header" className="bg-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-1000 ${
              galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Curated Collection
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Each project is a testament to our commitment to excellence and innovation. Hover over the tiles to reveal a
            glimpse into our world.
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <ImageGrid />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

// Export gridData for use in other components
export { gridData };