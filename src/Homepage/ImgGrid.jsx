// "use client";

// import React, { useState, useEffect } from "react";

// // Data array for the grid cells.
// const gridData = [
//   {
//     id: 1,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
//     alt: "Modern building with glass facade",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
//     alt: "Architectural detail of a building corner",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
//     alt: "Symmetrical view of a modern building",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
//     alt: "Building with a unique wave-like structure",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
//     alt: "A tall skyscraper against a blue sky",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
//     alt: "Residential building with many balconies",
//   },
//   {
//     id: 7,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
//     alt: "A modern house with a clean design",
//   },
//   {
//     id: 8,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
//     alt: "Office building with illuminated windows at dusk",
//   },
//   {
//     id: 9,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
//     alt: "Suburban house with a large front yard",
//   },
//   {
//     id: 10,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
//     alt: "Luxury home with a swimming pool",
//   },
//   {
//     id: 11,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
//     alt: "Modern minimalist house exterior",
//   },
//   {
//     id: 12,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
//     alt: "House with a beautiful garden",
//   },
// ];

// // Contact Section Component
// function ContactSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const section = document.getElementById("contact-section");
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <section id="contact-section" className="py-20 md:py-32 bg-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <h4
//           className={`text-4xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           Let's talk about
//           <br />
//           your project!
//         </h4>
//         <p
//           className={`text-gray-500 text-lg font-light text-[14px] mb-12 leading-relaxed max-w-xl transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "200ms" }}
//         >
//           We are ready to share with you our design vision and lead you into the
//           exciting world of creativity.
//         </p>
//         <button
//           className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "400ms" }}
//         >
//           SEND REQUEST
//         </button>
//       </div>
//     </section>
//   );
// }

// // Image Grid Component
// function ImageGrid() {
//   const [lastClicked, setLastClicked] = useState(null);

//   const handleGridClick = (index) => {
//     setLastClicked(index);
//     console.log(`Grid cell #${index + 1} clicked!`);
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-900 overflow-hidden font-sans">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://southcoastimprovement.com/wp-content/uploads/2025/03/8254661.jpg"
//           alt="Construction site background"
//           className="w-full h-full object-cover grayscale"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Clickable Grid Container */}
//       <div className="relative grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 w-full h-full">
//         {gridData.map((item, index) => (
//           <div
//             key={item.id}
//             onClick={() => handleGridClick(index)}
//             className="group relative border border-white cursor-pointer overflow-hidden"
//           >
//             <img
//               src={item.imageUrl}
//               alt={item.alt}
//               className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Main Portfolio Gallery Component that orchestrates the other sections
// function PortfolioGallery() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* Hero Section with Background Video */}
//       <div
//         id="hero-section"
//         className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           {/* IMPORTANT: Replace this placeholder URL with the path to your own video.
//                       1. Add your video file (e.g., "my-video.mp4") to the `public` folder in your project.
//                       2. Change the src below to `src="/my-video.mp4"`.
//                     */}
//           <source src="/Video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Black overlay for video */}
//         <div className="absolute inset-0 bg-black/70"></div>
//       </div>

//       {/* Image Grid Section */}
//       <ImageGrid />

//       {/* Contact Section */}
//       <ContactSection />
//     </div>
//   );
// }

// // The main App component renders the PortfolioGallery
// export default function App() {
//   return <PortfolioGallery />;
// }

// "use client";

// import React, { useState, useEffect } from "react";

// // Data array for the grid cells.
// const gridData = [
//   {
//     id: 1,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
//     alt: "Modern building with glass facade",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
//     alt: "Architectural detail of a building corner",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
//     alt: "Symmetrical view of a modern building",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
//     alt: "Building with a unique wave-like structure",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
//     alt: "A tall skyscraper against a blue sky",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
//     alt: "Residential building with many balconies",
//   },
//   {
//     id: 7,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
//     alt: "A modern house with a clean design",
//   },
//   {
//     id: 8,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
//     alt: "Office building with illuminated windows at dusk",
//   },
//   {
//     id: 9,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
//     alt: "Suburban house with a large front yard",
//   },
//   {
//     id: 10,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
//     alt: "Luxury home with a swimming pool",
//   },
//   {
//     id: 11,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
//     alt: "Modern minimalist house exterior",
//   },
//   {
//     id: 12,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
//     alt: "House with a beautiful garden",
//   },
// ];

