// // "use client"

// // import { useState } from "react"
// // import { Link } from "react-router-dom"
// // import { Search, Menu, X } from "lucide-react"

// // const Header = ({ isScrolled, scrollY, headerTheme }) => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
// //   const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)

// //   // Data with href for routing
// //   const navigation = [
// //     { name: "About", key: "about", href: "/about" },
// //     { name: "Media", key: "media", href: "/media" },
// //     { name: "Blog", key: "blog", href: "/blog" },
// //     { name: "Careers", key: "careers", href: "/careers" },
// //     { name: "Contact", key: "contact", href: "/contact" },
// //   ]

// //   const projectCategories = [
// //     { name: "All Projects", key: "all", href: "/projects" },
// //     { name: "Residential", key: "residential", href: "/projects/residential" },
// //     { name: "Commercial", key: "commercial", href: "/projects/commercial" },
// //     { name: "Hospitality", key: "hospitality", href: "/projects/hospitality" },
// //     { name: "Architecture", key: "architecture", href: "/projects/architecture" },
// //   ]

// //   const isHeroSection = headerTheme === "dark" && !isScrolled
// //   const isLightTheme = headerTheme === "light"
// //   const isDarkScrolled = headerTheme === "dark-scrolled"
// //   const isProjectCategories = headerTheme === "project-categories"

// //   // Function to close all menus
// //   const closeAllMenus = () => {
// //     setIsMobileMenuOpen(false)
// //     setIsProjectsMenuOpen(false)
// //   }

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         isLightTheme
// //           ? "bg-white/95 backdrop-blur-sm"
// //           : isDarkScrolled || isProjectCategories
// //           ? "bg-[#1A1A1A]/95 backdrop-blur-sm"
// //           : "bg-transparent"
// //       }`}
// //       style={{
// //         height: isScrolled || isMobileMenuOpen ? "auto" : "auto",
// //       }}
// //     >
// //       <div
// //         className="container mx-auto px-6"
// //         style={{ paddingTop: isScrolled ? "12px" : "24px", paddingBottom: isScrolled ? "12px" : "24px" }}
// //       >
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <Link to="/" className="text-2xl font-bold cursor-pointer" onClick={closeAllMenus}>
// //             <div className="flex items-center space-x-1">
// //               <div
// //                 className={`w-6 h-6 border-2 grid grid-cols-2 gap-0.5 ${
// //                   isLightTheme ? "border-black" : "border-white"
// //                 }`}
// //               >
// //                 <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
// //                 <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
// //                 <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
// //                 <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
// //               </div>
// //               <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>YODEZEEN</span>
// //             </div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-8">
// //             {isHeroSection ? (
// //               // Full menu for Hero section
// //               <>
// //                 {/* --- THIS IS THE CHANGED SECTION --- */}
// //                 <div className="relative">
// //                   <div className="flex items-center space-x-2">
// //                     {/* Part 1: Link to the main projects page */}
// //                     <Link to="/projects" className="text-sm font-medium text-white hover:text-gray-300">
// //                       Projects
// //                     </Link>
// //                     {/* Part 2: Button to open the dropdown */}
// //                     <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className="text-white hover:text-gray-300">
// //                       <Menu size={16} />
// //                     </button>
// //                   </div>

// //                   {/* The dropdown menu itself (no change here) */}
// //                   {isProjectsMenuOpen && (
// //                     <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-sm">
// //                       <ul className="py-2">
// //                         {projectCategories.map((cat) => (
// //                           <li key={cat.key}>
// //                             <Link to={cat.href} onClick={closeAllMenus} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10">
// //                               {cat.name}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   )}
// //                 </div>
// //                 {/* --- END OF CHANGED SECTION --- */}

