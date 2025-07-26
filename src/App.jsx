// "use client";

// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Header from "./components/Header";
// import FooterSection from "./components/Footer";
// import ImgGrid from "./Homepage/ImgGrid";
// import About from "./about/About";
// import RealEstatePage from "./filter/Filter";
// import ContactSection from "./contact/ContactSection";
// import Media from "./media/Media";
// import BlogGrid from "./blog/Blog";
// import ProjectPage from "./Homepage/ProjectPage";
// import ExploreProjects from "./Homepage/ExploreProjects";
// import ProjectDetails from "./Homepage/ProjectDetails";
// import Commercial from "./megha-Menu/Commercial";
// import ResidentialPage from "./megha-Menu/ResidentialPage";
// import ContactFormModel from "./about/ContactFormModal ";
// import OurProjectsPage from "./project/OurProjectsPage";
// import PropertyDetails from "./megha-Menu/PropertyDetails";
// import DetailsPage from "./megha-Menu/DetailsPage";
// import ServicesPage from "./megha-Menu/ServicesPage";
// import PlottingPage from "./megha-Menu/PlottingPage";
// import Vr from "../../../../../../AppData/Local/Microsoft/Windows/INetCache/IE/L9PSA1YI/Vr[1]";
// import Filterdata from "./filter/filterdata";

// // This part helps use location in a child component
// function App() {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const [scrollY, setScrollY] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [headerTheme, setHeaderTheme] = useState("dark");

//   // Define early
//   const forceLightTheme = [
//     "/about",
//     "/media",
//     "/",
//     "/blog",
//     "/vr",
//     "/Filter",
//   ].includes(currentPath);

//   useEffect(() => {
//     if (forceLightTheme) {
//       setHeaderTheme("light");
//       return;
//     }

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setScrollY(scrollPosition);
//       setIsScrolled(scrollPosition > 100);

//       const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
//       const aboutHeight = document.getElementById("about")?.offsetHeight || 0;
//       const projectCategoriesHeight =
//         document.getElementById("project-categories")?.offsetHeight || 0;
//       const careersHeight =
//         document.getElementById("careers")?.offsetHeight || 0;
//       const contactHeight =
//         document.getElementById("contact")?.offsetHeight || 0;
//       const footerHeight = document.getElementById("footer")?.offsetHeight || 0;

//       const aboutStart = heroHeight;
//       const projectCategoriesStart = aboutStart + aboutHeight;
//       const careersStart = projectCategoriesStart + projectCategoriesHeight;
//       const contactStart = careersStart + careersHeight;
//       const footerStart = contactStart + contactHeight;

//       if (scrollPosition >= footerStart - 100 && footerStart > 0) {
//         setHeaderTheme("dark-scrolled");
//       } else if (scrollPosition >= contactStart - 100 && contactStart > 0) {
//         setHeaderTheme("dark-scrolled");
//       } else if (scrollPosition >= careersStart - 100 && careersStart > 0) {
//         setHeaderTheme("light");
//       } else if (
//         scrollPosition >= projectCategoriesStart - 100 &&
//         projectCategoriesStart > 0
//       ) {
//         setHeaderTheme("project-categories");
//       } else if (scrollPosition >= aboutStart - 100 && aboutStart > 0) {
//         setHeaderTheme("light");
//       } else if (scrollPosition > 50) {
//         setHeaderTheme("dark-scrolled");
//       } else {
//         setHeaderTheme("dark");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [forceLightTheme, currentPath]);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header
//         isScrolled={isScrolled}
//         scrollY={scrollY}
//         headerTheme={headerTheme}
//       />

//       <main>
//         <Routes>
//           <Route path="/" element={<ImgGrid />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Filter" element={<RealEstatePage />} />
//           <Route path="/property/:id" element={<Filterdata />} />
//           <Route path="/contact" element={<ContactSection />} />
//           <Route path="/media" element={<Media />} />
//           <Route path="/blog" element={<BlogGrid />} />
//           <Route path="/project/:id" element={<ProjectPage />} />
//           <Route path="/explore/:builderId" element={<ExploreProjects />} />
//           <Route
//             path="/project/:id/details/:planId"
//             element={<ProjectDetails />}
//           />
//           <Route path="/projects/commercial" element={<Commercial />} />
//           <Route path="/projects/residential" element={<ResidentialPage />} />
//           <Route path="/ContactFormModel" element={<ContactFormModel />} />
//           <Route path="/Projects" element={<OurProjectsPage />} />
//           <Route path="/projects/commercial" element={<Commercial />} />
//           <Route path="/Commercial/details/:id" element={<PropertyDetails />} />

//           <Route path="/projects/residential" element={<ResidentialPage />} />
//           <Route path="/Residential/details/:id" element={<DetailsPage />} />
//           <Route path="/projects/services" element={<ServicesPage />} />
//           <Route path="/projects/PlottingPage" element={<PlottingPage />} />
//           <Route path="/vr" element={<Vr />} />
//         </Routes>
//       </main>

