"use client";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Component and Page Imports... (same as before)
import Header from "./components/Header";
import FooterSection from "./components/Footer";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";
import ImgGrid from "./Homepage/ImgGrid";
import About from "./about/About";
import RealEstatePage from "./filter/Filter";
import Filterdata from "./filter/filterdata";
import ContactSection from "./contact/ContactSection";
import Media from "./media/Media";
import BlogGrid from "./blog/Blog";
import LoanCalculator from "./Homepage/LoanCalculator";
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
import Vr from "./megha-Menu/vr";


function ScrollToTopWrapper({ children }) {
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setShouldRender(true), 0);
    return () => {
      setShouldRender(false);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return shouldRender ? children : null;
}

// NEW: उन पेजों की लिस्ट बनाएं जहां ट्रांसपेरेंट हेडर में काला टेक्स्ट चाहिए।
const pagesWithBlackTextHeader = [
    "/about",
    "/media",
    "/blog",
    "/loan-calculator",
    "/Filter"
];


function App() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NEW: यह जांचें कि क्या मौजूदा पेज हमारी लिस्ट में है।
  const needsBlackTextAtTop = pagesWithBlackTextHeader.includes(location.pathname);

  if (isLoading || routeLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* UPDATED: Header को नया प्रोप भेजें */}
      <Header isScrolled={isScrolled} needsBlackTextAtTop={needsBlackTextAtTop} />

      <main>
        <ScrollToTopWrapper>
          <Routes>
            {/* ... All your Route components ... */}
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
        </ScrollToTopWrapper>
      </main>

      <section id="footer" className="relative">
        <FooterSection />
      </section>

      <Chatbot />
    </div>
  );
}

export default App;