// //                 {navigation.map((item) => (
// //                   <Link key={item.key} to={item.href} className="text-sm font-medium text-gray-400 hover:text-gray-300">
// //                     {item.name}
// //                   </Link>
// //                 ))}
// //                 <Search className="w-5 h-5 cursor-pointer text-white hover:text-gray-300" />
// //               </>
// //             ) : (
// //               // Minimal menu for scrolled state
// //               <div className="relative">
// //                 <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className={`p-2 transition-colors ${ isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300" }`}>
// //                   <Menu size={20} />
// //                 </button>
// //                 {isProjectsMenuOpen && (
// //                   <div className={`absolute top-full right-0 mt-2 w-56 backdrop-blur-sm border rounded-sm ${ isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10" }`}>
// //                     <ul className="py-2">
// //                       {projectCategories.map((cat) => (
// //                          <li key={cat.key}>
// //                             <Link to={cat.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
// //                                 {cat.name}
// //                             </Link>
// //                          </li>
// //                       ))}
// //                       <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
// //                       {navigation.map((item) => (
// //                         <li key={item.key}>
// //                           <Link to={item.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
// //                             {item.name}
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
// //             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <nav className={`lg:hidden mt-6 pb-6 border-t ${isLightTheme ? "border-gray-200" : "border-gray-800"}`}>
// //             <ul className="flex flex-col space-y-4 mt-6">
// //               {projectCategories.map((cat) => (
// //                 <li key={cat.key}>
// //                   <Link to={cat.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
// //                     {cat.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //                <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
// //               {navigation.map((item) => (
// //                 <li key={item.key}>
// //                   <Link to={item.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
// //                     {item.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>
// //         )}
// //       </div>
// //     </header>
// //   )
// // }

// // export default Header;

// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Search, Menu, X } from "lucide-react"

// const Header = ({ isScrolled, scrollY, headerTheme }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)

//   const navigation = [
//     { name: "About", key: "about", href: "/about" },
//     { name: "Media", key: "media", href: "/media" },
//     { name: "Blog", key: "blog", href: "/blog" },
//     { name: "Filter", key: "Filter", href: "/Filter" },
//     { name: "Contact", key: "contact", href: "/contact" },
//   ]

//   // Updated projectCategories with the new options
//   const projectCategories = [
//     { name: "Commercial", key: "commercial", href: "/projects/commercial" },
//     { name: "Residential", key: "residential", href: "/projects/residential" },
//     { name: "Services", key: "services", href: "/projects/services" },
//     { name: "Plotting", key: "plotting", href: "/projects/plotting" },
//   ]

//   const isHeroSection = headerTheme === "dark" && !isScrolled
//   const isLightTheme = headerTheme === "light"
//   const isDarkScrolled = headerTheme === "dark-scrolled"
//   const isProjectCategories = headerTheme === "project-categories"

//   const closeAllMenus = () => {
//     setIsMobileMenuOpen(false)
//     setIsProjectsMenuOpen(false)
//     setIsSearchOpen(false)
//   }

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen)
//     setIsProjectsMenuOpen(false)
//     setIsMobileMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isLightTheme
//           ? "bg-white/95 backdrop-blur-sm text-black"
//           : isDarkScrolled || isProjectCategories
//           ? "bg-[#1A1A1A]/95 backdrop-blur-sm text-white"
//           : "bg-transparent text-white"
//       }`}
//       style={{
//         height: isMobileMenuOpen || isSearchOpen ? "auto" : "auto", 
//       }}
//     >
//       <div
//         className="container mx-auto px-6"
//         style={{ paddingTop: isSearchOpen ? "12px" : "24px", paddingBottom: isSearchOpen ? "12px" : "24px" }}
//       >
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold cursor-pointer" onClick={closeAllMenus}>
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
//               <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>REAL ESTATE</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {isSearchOpen ? (
//               <div className="flex items-center w-full max-w-lg">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className={`w-full p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none`}
//                 />
//                 <button onClick={toggleSearch} className={`ml-2 p-2 text-white`}>
//                   <X size={20} />
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="relative">
//                   <div className="flex items-center space-x-2">
//                     <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className={`${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                       <Menu size={16} />
//                     </button>
//                     <Link to="/Projects" className={`text-sm font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                       Projects
//                     </Link>
//                   </div>
//                   {isProjectsMenuOpen && (
//                     <div className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-sm border rounded-sm ${ isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10" }`}>
//                       <ul className="py-2">
//                         {projectCategories.map((cat) => (
//                           <li key={cat.key}>
//                             <Link to={cat.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
//                               {cat.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 {navigation.map((item) => (
//                   <Link key={item.key} to={item.href} className={`text-sm font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                     {item.name}
//                   </Link>
//                 ))}
//                 <Search className={`w-5 h-5 cursor-pointer ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`} onClick={toggleSearch} />
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`} onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchOpen(false); }}>
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Search Input */}
//         {isSearchOpen && (
//           <div className="lg:hidden mt-4 pb-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`w-full p-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none`}
//             />
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <nav className={`lg:hidden mt-6 pb-6 border-t ${isLightTheme ? "border-gray-200" : "border-gray-800"}`}>
//             <ul className="flex flex-col space-y-4 mt-6">
//               {projectCategories.map((cat) => (
//                 <li key={cat.key}>
//                   <Link to={cat.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                     {cat.name}
//                   </Link>
//                 </li>
//               ))}
//                 <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
//               {navigation.map((item) => (
//                 <li key={item.key}>
//                   <Link to={item.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <button onClick={toggleSearch} className={`flex items-center text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
//                   <Search size={20} className="mr-2" /> Search
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header"use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Search, Menu, X } from "lucide-react"

