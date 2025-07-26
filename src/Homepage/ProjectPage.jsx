// "use client";

// // 1. SINGLE SET OF IMPORTS AT THE TOP
// import { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { gridData } from "./ImgGrid"; // Make sure gridData is exported from this file
// import GetBrochure from "./GetBrochure";

// // 2. HEADER COMPONENT DEFINITION
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C] text-white shadow-md">
//       <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold tracking-wider">
//           <Link to="/">YODEZEEN</Link>
//         </div>
//         <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
//           <Link
//             to="/projects"
//             className="hover:text-gray-300 transition-colors"
//           >
//             Projects
//           </Link>
//           <Link to="/about" className="hover:text-gray-300 transition-colors">
//             About
//           </Link>
//           <Link to="/media" className="hover:text-gray-300 transition-colors">
//             Media
//           </Link>
//           <Link to="/blog" className="hover:text-gray-300 transition-colors">
//             Blog
//           </Link>
//           <Link to="/filter" className="hover:text-gray-300 transition-colors">
//             Filter
//           </Link>
//           <Link to="/contact" className="hover:text-gray-300 transition-colors">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <button className="hover:text-gray-300 transition-colors">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="md:hidden bg-[#1C1C1C] px-6 pb-4 flex flex-col space-y-4 text-sm uppercase tracking-widest">
//           <Link
//             to="/projects"
//             className="hover:text-gray-300 transition-colors"
//           >
//             Projects
//           </Link>
//           <Link to="/about" className="hover:text-gray-300 transition-colors">
//             About
//           </Link>
//           <Link to="/media" className="hover:text-gray-300 transition-colors">
//             Media
//           </Link>
//           <Link to="/blog" className="hover:text-gray-300 transition-colors">
//             Blog
//           </Link>
//           <Link to="/filter" className="hover:text-gray-300 transition-colors">
//             Filter
//           </Link>
//           <Link to="/contact" className="hover:text-gray-300 transition-colors">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// // 3. MAIN PROJECT PAGE COMPONENT
// const ProjectPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // State hooks for scroll animations
//   const [heroVisible, setHeroVisible] = useState(false);
//   const [aboutVisible, setAboutVisible] = useState(false);
//   const [featuredVisible, setFeaturedVisible] = useState(false);
//   const [contactVisible, setContactVisible] = useState(false);

//   const project = gridData.find((p) => p.id === Number.parseInt(id));

//   // IntersectionObserver logic
//   useEffect(() => {
//     // Set hero to visible immediately on load
//     setHeroVisible(true);

//     const observeSection = (sectionId, setVisible) => {
//       const section = document.getElementById(sectionId);
//       if (!section) return () => {};
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//             observer.unobserve(entry.target);
//           }
//         },
//         { threshold: 0.1 }
//       );
//       observer.observe(section);
//       return () => {
//         observer.unobserve(section);
//       };
//     };

//     const cleanups = [
//       observeSection("about-section", setAboutVisible),
//       observeSection("featured-section", setFeaturedVisible),
//       observeSection("contact-section", setContactVisible),
//     ];

//     return () => cleanups.forEach((cleanup) => cleanup());
//   }, [id]); // Rerun effect if the project ID changes

