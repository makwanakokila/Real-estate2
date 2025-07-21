// "use client"

// import { useState } from "react"
// import { Search, Menu, X } from "lucide-react"

// const Header = ({ isScrolled, scrollY, headerTheme }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)

//   const navigation = [
//     { name: "About", key: "about" },
//     { name: "Media", key: "media" },
//     { name: "Blog", key: "blog" },
//     { name: "Careers", key: "careers" },
//     { name: "Contact", key: "contact" },
//   ]

//   const projectCategories = [
//     { name: "All Projects", key: "all" },
//     { name: "Residential", key: "residential" },
//     { name: "Commercial", key: "commercial" },
//     { name: "Hospitality", key: "hospitality" },
//     { name: "Architecture", key: "architecture" },
//   ]

//   const isHeroSection = headerTheme === "dark" && !isScrolled
//   const isLightTheme = headerTheme === "light"
//   const isDarkScrolled = headerTheme === "dark-scrolled"

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isLightTheme
//           ? "bg-white/95 backdrop-blur-sm"
//           : isDarkScrolled
//             ? "bg-[#1A1A1A]/95 backdrop-blur-sm"
//             : "bg-transparent"
//       }`}
//       style={{
//         height: isScrolled ? "60px" : "auto",
//       }}
//     >
//       <div
//         className="container mx-auto px-6"
//         style={{ paddingTop: isScrolled ? "12px" : "24px", paddingBottom: isScrolled ? "12px" : "24px" }}
//       >
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-2xl font-bold cursor-pointer">
//             <div className="flex items-center space-x-1">
//               <div
//                 className={`w-6 h-6 border-2 grid grid-cols-2 gap-0.5 ${
//                   isLightTheme ? "border-black" : "border-white"
//                 }`}
//               >
//                 <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
//                 <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
//                 <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
//                 <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
//               </div>
//               <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>YODEZEEN</span>
//             </div>
//           </div>

//           {/* Desktop Navigation - Full menu only on hero section */}
//           {isHeroSection ? (
//             <nav className="hidden lg:flex items-center space-x-8">
//               {/* Projects with Menu Toggle */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
//                   className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-300 text-white"
//                 >
//                   <Menu size={16} />
//                   <span>Projects</span>
//                 </button>

//                 {/* Vertical Menu */}
//                 {isProjectsMenuOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-sm">
//                     <div className="py-2">
//                       {projectCategories.map((category) => (
//                         <button
//                           key={category.key}
//                           onClick={() => setIsProjectsMenuOpen(false)}
//                           className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
//                         >
//                           {category.name}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {navigation.map((item) => (
//                 <button
//                   key={item.key}
//                   className="text-sm font-medium transition-colors hover:text-gray-300 text-gray-400"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
//             </nav>
//           ) : (
//             /* Minimal menu for scrolled state */
//             <div className="hidden lg:flex items-center space-x-4">
//               <button
//                 onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
//                 className={`p-2 transition-colors ${
//                   isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
//                 }`}
//               >
//                 <Menu size={20} />
//               </button>

//               {/* Dropdown Menu for scrolled state */}
//               {isProjectsMenuOpen && (
//                 <div
//                   className={`absolute top-full right-6 mt-2 w-48 backdrop-blur-sm border rounded-sm ${
//                     isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10"
//                   }`}
//                 >
//                   <div className="py-2">
//                     <button
//                       onClick={() => setIsProjectsMenuOpen(false)}
//                       className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
//                         isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"
//                       }`}
//                     >
//                       Projects
//                     </button>
//                     {navigation.map((item) => (
//                       <button
//                         key={item.key}
//                         onClick={() => setIsProjectsMenuOpen(false)}
//                         className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
//                           isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"
//                         }`}
//                       >
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <nav className={`lg:hidden mt-6 pb-6 border-t ${isLightTheme ? "border-gray-200" : "border-gray-800"}`}>
//             <div className="flex flex-col space-y-4 mt-6">
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`text-left text-lg font-medium transition-colors ${
//                   isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
//                 }`}
//               >
//                 Projects
//               </button>
//               {navigation.map((item) => (
//                 <button
//                   key={item.key}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={`text-left text-lg font-medium transition-colors ${
//                     isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header


"use client"

import { useState } from "react"
import { Search, Menu } from "lucide-react"
import FullScreenMenu from "./FullScreenMenu"

const Header = ({ isScrolled, scrollY, headerTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const navigation = [
    { name: "About", key: "about" },
    { name: "Media", key: "media" },
    { name: "Blog", key: "blog" },
    { name: "Careers", key: "careers" },
    { name: "Contact", key: "contact" },
  ]

  const projectCategories = [
    { name: "All Projects", key: "all" },
    { name: "Residential", key: "residential" },
    { name: "Commercial", key: "commercial" },
    { name: "Hospitality", key: "hospitality" },
    { name: "Architecture", key: "architecture" },
  ]

  const isHeroSection = headerTheme === "dark" && !isScrolled
  const isLightTheme = headerTheme === "light"
  const isDarkScrolled = headerTheme === "dark-scrolled"
  const isProjectCategories = headerTheme === "project-categories"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightTheme
            ? "bg-white/95 backdrop-blur-sm"
            : isDarkScrolled
              ? "bg-[#1A1A1A]/95 backdrop-blur-sm"
              : isProjectCategories
                ? "bg-[#1B1A1A]/95 backdrop-blur-sm"
                : "bg-transparent"
        }`}
        style={{
          height: isScrolled ? "60px" : "auto",
        }}
      >
        <div
          className="container mx-auto px-6"
          style={{ paddingTop: isScrolled ? "12px" : "24px", paddingBottom: isScrolled ? "12px" : "24px" }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold cursor-pointer">
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
            </div>

            {/* Desktop Navigation - Full menu only on hero section */}
            {isHeroSection ? (
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Projects with Menu Toggle */}
                <div className="relative">
                  <button
                    onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                    className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-300 text-white"
                  >
                    <Menu size={16} />
                    <span>Projects</span>
                  </button>

                  {/* Vertical Menu */}
                  {isProjectsMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-sm">
                      <div className="py-2">
                        {projectCategories.map((category) => (
                          <button
                            key={category.key}
                            onClick={() => setIsProjectsMenuOpen(false)}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {navigation.map((item) => (
                  <button
                    key={item.key}
                    className="text-sm font-medium transition-colors hover:text-gray-300 text-gray-400"
                  >
                    {item.name}
                  </button>
                ))}
                <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              </nav>
            ) : (
              /* Minimal menu for scrolled state */
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={() => setIsFullScreenMenuOpen(true)}
                  className={`p-2 transition-colors ${
                    isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                  }`}
                >
                  <Menu size={20} />
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`}
              onClick={() => setIsFullScreenMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <FullScreenMenu
        isOpen={isFullScreenMenuOpen}
        onClose={() => setIsFullScreenMenuOpen(false)}
        headerTheme={headerTheme}
      />
    </>
  )
}

export default Header