//       <section id="footer" className="relative">
//         <FooterSection />
//       </section>
//     </div>
//   );
// }

// export default App;


"use client";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "./components/Header";
import FooterSection from "./components/Footer";
import ImgGrid from "./Homepage/ImgGrid";
import About from "./about/About";
import RealEstatePage from "./filter/Filter";
import ContactSection from "./contact/ContactSection";
import Media from "./media/Media";
import BlogGrid from "./blog/Blog";
import ProjectPage from "./Homepage/ProjectPage";
import ExploreProjects from "./Homepage/ExploreProjects";
import ProjectDetails from "./Homepage/ProjectDetails";
import Commercial from "./megha-Menu/Commercial";
import ResidentialPage from "./megha-Menu/ResidentialPage";
import ContactFormModel from "./about/ContactFormModal ";
import OurProjectsPage from "./project/OurProjectsPage";
import PropertyDetails from "./megha-Menu/PropertyDetails";
import DetailsPage from "./megha-Menu/DetailsPage";
import ServicesPage from "./megha-Menu/ServicesPage";
import PlottingPage from "./megha-Menu/PlottingPage";
import Vr from "../../../../../../AppData/Local/Microsoft/Windows/INetCache/IE/L9PSA1YI/Vr[1]";
import Filterdata from "./filter/filterdata";

// ✅ Import your custom loader component
import Loader from "./components/Loader";
import LoanCalculator from "./Homepage/LoanCalculator";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true); // ✅ New loading state

  const forceLightTheme = [
    "/about",
    "/media",
    "/",
    "/blog",
    "/loan-calculator",
    "/vr",
    "/Filter",
  ].includes(currentPath);

  // ✅ Simulate loading once on app mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (forceLightTheme) {
      setHeaderTheme("light");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setIsScrolled(scrollPosition > 100);

      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const aboutHeight = document.getElementById("about")?.offsetHeight || 0;
      const projectCategoriesHeight =
        document.getElementById("project-categories")?.offsetHeight || 0;
      const careersHeight =
        document.getElementById("careers")?.offsetHeight || 0;
      const contactHeight =
        document.getElementById("contact")?.offsetHeight || 0;
      const footerHeight = document.getElementById("footer")?.offsetHeight || 0;

      const aboutStart = heroHeight;
      const projectCategoriesStart = aboutStart + aboutHeight;
      const careersStart = projectCategoriesStart + projectCategoriesHeight;
      const contactStart = careersStart + careersHeight;
      const footerStart = contactStart + contactHeight;

      if (scrollPosition >= footerStart - 100 && footerStart > 0) {
        setHeaderTheme("dark-scrolled");
      } else if (scrollPosition >= contactStart - 100 && contactStart > 0) {
        setHeaderTheme("dark-scrolled");
      } else if (scrollPosition >= careersStart - 100 && careersStart > 0) {
        setHeaderTheme("light");
      } else if (
        scrollPosition >= projectCategoriesStart - 100 &&
        projectCategoriesStart > 0
      ) {
        setHeaderTheme("project-categories");
      } else if (scrollPosition >= aboutStart - 100 && aboutStart > 0) {
        setHeaderTheme("light");
      } else if (scrollPosition > 50) {
        setHeaderTheme("dark-scrolled");
      } else {
        setHeaderTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceLightTheme, currentPath]);

  // ✅ Loader active
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Loader />
      </div>
    );
  }

  // ✅ Main content after loading
  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        isScrolled={isScrolled}
        scrollY={scrollY}
        headerTheme={headerTheme}
      />

      <main>
        <Routes>
          <Route path="/" element={<ImgGrid />} />
          <Route path="/about" element={<About />} />
          <Route path="/Filter" element={<RealEstatePage />} />
          <Route path="/property/:id" element={<Filterdata />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<BlogGrid />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/explore/:builderId" element={<ExploreProjects />} />
          <Route path="/project/:id/details/:planId" element={<ProjectDetails />} />
          <Route path="/projects/commercial" element={<Commercial />} />
          <Route path="/projects/residential" element={<ResidentialPage />} />
          <Route path="/ContactFormModel" element={<ContactFormModel />} />
          <Route path="/Projects" element={<OurProjectsPage />} />
          <Route path="/Commercial/details/:id" element={<PropertyDetails />} />
          <Route path="/Residential/details/:id" element={<DetailsPage />} />
          <Route path="/projects/services" element={<ServicesPage />} />
          <Route path="/projects/PlottingPage" element={<PlottingPage />} />
          <Route path="/vr" element={<Vr />} />
        </Routes>
      </main>

      <section id="footer" className="relative">
        <FooterSection />
      </section>
    </div>
  );
}

export default App;