// const Header = ({ isScrolled, scrollY, headerTheme }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)

//   const navigation = [
//     { name: "About", key: "about", href: "/about" },
//     { name: "Media", key: "media", href: "/media" },
//     { name: "Blog", key: "blog", href: "/blog" },
//     { name: "Filter", key: "Filter", href: "/Filter" },
//     { name: "Contact", key: "contact", href: "/contact" },
//   ]

//   // Updated projectCategories with the new options
//   const projectCategories = [
//     { name: "Commercial", key: "commercial", href: "/projects/commercial" },
//     { name: "Residential", key: "residential", href: "/projects/residential" },
//     { name: "Services", key: "services", href: "/projects/services" },
//     { name: "Plotting", key: "plotting", href: "/projects/PlottingPage" },
//   ]

//   const isHeroSection = headerTheme === "dark" && !isScrolled
//   const isLightTheme = headerTheme === "light"
//   const isDarkScrolled = headerTheme === "dark-scrolled"
//   const isProjectCategories = headerTheme === "project-categories"

//   const closeAllMenus = () => {
//     setIsMobileMenuOpen(false)
//     setIsProjectsMenuOpen(false)
//     setIsSearchOpen(false)
//   }

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen)
//     setIsProjectsMenuOpen(false)
//     setIsMobileMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isLightTheme
//           ? "bg-white/95 backdrop-blur-sm text-black"
//           : isDarkScrolled || isProjectCategories
//           ? "bg-[#1A1A1A]/95 backdrop-blur-sm text-white"
//           : "bg-transparent text-white"
//       }`}
//       style={{
//         height: isMobileMenuOpen || isSearchOpen ? "auto" : "auto", 
//       }}
//     >
//       <div
//         className="container mx-auto px-6"
//         style={{ paddingTop: isSearchOpen ? "12px" : "24px", paddingBottom: isSearchOpen ? "12px" : "24px" }}
//       >
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold cursor-pointer" onClick={closeAllMenus}>
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
//               <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>REAL ESTATE</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {isSearchOpen ? (
//               <div className="flex items-center w-full max-w-lg">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   // Conditional styling for text, placeholder, and border
//                   className={`w-full p-2 bg-transparent focus:outline-none ${
//                     isLightTheme
//                       ? "text-black placeholder-black border-b border-black"
//                       : "text-white placeholder-white border-b border-white"
//                   }`}
//                 />
//                 <button onClick={toggleSearch} className={`ml-2 p-2 ${isLightTheme ? "text-black" : "text-white"}`}>
//                   <X size={20} />
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="relative">
//                   <div className="flex items-center space-x-2">
//                     <button onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)} className={`${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                       <Menu size={16} />
//                     </button>
//                     <Link to="/Projects" className={`text-sm font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                       Projects
//                     </Link>
//                   </div>
//                   {isProjectsMenuOpen && (
//                     <div className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-sm border rounded-sm ${ isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10" }`}>
//                       <ul className="py-2">
//                         {projectCategories.map((cat) => (
//                           <li key={cat.key}>
//                             <Link to={cat.href} onClick={closeAllMenus} className={`block w-full text-left px-4 py-2 text-sm ${isLightTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
//                               {cat.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 {navigation.map((item) => (
//                   <Link key={item.key} to={item.href} className={`text-sm font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                     {item.name}
//                   </Link>
//                 ))}
//                 <Search className={`w-5 h-5 cursor-pointer ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`} onClick={toggleSearch} />
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`} onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchOpen(false); }}>
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Search Input */}
//         {isSearchOpen && (
//           <div className="lg:hidden mt-4 pb-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               // Conditional styling for text, placeholder, and border
//               className={`w-full p-2 bg-transparent focus:outline-none ${
//                 isLightTheme
//                   ? "text-black placeholder-black border-b border-black"
//                   : "text-white placeholder-white border-b border-white"
//               }`}
//             />
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <nav className={`lg:hidden mt-6 pb-6 border-t ${isLightTheme ? "border-gray-200" : "border-gray-800"}`}>
//             <ul className="flex flex-col space-y-4 mt-6">
//               {projectCategories.map((cat) => (
//                 <li key={cat.key}>
//                   <Link to={cat.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}>
//                     {cat.name}
//                   </Link>
//                 </li>
//               ))}
//                 <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
//               {navigation.map((item) => (
//                 <li key={item.key}>
//                   <Link to={item.href} onClick={closeAllMenus} className={`text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <button onClick={toggleSearch} className={`flex items-center text-left text-lg font-medium ${isLightTheme ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-300"}`}>
//                   <Search size={20} className="mr-2" /> Search
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header;



import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X ,Calculator} from "lucide-react";

