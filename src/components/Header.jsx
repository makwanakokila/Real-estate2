"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"

const Header = ({ isScrolled, scrollY, headerTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)

  const navigation = [
    { name: "About", key: "about", href: "/about" },
    { name: "Media", key: "media", href: "/media" },
    { name: "Blog", key: "blog", href: "/blog" },
    { name: "Careers", key: "careers", href: "/careers" },
    { name: "Contact", key: "contact", href: "/contact" },
  ]

  const projectCategories = [
    { name: "All Projects", key: "all", href: "/projects" },
    { name: "Residential", key: "residential", href: "/projects/residential" },
    { name: "Commercial", key: "commercial", href: "/projects/commercial" },
    { name: "Hospitality", key: "hospitality", href: "/projects/hospitality" },
    { name: "Architecture", key: "architecture", href: "/projects/architecture" },
  ]

  const isHeroSection = headerTheme === "dark" && !isScrolled
  const isLightTheme = headerTheme === "light"
  const isDarkScrolled = headerTheme === "dark-scrolled"
  const isProjectCategories = headerTheme === "project-categories"

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false)
    setIsProjectsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightTheme
          ? "bg-white/95 backdrop-blur-sm"
          : isDarkScrolled || isProjectCategories
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={{
        height: isScrolled || isMobileMenuOpen ? "auto" : "auto",
      }}
    >
      <div
        className="container mx-auto px-6"
        style={{ paddingTop: isScrolled ? "12px" : "24px", paddingBottom: isScrolled ? "12px" : "24px" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cursor-pointer" onClick={closeAllMenus}>
            <div className="flex items-center space-x-1">
              <div
                className={`w-6 h-6 border-2 grid grid-cols-2 gap-0.5 ${
                  isLightTheme ? "border-black" : "border-white"
                }`}
              >
                <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
                <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
                <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
                <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
              </div>
              <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>YODEZEEN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isHeroSection ? (
              // Full menu for Hero section
              <>
                {/* --- THIS IS THE CHANGED SECTION --- */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    {/* Part 1: Button to open the dropdown (now first) */}
                    <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className="text-white hover:text-gray-300">
                      <Menu size={16} />
                    </button>
                    {/* Part 2: Link to the main projects page (now second) */}
                    <Link to="/projects" className="text-sm font-medium text-white hover:text-gray-300">
                      Projects
                    </Link>
                  </div>

                  {/* The dropdown menu itself */}
                  {isProjectsMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-sm">
                      <ul className="py-2">
                        {projectCategories.map((cat) => (
                          <li key={cat.key}>
                            <Link to={cat.href} onClick={closeAllMenus} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10">
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* --- END OF CHANGED SECTION --- */}

                {navigation.map((item) => (
                  <Link key={item.key} to={item.href} className="text-sm font-medium text-gray-400 hover:text-gray-300">
                    {item.name}
                  </Link>
                ))}
                <Search className="w-5 h-5 cursor-pointer text-white hover:text-gray-300" />
              </>
            ) : (
              // Minimal menu for scrolled state
              <div className="relative">
                <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className={`p-2 transition-colors ${ isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300" }`}>
                  <Menu size={20} />
                </button>
                {isProjectsMenuOpen && (
                  <div className={`absolute top-full right-0 mt-2 w-56 backdrop-blur-sm border rounded-sm ${ isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10" }`}>
                    <ul className="py-2">
                      {projectCategories.map((cat) => (
                         <li key={cat.key}>
                            <Link to={cat.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
                                {cat.name}
                            </Link>
                         </li>
                      ))}
                      <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
                      {navigation.map((item) => (
                        <li key={item.key}>
                          <Link to={item.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-6 pb-6 border-t ${isLightTheme ? "border-gray-200" : "border-gray-800"}`}>
            <ul className="flex flex-col space-y-4 mt-6">
              {projectCategories.map((cat) => (
                <li key={cat.key}>
                  <Link to={cat.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
                    {cat.name}
                  </Link>
                </li>
              ))}
               <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
              {navigation.map((item) => (
                <li key={item.key}>
                  <Link to={item.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header