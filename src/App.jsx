"use client"

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/Footer";
// import Homepage from "./Homepage/Homepage"; // Import the homepage component
// import About from "./about/About";
// import Projects from "./project/Projects";
// import Careers from "./careers/Careers";
// // import Contact from "./contact/Contacts";

import ImgGrid from './Homepage/ImgGrid';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setIsScrolled(scrollPosition > 100);

      // This logic will work correctly when the Homepage component is rendered,
      // as it's looking for the section IDs within the document.
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const aboutHeight = document.getElementById("about")?.offsetHeight || 0;
      const projectCategoriesHeight = document.getElementById("project-categories")?.offsetHeight || 0;
      const careersHeight = document.getElementById("careers")?.offsetHeight || 0;
      const contactHeight = document.getElementById("contact")?.offsetHeight || 0;
      const footerHeight = document.getElementById("footer")?.offsetHeight || 0;

      // Calculate start positions of each section
      const aboutStart = heroHeight;
      const projectCategoriesStart = aboutStart + aboutHeight;
      const careersStart = projectCategoriesStart + projectCategoriesHeight;
      const contactStart = careersStart + careersHeight;
      const footerStart = contactStart + contactHeight;

      // Determine header theme based on scroll position
      if (scrollPosition >= footerStart - 100 && footerStart > 0) {
        setHeaderTheme("dark-scrolled"); // Dark theme for footer
      } else if (scrollPosition >= contactStart - 100 && contactStart > 0) {
        setHeaderTheme("dark-scrolled"); // Dark theme for contact section
      } else if (scrollPosition >= careersStart - 100 && careersStart > 0) {
        setHeaderTheme("light"); // Light theme for careers section
      } else if (scrollPosition >= projectCategoriesStart - 100 && projectCategoriesStart > 0) {
        setHeaderTheme("project-categories"); // Custom dark theme for ProjectCategories
      } else if (scrollPosition >= aboutStart - 100 && aboutStart > 0) {
        setHeaderTheme("light"); // Light theme for About section
      } else if (scrollPosition > 50) {
        setHeaderTheme("dark-scrolled"); // Dark scrolled theme for hero
      } else {
        setHeaderTheme("dark"); // Transparent dark theme at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Also run once on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  return (
      <div className="min-h-screen bg-black text-white">
        <Header isScrolled={isScrolled} scrollY={scrollY} headerTheme={headerTheme} />
        
        <main>
          <Routes>
            <Route path="/" element={ <ImgGrid/>} />
            
          </Routes>
        </main>
        
        {/* Footer is now part of the main layout */}
        <section id="footer" className="relative">
          <FooterSection />
        </section>
      </div>
  );
}

export default App;

// import React from 'react';
// import Careers from './careers/Careers'
// import ImgGrid from './Homepage/ImgGrid';
// import PortfolioGallery from './project/Projects';
// const App = () => {
//   return (
//     <div>
//       <ImgGrid/>
//       {/* <PortfolioGallery/> */}
//     </div>
//   );
// }

// export default App;