const Header = ({ isScrolled, scrollY, headerTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation(); // Track route change

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

  const isLightTheme = headerTheme === "light";
  const isDarkScrolled = headerTheme === "dark-scrolled";
  const isProjectCategories = headerTheme === "project-categories";

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

  // ✅ Close all menus on scroll
  useEffect(() => {
    const handleScroll = () => {
      closeAllMenus();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close all menus on route change
  useEffect(() => {
    closeAllMenus();
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightTheme
          ? "bg-white/95 backdrop-blur-sm text-black"
          : isDarkScrolled || isProjectCategories
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm text-white"
          : "bg-transparent text-white"
      }`}
      style={{
        height: isMobileMenuOpen || isSearchOpen ? "auto" : "auto",
      }}
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
                  isLightTheme ? "border-black" : "border-white"
                }`}
              >
                <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
                <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
                <div className={`border ${isLightTheme ? "border-black" : "border-white"}`}></div>
                <div className={isLightTheme ? "bg-black" : "bg-white"}></div>
              </div>
              <span className={`ml-2 tracking-wider ${isLightTheme ? "text-black" : "text-white"}`}>
                REAL ESTATE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isSearchOpen ? (
              <div className="flex items-center w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full p-2 bg-transparent focus:outline-none ${
                    isLightTheme
                      ? "text-black placeholder-black border-b border-black"
                      : "text-white placeholder-white border-b border-white"
                  }`}
                />
                <button onClick={toggleSearch} className={`ml-2 p-2 ${isLightTheme ? "text-black" : "text-white"}`}>
                  <X size={20} />
                </button>
              </div>
            ) : (
              <>
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                      className={`${
                        isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                      }`}
                    >
                      <Menu size={16} />
                    </button>
                    <Link
                      to="/Projects"
                      className={`text-sm font-medium ${
                        isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                      }`}
                    >
                      Projects
                    </Link>
                  </div>
                  {isProjectsMenuOpen && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-sm border rounded-sm ${
                        isLightTheme ? "bg-white/95 border-gray-200" : "bg-[#1A1A1A]/95 border-white/10"
                      }`}
                    >
                      <ul className="py-2">
                        {projectCategories.map((cat) => (
                          <li key={cat.key}>
                            <Link
                              to={cat.href}
                              onClick={closeAllMenus}
                              className={`block w-full text-left px-4 py-2 text-sm ${
                                isLightTheme
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
                    className={`text-sm font-medium ${
                      isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                  {/* EMI Calculator Icon */}
                <Link to="/loan-calculator" onClick={closeAllMenus}>
                  <Calculator
                    className={`w-5 h-5 cursor-pointer ${
                      isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                    }`}
                  />
                </Link>
                <Search
                  className={`w-5 h-5 cursor-pointer ${
                    isLightTheme ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                  }`}
                  onClick={toggleSearch}
                />
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isLightTheme ? "text-black" : "text-white"}`}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsSearchOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full p-2 bg-transparent focus:outline-none ${
                isLightTheme
                  ? "text-black placeholder-black border-b border-black"
                  : "text-white placeholder-white border-b border-white"
              }`}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className={`lg:hidden mt-6 pb-6 border-t ${
              isLightTheme ? "border-gray-200" : "border-gray-800"
            }`}
          >
            <ul className="flex flex-col space-y-4 mt-6">
              {projectCategories.map((cat) => (
                <li key={cat.key}>
                  <Link
                    to={cat.href}
                    onClick={closeAllMenus}
                    className={`text-left text-lg font-medium ${
                      isLightTheme
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <div className={`border-t my-2 ${isLightTheme ? "border-gray-200" : "border-white/10"}`}></div>
              {navigation.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    onClick={closeAllMenus}
                    className={`text-left text-lg font-medium ${
                      isLightTheme
                        ? "text-gray-600 hover:text-gray-800"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleSearch}
                  className={`flex items-center text-left text-lg font-medium ${
                    isLightTheme
                      ? "text-gray-600 hover:text-gray-800"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <Search size={20} className="mr-2" /> Search
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