//   // 'Project not found' page
//   if (!project) {
//     return (
//       <>
//         <Header />
//         <div className="min-h-screen flex items-center justify-center bg-white pt-20">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-4 text-[#1C1C1C]">
//               Project not found
//             </h1>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-[#1C1C1C] text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
//             >
//               Back to Gallery
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Helper function for status colors
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Under Construction":
//         return "bg-white";
//       case "Launching Soon":
//         return "bg-white";
//       case "Pre-Launch":
//         return "bg-white";
//       case "Ready to Move":
//         return "bg-green-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   // Helper for special status styling
//   const specialStatuses = [
//     "Under Construction",
//     "Launching Soon",
//     "Pre-Launch",
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Hero Section */}
//       <section
//         id="hero-section"
//         className="relative h-screen bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${project.imageUrl})` }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         {/* MODIFIED: justify-end and pb-24 to move content down, increased px */}
//         <div className="relative z-10 flex flex-col justify-end items-start h-full max-w-6xl mx-auto px-8 md:px-16 pb-24">
//           <div
//             className={`mb-4 transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-black/60 text-white">
//               ⭐ 15+ Years of Excellence
//             </span>
//           </div>
//           <h1
//             className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "200ms" }}
//           >
//             {project.title}
//           </h1>
//           <p
//             className={`text-xl md:text-2xl text-white mb-8 transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "400ms" }}
//           >
//             {project.subtitle}
//           </p>
//           <p
//             className={`text-lg text-gray-200 mb-12 max-w-2xl transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "600ms" }}
//           >
//             {project.description}
//           </p>
//           <div
//             className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "800ms" }}
//           >
//              <button
//               className="bg-transparent text-white border border-white px-8 py-3 font-medium rounded transition-colors duration-300 hover:bg-white hover:text-black"
//               onClick={() => navigate(`/explore/${project.id}`)}
//             >
//               EXPLORE PROJECTS →
//             </button>
//           </div>
//           <div
//             className={`flex space-x-12 text-white transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "1000ms" }}
//           >
//             <div>
//               <div className="text-3xl font-bold">45+</div>
//               <div className="text-sm">Projects</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">8</div>
//               <div className="text-sm">Ongoing</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">4.9</div>
//               <div className="text-sm">Rating</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about-section" className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2
//               className={`text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6 transition-all duration-1000 ${
//                 aboutVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-8"
//               }`}
//             >
//               Building Dreams Since 2010
//             </h2>
//             <p
//               className={`text-gray-600 text-lg mb-8 leading-relaxed transition-all duration-1000 ${
//                 aboutVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: "200ms" }}
//             >
//               Leading the way in sustainable construction with innovative
//               eco-friendly designs and green building practices. We have
//               established ourselves as a trusted name in the real estate
//               industry.
//             </p>
//             {/* REMOVED: "LEARN MORE ABOUT US" button */}
//           </div>
//           <div
//             className={`relative transition-all duration-1000 ${
//               aboutVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "300ms" }}
//           >
//             <img
//               src={project.imageUrl || "/placeholder.svg"}
//               alt={project.alt}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* REMOVED: Achievements Section */}

//       {/* REMOVED: Testimonials Section */}

//       {/* Featured Projects Section */}
//       <section id="featured-section" className="py-20 bg-[#1C1C1C]">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2
//               className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
//                 featuredVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-8"
//               }`}
//             >
//               Featured Projects
//             </h2>
//             {/* MODIFIED: Description text updated */}
//             <p
//               className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
//                 featuredVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: "200ms" }}
//             >
//               Explore our trending projects, from pre-launch opportunities to
//               residences currently under construction that are shaping the
//               future of luxury living.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {gridData.slice(0, 3).map((p, index) => {
//               const isSpecial = specialStatuses.includes(p.status);
//               return (
//                 <div
//                   key={p.id}
//                   className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-lg transition-all duration-1000 ${
//                     featuredVisible
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-8"
//                   }`}
//                   style={{ transitionDelay: `${400 + index * 200}ms` }}
//                   onClick={() => navigate(`/project/${p.id}`)}
//                 >
//                   <div className="relative h-96 bg-black">
//                     {/* MODIFIED: Added conditional grayscale filter */}
//                     <img
//                       src={p.imageUrl || "/placeholder.svg"}
//                       alt={p.alt}
//                       className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
//                         isSpecial
//                           ? "filter grayscale group-hover:grayscale-0"
//                           : ""
//                       }`}
//                     />
//                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
//                     <div
//                       className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
//                         p.status
//                       )} text-black`}
//                     >
//                       {p.status}
//                     </div>
//                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
//                       <h3 className="text-2xl font-bold mb-2">
//                         {p.title.toUpperCase()}
//                       </h3>
//                       <div className="flex items-center mb-2">
//                         <span className="text-sm">🏠 {p.type}</span>
//                       </div>
//                       <div className="flex items-center mb-4">
//                         <span className="text-sm">📍 {p.location}</span>
//                       </div>
//                       {/* MODIFIED: Button style changed */}
//                       <button
//                       className="w-full bg-transparent text-white border border-white py-2 rounded font-medium transition-colors duration-300 hover:bg-white hover:text-black"
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         navigate(`/project/${featuredProject.id}/details/1`)
//                       }}
//                     >
//                       View Details
//                     </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="text-center">
//              <button
//               className={`bg-transparent text-white border border-white px-8 py-3 font-medium rounded hover:bg-white hover:text-black transition-colors duration-200 ${
//                 featuredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: "1000ms" }}
//               onClick={() => navigate(`/explore/${project.id}`)}
//             >
//               VIEW ALL PROJECTS
//             </button>
//           </div>
//         </div>
//       </section>