// // Contact Section Component
// function ContactSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const section = document.getElementById("contact-section");
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <section id="contact-section" className="py-20 md:py-32 bg-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <h4
//           className={`text-4xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           Let's talk about
//           <br />
//           your project!
//         </h4>
//         <p
//           className={`text-gray-500 text-lg font-light text-[14px] mb-12 leading-relaxed max-w-xl transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "200ms" }}
//         >
//           We are ready to share with you our design vision and lead you into the
//           exciting world of creativity.
//         </p>
//         <button
//           className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "400ms" }}
//         >
//           SEND REQUEST
//         </button>
//       </div>
//     </section>
//   );
// }

// // Image Grid Component
// function ImageGrid() {
//   const [lastClicked, setLastClicked] = useState(null);

//   const handleGridClick = (index) => {
//     setLastClicked(index);
//     console.log(`Grid cell #${index + 1} clicked!`);
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-900 overflow-hidden font-sans">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://southcoastimprovement.com/wp-content/uploads/2025/03/8254661.jpg"
//           alt="Construction site background"
//           className="w-full h-full object-cover grayscale"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Clickable Grid Container */}
//       <div className="relative grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 w-full h-full">
//         {gridData.map((item, index) => (
//           <div
//             key={item.id}
//             onClick={() => handleGridClick(index)}
//             className="group relative border border-white cursor-pointer overflow-hidden"
//           >
//             <img
//               src={item.imageUrl}
//               alt={item.alt}
//               className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Main Portfolio Gallery Component that orchestrates the other sections
// function PortfolioGallery() {
//   const [heroVisible, setHeroVisible] = useState(false);

