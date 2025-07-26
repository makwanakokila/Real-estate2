
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Calculator } from "lucide-react";

// UPDATED: needsBlackTextAtTop प्रोप को यहां स्वीकार करें
const Header = ({ isScrolled, needsBlackTextAtTop }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();

  // Navigation arrays... (same as before)
  const navigation = [
    { name: "About", key: "about", href: "/about" },
    { name: "Media", key: "media", href: "/media" },
    { name: "Blog", key: "blog", href: "/blog" },
    { name: "Filter", key: "Filter", href: "/Filter" },
    { name: "Contact", key: "contact", href: "/contact" },
  ];
  const projectCategories = [
    { name: "Commercial", key: "commercial", href: "/projects/commercial" },
    { name: "Residential", key: "residential", href: "/projects/residential" },
    { name: "Services", key: "services", href: "/projects/services" },
    { name: "Plotting", key: "plotting", href: "/projects/PlottingPage" },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProjectsMenuOpen(false);
    setIsSearchOpen(false);
  };
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsProjectsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => closeAllMenus();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  // NEW: एक हेल्पर वेरिएबल बनाएं जो तय करेगा कि टेक्स्ट काला होना चाहिए या नहीं
  const useBlackText = isScrolled || needsBlackTextAtTop;

  return (
    <header
      // बैकग्राउंड लॉजिक वही रहेगा, सिर्फ isScrolled पर निर्भर करेगा
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      } ${useBlackText ? "text-black" : "text-white"}`} // टेक्स्ट का रंग अब useBlackText पर निर्भर करेगा
    >
      <div
        className="container mx-auto px-6"
        style={{
          paddingTop: isSearchOpen ? "12px" : "24px",
          paddingBottom: isSearchOpen ? "12px" : "24px",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cursor-pointer" onClick={closeAllMenus}>
            <div className="flex items-center space-x-1">
              <div
                className={`w-6 h-6 border-2 grid grid-cols-2 gap-0.5 ${
                  useBlackText ? "border-black" : "border-white" // UPDATED
                }`}
              >
                <div className={useBlackText ? "bg-black" : "bg-white"}></div>
                <div className={`border ${useBlackText ? "border-black" : "border-white"}`}></div>
                <div className={`border ${useBlackText ? "border-black" : "border-white"}`}></div>
                <div className={useBlackText ? "bg-black" : "bg-white"}></div>
              </div>
              <span className={`ml-2 tracking-wider ${useBlackText ? "text-black" : "text-white"}`}> {/* UPDATED */}
                REAL ESTATE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isSearchOpen ? (
                // ... (Search input logic also uses useBlackText now)
                <div className="flex items-center w-full max-w-lg">
                    <input
                      type="text"
                      placeholder="Search..."
                      className={`w-full p-2 bg-transparent focus:outline-none border-b ${
                        useBlackText
                          ? "text-black placeholder-black border-black"
                          : "text-white placeholder-white border-white"
                      }`}
                    />
                    <button onClick={toggleSearch} className={`ml-2 p-2 ${useBlackText ? "text-black" : "text-white"}`}>
                      <X size={20} />
                    </button>
                </div>
            ) : (
              <>
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                      className={`${useBlackText ? "hover:text-gray-600" : "hover:text-gray-300"}`} // UPDATED
                    >
                      <Menu size={16} />
                    </button>
                    <Link
                      to="/Projects"
                      className={`text-sm font-medium ${useBlackText ? "hover:text-gray-600" : "hover:text-gray-300"}`} // UPDATED
                    >
                      Projects
                    </Link>
                  </div>
                  {isProjectsMenuOpen && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-sm border rounded-sm ${
                        useBlackText // UPDATED: Dropdown भी अब नए लॉजिक का पालन करेगा
                          ? "bg-white/95 border-gray-200"
                          : "bg-[#1A1A1A]/95 border-white/10"
                      }`}
                    >
                      <ul className="py-2">
                        {projectCategories.map((cat) => (
                          <li key={cat.key}>
                            <Link
                              to={cat.href}
                              onClick={closeAllMenus}
                              className={`block w-full text-left px-4 py-2 text-sm ${
                                useBlackText
                                  ? "text-black hover:bg-gray-100"
                                  : "text-white hover:bg-white/10"
                              }`}
                            >
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`text-sm font-medium ${useBlackText ? "hover:text-gray-600" : "hover:text-gray-300"}`} // UPDATED
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/loan-calculator" onClick={closeAllMenus}>
                  <Calculator
                    className={`w-5 h-5 cursor-pointer ${useBlackText ? "hover:text-gray-600" : "hover:text-gray-300"}`} // UPDATED
                  />
                </Link>
                <Search
                  className={`w-5 h-5 cursor-pointer ${useBlackText ? "hover:text-gray-600" : "hover:text-gray-300"}`} // UPDATED
                  onClick={toggleSearch}
                />
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${useBlackText ? "text-black" : "text-white"}`} // UPDATED
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsSearchOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;