//         <GetBrochure/>

//       {/* Contact Section */}
//      {/* Contact Section */}
// <section id="contact-section" className="py-20 bg-[#1C1C1C]">
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2
//       className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
//         contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//     >
//       Ready to Build Your Dream?
//     </h2>
//     <p
//       className={`text-gray-300 text-lg mb-12 max-w-3xl mx-auto transition-all duration-1000 ${
//         contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//       style={{ transitionDelay: "200ms" }}
//     >
//       Join thousands of satisfied customers who trusted us with their most
//       important investment. Let's create something extraordinary together.
//     </p>

//     <div
//       className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
//         contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//       style={{ transitionDelay: "400ms" }}
//     >
//       {/* Button 1 - White border, white hover text, black bg */}
//       <button className="bg-white text-black border border-white px-7 py-3 text-sm uppercase tracking-widest font-light hover:bg-transparent hover:text-white transition-all duration-300 rounded">
//         📞 Call Now: +91 98765 43210
//       </button>

//       {/* Button 2 - Transparent bg, white text, white border, hover black bg */}
//       <button className="bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-widest font-light hover:bg-white hover:text-black transition-all duration-300 rounded">
//         ✉️ Get Free Consultation
//       </button>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default ProjectPage;


"use client";

// 1. IMPORTS
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gridData } from "./ImgGrid";
import GetBrochure from "./GetBrochure";
// The ConsultationForm is now in this file, so no import is needed for it.