//   useEffect(() => {
//     const heroSection = document.getElementById("hero-section");
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHeroVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (heroSection) {
//       observer.observe(heroSection);
//     }

//     return () => {
//       if (heroSection) {
//         observer.unobserve(heroSection);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* Hero Section with Background Video */}
//       <div
//         id="hero-section"
//         className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           {/* IMPORTANT: Replace this placeholder URL with the path to your own video.
//                       1. Add your video file (e.g., "my-video.mp4") to the `public` folder in your project.
//                       2. Change the src below to `src="/my-video.mp4"`.
//                     */}
//           <source src="/Video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Black overlay for video */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         {/* Centered Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
//           <h1
//             className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             Innovative Spaces, Timeless Designs
//           </h1>
//           <p
//             className={`mt-4 text-lg md:text-xl transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "300ms" }}
//           >
//             Explore Our Architectural Showcase
//           </p>
//         </div>
//       </div>

//       {/* Image Grid Section */}
//       <ImageGrid />

//       {/* Contact Section */}
//       <ContactSection />
//     </div>
//   );
// }

// // The main App component renders the PortfolioGallery
// export default function App() {
//   return <PortfolioGallery />;
// }

// "use client";

// import React, { useState, useEffect } from "react";

// // Data array for the grid cells. (No changes here)
// const gridData = [
//   {
//     id: 1,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
//     alt: "Modern building with glass facade",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
//     alt: "Architectural detail of a building corner",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
//     alt: "Symmetrical view of a modern building",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
//     alt: "Building with a unique wave-like structure",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
//     alt: "A tall skyscraper against a blue sky",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
//     alt: "Residential building with many balconies",
//   },
//   {
//     id: 7,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
//     alt: "A modern house with a clean design",
//   },
//   {
//     id: 8,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
//     alt: "Office building with illuminated windows at dusk",
//   },
//   {
//     id: 9,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
//     alt: "Suburban house with a large front yard",
//   },
//   {
//     id: 10,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
//     alt: "Luxury home with a swimming pool",
//   },
//   {
//     id: 11,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
//     alt: "Modern minimalist house exterior",
//   },
//   {
//     id: 12,
//     imageUrl:
//       "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
//     alt: "House with a beautiful garden",
//   },
// ];

// // Contact Section Component (No changes here)
// function ContactSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const section = document.getElementById("contact-section");
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <section id="contact-section" className="py-20 md:py-32 bg-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <h4
//           className={`text-4xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           Let's talk about
//           <br />
//           your project!
//         </h4>
//         <p
//           className={`text-gray-500 text-lg font-light text-[14px] mb-12 leading-relaxed max-w-xl transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "200ms" }}
//         >
//           We are ready to share with you our design vision and lead you into the
//           exciting world of creativity.
//         </p>
//         <button
//           className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           style={{ transitionDelay: "400ms" }}
//         >
//           SEND REQUEST
//         </button>
//       </div>
//     </section>
//   );
// }

// // Image Grid Component (No changes here as requested)
// function ImageGrid() {
//   const [lastClicked, setLastClicked] = useState(null);

//   const handleGridClick = (index) => {
//     setLastClicked(index);
//     console.log(`Grid cell #${index + 1} clicked!`);
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-900 overflow-hidden font-sans">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://southcoastimprovement.com/wp-content/uploads/2025/03/8254661.jpg"
//           alt="Construction site background"
//           className="w-full h-full object-cover grayscale"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Clickable Grid Container */}
//       <div className="relative grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 w-full h-full">
//         {gridData.map((item, index) => (
//           <div
//             key={item.id}
//             onClick={() => handleGridClick(index)}
//             className="group relative border border-white cursor-pointer overflow-hidden"
//           >
//             <img
//               src={item.imageUrl}
//               alt={item.alt}
//               className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Main Portfolio Gallery Component that orchestrates the other sections
// function PortfolioGallery() {
//   const [heroVisible, setHeroVisible] = useState(false);
//   const [galleryHeaderVisible, setGalleryHeaderVisible] = useState(false); // New state for gallery header

//   useEffect(() => {
//     // Observer for Hero Section
//     const heroSection = document.getElementById("hero-section");
//     const heroObserver = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHeroVisible(true);
//           heroObserver.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (heroSection) heroObserver.observe(heroSection);

//     // Observer for Gallery Header Section
//     const galleryHeaderSection = document.getElementById("gallery-header");
//     const galleryHeaderObserver = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setGalleryHeaderVisible(true);
//           galleryHeaderObserver.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (galleryHeaderSection)
//       galleryHeaderObserver.observe(galleryHeaderSection);

//     return () => {
//       if (heroSection) heroObserver.unobserve(heroSection);
//       if (galleryHeaderSection)
//         galleryHeaderObserver.unobserve(galleryHeaderSection);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles (No Changes) */}
//       <style jsx global>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* Hero Section with Background Video */}
//       <div
//         id="hero-section"
//         className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src="/Video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Black overlay for video */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         {/* Centered Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
//           <h1
//             className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             Innovative Spaces, Timeless Designs
//           </h1>
//           <p
//             className={`mt-4 text-lg md:text-xl transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "300ms" }}
//           >
//             Explore Our Architectural Showcase
//           </p>

//           {/* === NEW BUTTONS ADDED HERE === */}
//           <div
//             className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
//               heroVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "600ms" }}
//           >
//             <button className="border border-white px-8 py-3 text-white font-light text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
//               Our Work
//             </button>
//             <button className="bg-white px-8 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
//               Contact Us
//             </button>
//           </div>
//           {/* === END OF NEW BUTTONS === */}
//         </div>
//       </div>

//       {/* === NEW UNIQUE HEADING SECTION FOR GALLERY === */}
//       <section
//         id="gallery-header"
//         className="bg-white py-16 md:py-24 text-center"
//       >
//         <div className="max-w-4xl mx-auto px-6">
//           <h2
//             className={`text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-1000 ${
//               galleryHeaderVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             Our Curated Collection
//           </h2>
//           <p
//             className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
//               galleryHeaderVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "200ms" }}
//           >
//             Each project is a testament to our commitment to excellence and
//             innovation. Hover over the tiles to reveal a glimpse into our world.
//           </p>
//         </div>
//       </section>
//       {/* === END OF NEW HEADING SECTION === */}

//       {/* Image Grid Section (Unchanged) */}
//       <ImageGrid />

//       {/* Contact Section (Unchanged) */}
//       <ContactSection />
//     </div>
//   );
// }

// // // The main App component renders the PortfolioGallery
// // export default function App() {
// //   return <PortfolioGallery />;
// // }


"use client";

import React, { useState, useEffect } from "react";

// Data array for the grid cells. (No changes here)
const gridData = [
  {
    id: 1,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/07/YODEZEEN-Modern-Mosque-01-1024x724.jpg",
    alt: "Modern building with glass facade",
  },
  {
    id: 2,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-17.17.21-1024x731.jpeg",
    alt: "Architectural detail of a building corner",
  },
  {
    id: 3,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/03/Druskininkai_cam1-1024x512.jpg",
    alt: "Symmetrical view of a modern building",
  },
  {
    id: 4,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/02/KOZYN-171-1024x683.jpg",
    alt: "Building with a unique wave-like structure",
  },
  {
    id: 5,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2025/02/HOR-1024x576.jpg",
    alt: "A tall skyscraper against a blue sky",
  },
  {
    id: 6,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/11/living_CShading_LightMix_View040100-1024x724.jpg",
    alt: "Residential building with many balconies",
  },
  {
    id: 7,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/09/12443-1024x576.jpg",
    alt: "A modern house with a clean design",
  },
  {
    id: 8,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/40000_Post-1024x724.jpg",
    alt: "Office building with illuminated windows at dusk",
  },
  {
    id: 9,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/living_CShading_LightMix_View010100-1024x724.jpg",
    alt: "Suburban house with a large front yard",
  },
  {
    id: 10,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/08/Untitled-14444444-1024x576.png",
    alt: "Luxury home with a swimming pool",
  },
  {
    id: 11,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-11.34.06-1024x819.jpeg",
    alt: "Modern minimalist house exterior",
  },
  {
    id: 12,
    imageUrl:
      "https://yodezeen.com/wp-content/uploads/2024/07/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1024x576.png",
    alt: "House with a beautiful garden",
  },
];

// Contact Section Component (No changes here)
function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

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
          We are ready to share with you our design vision and lead you into the
          exciting world of creativity.
        </p>
        <button
          className={`border border-black px-10 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          SEND REQUEST
        </button>
      </div>
    </section>
  );
}

// Image Grid Component (No changes here as requested)
function ImageGrid() {
  const [lastClicked, setLastClicked] = useState(null);

  const handleGridClick = (index) => {
    setLastClicked(index);
    console.log(`Grid cell #${index + 1} clicked!`);
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
            <img
              src={item.imageUrl}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Portfolio Gallery Component that orchestrates the other sections
function PortfolioGallery() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [galleryHeaderVisible, setGalleryHeaderVisible] = useState(false); // New state for gallery header

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
      {/* Global Styles (No Changes) */}
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
      <div
        id="hero-section"
        className="hidden md:block relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black overlay for video */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1
            className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Innovative Spaces, Timeless Designs
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Explore Our Architectural Showcase
          </p>

          {/* === NEW BUTTONS ADDED HERE === */}
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <button className="border border-white px-8 py-3 text-white font-light text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Our Work
            </button>
            <button className="bg-white px-8 py-3 text-black font-light text-sm uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
              Contact Us
            </button>
          </div>
          {/* === END OF NEW BUTTONS === */}

        </div>
      </div>

      {/* === NEW UNIQUE HEADING SECTION FOR GALLERY === */}
      <section id="gallery-header" className="bg-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-1000 ${
            galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Our Curated Collection
          </h2>
          <p className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
            galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}>
            Each project is a testament to our commitment to excellence and innovation. Hover over the tiles to reveal a glimpse into our world.
          </p>
        </div>
      </section>
      {/* === END OF NEW HEADING SECTION === */}

      {/* Image Grid Section (Unchanged) */}
      <ImageGrid />

      {/* Contact Section (Unchanged) */}
      <ContactSection />
    </div>
  );
}


// The main App component renders the PortfolioGallery
export default function App() {
  return <PortfolioGallery />;
}