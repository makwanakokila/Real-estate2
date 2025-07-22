import Hero from "./Hero";
import About from "./About";
import ProjectCategories from "./ProjectCategories";
import CareersSection from "./CareersSection";
import ContactSection from "./ContactSection";

const Homepage = () => {
  return (
    // Using a fragment <> since the parent div is in App.js
    <>
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <About />
      </section>

      {/* Project Categories Section */}
      <section id="project-categories" className="relative">
        <ProjectCategories />
      </section>

      {/* Careers Section */}
      <section id="careers" className="relative">
        <CareersSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <ContactSection />
      </section>
    </>
  );
};

export default Homepage;