// =================================================================================
// 2. MAIN PROJECT PAGE COMPONENT
// =================================================================================
const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State hook for the consultation form modal
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State hooks for scroll animations
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const project = gridData.find((p) => p.id === Number.parseInt(id));

  // IntersectionObserver logic for scroll animations
  useEffect(() => {
    setHeroVisible(true);

    const observeSection = (sectionId, setVisible) => {
      const section = document.getElementById(sectionId);
      if (!section) return () => {};
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
      return () => {
        observer.unobserve(section);
      };
    };

    const cleanups = [
      observeSection("about-section", setAboutVisible),
      observeSection("featured-section", setFeaturedVisible),
      observeSection("contact-section", setContactVisible),
    ];

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [id]);

  // 'Project not found' page
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#1C1C1C]">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-[#1C1C1C] text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  // Helper functions for styling
  const getStatusColor = (status) => {
    switch (status) {
      case "Ready to Move":
        return "bg-green-500";
      default:
        return "bg-white";
    }
  };

  const specialStatuses = [
    "Under Construction",
    "Launching Soon",
    "Pre-Launch",
  ];

  return (
    <>
      <div className="min-h-screen bg-white font-sans">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col justify-end items-start h-full max-w-6xl mx-auto px-8 md:px-16 pb-24">
            <div
              className={`mb-4 transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-black/60 text-white">
                ⭐ 15+ Years of Excellence
              </span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {project.title}
            </h1>
            <p
              className={`text-xl md:text-2xl text-white mb-8 transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {project.subtitle}
            </p>
            <p
              className={`text-lg text-gray-200 mb-12 max-w-2xl transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {project.description}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <button
                className="bg-transparent text-white border border-white px-8 py-3 font-medium rounded transition-colors duration-300 hover:bg-white hover:text-black"
                onClick={() => navigate(`/explore/${project.id}`)}
              >
                EXPLORE PROJECTS →
              </button>
            </div>
            <div
              className={`flex space-x-12 text-white transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div>
                <div className="text-3xl font-bold">45+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm">Ongoing</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-section" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6 transition-all duration-1000 ${
                  aboutVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Building Dreams Since 2010
              </h2>
              <p
                className={`text-gray-600 text-lg mb-8 leading-relaxed transition-all duration-1000 ${
                  aboutVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Leading the way in sustainable construction with innovative
                eco-friendly designs and green building practices. We have
                established ourselves as a trusted name in the real estate
                industry.
              </p>
            </div>
            <div
              className={`relative transition-all duration-1000 ${
                aboutVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.alt}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="featured-section" className="py-20 bg-[#1C1C1C]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
                  featuredVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Featured Projects
              </h2>
              <p
                className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                  featuredVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Explore our trending projects, from pre-launch opportunities to
                residences currently under construction that are shaping the
                future of luxury living.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {gridData.slice(0, 3).map((p, index) => {
                const isSpecial = specialStatuses.includes(p.status);
                return (
                  <div
                    key={p.id}
                    className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-lg transition-all duration-1000 ${
                      featuredVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 200}ms` }}
                    onClick={() => navigate(`/project/${p.id}`)}
                  >
                    <div className="relative h-96 bg-black">
                      <img
                        src={p.imageUrl || "/placeholder.svg"}
                        alt={p.alt}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          isSpecial
                            ? "filter grayscale group-hover:grayscale-0"
                            : ""
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          p.status
                        )} text-black`}
                      >
                        {p.status}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-bold mb-2">
                          {p.title.toUpperCase()}
                        </h3>
                        <div className="flex items-center mb-2">
                          <span className="text-sm">🏠 {p.type}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <span className="text-sm">📍 {p.location}</span>
                        </div>
                        <button
                          className="w-full bg-transparent text-white border border-white py-2 rounded font-medium transition-colors duration-300 hover:bg-white hover:text-black"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/project/${p.id}/details/1`);
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <button
                className={`bg-transparent text-white border border-white px-8 py-3 font-medium rounded hover:bg-white hover:text-black transition-colors duration-200 ${
                  featuredVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
                onClick={() => navigate(`/explore/${project.id}`)}
              >
                VIEW ALL PROJECTS
              </button>
            </div>
          </div>
        </section>

        <GetBrochure />

        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-[#1C1C1C]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
                contactVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Ready to Build Your Dream?
            </h2>
            <p
              className={`text-gray-300 text-lg mb-12 max-w-3xl mx-auto transition-all duration-1000 ${
                contactVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Join thousands of satisfied customers who trusted us with their
              most important investment. Let's create something extraordinary
              together.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
                contactVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <button
                className="bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-widest font-light hover:bg-white hover:text-black transition-all duration-300 rounded"
                onClick={() => setIsFormOpen(true)} // ✅ FIXED: This now opens the form
              >
                ✉️ Get Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Render the Consultation Form Modal */}
      <ConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        projectName={project.title}
      />
    </>
  );
};

export default ProjectPage;

// =================================================================================
// 3. CONSULTATION FORM COMPONENT (Modal)
// =================================================================================
const ConsultationForm = ({ isOpen, onClose, projectName }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: projectName, // Pre-fill the project name
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend API
    console.log("Consultation Request:", formData);
    alert(
      `Thank you, ${formData.name}! Your request for ${formData.project} has been sent.`
    );
    onClose(); // Close the form
  };

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="bg-[#1C1C1C] text-white rounded-lg shadow-2xl p-8 max-w-md w-full m-4 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Get a Free Consultation
        </h2>
        <p className="text-gray-400 mb-6 text-center text-sm">
          Interested in "{projectName}"? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
              className="mt-1 w-full bg-[#2a2a2a] border-gray-600 rounded-md px-3 py-2 focus:ring-1 focus:ring-white focus:outline-none transition"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="mt-1 w-full bg-[#2a2a2a] border-gray-600 rounded-md px-3 py-2 focus:ring-1 focus:ring-white focus:outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              required
              className="mt-1 w-full bg-[#2a2a2a] border-gray-600 rounded-md px-3 py-2 focus:ring-1 focus:ring-white focus:outline-none transition"
              placeholder="+91 12345 67890"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2.5 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

// Add a simple fade-in animation for the modal in your global CSS file if you like
/* In your globals.css or equivalent:
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}
*/