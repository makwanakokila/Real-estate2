// "use client"
// import React, { useState, useMemo } from "react"
// import { MapPin, Building2, SquareArrowOutUpRight, ArrowUpRight, Search, Filter, Home, Building } from "lucide-react"

// // --- DATA USING LOCAL IMAGES - THE GUARANTEED SOLUTION ---
// const projectsData = [
//   {
//     name: "Elysian Towers",
//     builder: "Prestige Group",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgG71a-0xes17v2rqjuWV5fsG4JgBiykGnw&s",
//     location: "Vaishnodevi Circle, Ahmedabad",
//     propertyType: "3 BHK",
//     areaRange: "1800-2200 sq.ft",
//     status: "New Launch",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
//     price: "₹80 Lakhs onwards",
//     bedrooms: "3", // Added for filtering
//   },
//   {
//     name: "Skyline Corporate",
//     builder: "Goyal & Co.",
//     builderLogo: "https://media.getrightproperty.com/builders/bengaluru/10/goyal-and-co-logo.webp?v=1734525598652",
//     location: "Shilaj, Ahmedabad",
//     propertyType: "Commercial Spaces",
//     areaRange: "500-5000 sq.ft",
//     status: "Ready to Move",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
//     price: "₹1.5 Cr onwards",
//     bedrooms: "N/A", // Added for filtering
//   },
//   {
//     name: "The Greenfield Villas",
//     builder: "Adani Realty",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0iXSede8rDaQG8VqQoXfUuU92A8WXmaTfQ&s",
//     location: "Gota, Ahmedabad",
//     propertyType: "Villas",
//     areaRange: "3500-5000 sq.yard",
//     status: "New Launch",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//     price: "₹2 Cr onwards",
//     bedrooms: "4+", // Added for filtering
//   },
//   {
//     name: "Orchid Plaza",
//     builder: "Gala Group",
//     builderLogo: "https://www.gala-group.com/wp-content/uploads/2024/01/gala-galagroup.webp",
//     location: "Science City, Ahmedabad",
//     propertyType: "Commercial Spaces",
//     areaRange: "1200-3000 sq.ft",
//     status: "Ready to Move",
//     image: "https://is1-2.housingcdn.com/4f2250e8/2c75469c9fcc0c9b325575de139d0ee9/v0/fs/lodha_hosa_road-hsr_layout_bangalore-bengaluru-lodha_group.png",
//     price: "₹1 Cr onwards",
//     bedrooms: "N/A", // Added for filtering
//   },
//   {
//     name: "Sapphire Residences",
//     builder: "Bakeri Group",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZU5XmjWEMKFN7c_bz69_JRLtHBXhOHPQcQ&s",
//     location: "Naroda, Ahmedabad",
//     propertyType: "2 BHK",
//     areaRange: "1100-1400 sq.ft",
//     status: "Ready to Move",
//     image: "https://imgcdn.houssed.com/Assets/Files/Projects/9797/Project%20Image/5bb474cda8b3f796a2130c7bceb5e02d.webp",
//     price: "₹60 Lakhs onwards",
//     bedrooms: "2", // Added for filtering
//   },
//   {
//     name: "Infinity Business Hub",
//     builder: "Sun Builders",
//     builderLogo: "https://lh3.googleusercontent.com/-OckhU5xMZ9g/VzNfvTWLYZI/AAAAAAAAAVI/fzka6gBnCpsJmbONZMH49kzGAjySFnwggCJkC/photo.jpg",
//     location: "Prahlad Nagar, Ahmedabad",
//     propertyType: "Commercial Spaces",
//     areaRange: "800-2500 sq.ft",
//     status: "New Launch",
//     image: "https://teja10.kuikr.com//r1/20190511/ak_1094_1664129496-1557546988_700x700.png",
//     price: "₹90 Lakhs onwards",
//     bedrooms: "N/A", // Added for filtering
//   },
//   {
//     name: "Green Valley Apartments",
//     builder: "Prestige Group",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgG71a-0xes17v2rqjuWV5fsG4JgBiykGnw&s",
//     location: "Gota, Ahmedabad",
//     propertyType: "2 BHK",
//     areaRange: "1000-1200 sq.ft",
//     status: "Under Construction",
//     image: "https://housing-images.n7net.in/012c1500/c738a5f3aeb1ca11bd491ba717ed2530/v0/medium.jpeg",
//     price: "₹70 Lakhs onwards",
//     bedrooms: "2",
//   },
//   {
//     name: "City Center Offices",
//     builder: "Goyal & Co.",
//     builderLogo: "https://media.getrightproperty.com/builders/bengaluru/10/goyal-and-co-logo.webp?v=1734525598652",
//     location: "Central, Ahmedabad",
//     propertyType: "Commercial Spaces",
//     areaRange: "700-1500 sq.ft",
//     status: "Ready to Move",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRWKhS_vx_19moe2PzHUlITQ9l7o5lOHmSw&s",
//     price: "₹1.2 Cr onwards",
//     bedrooms: "N/A",
//   },
//   {
//     name: "Palm Meadows",
//     builder: "Adani Realty",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0iXSede8rDaQG8VqQoXfUuU92A8WXmaTfQ&s",
//     location: "South Bopal, Ahmedabad",
//     propertyType: "Villas",
//     areaRange: "3000-4500 sq.yard",
//     status: "Ready to Move",
//     image: "https://housing-images.n7net.in/01c16c28/6d68bb1da58d3b75d6e1faeee6aff402/v0/medium/2_bhk_apartment-for-sale-south_bopal-Ahmedabad-others.jpg",
//     price: "₹3 Cr onwards",
//     bedrooms: "4+",
//   },
//   {
//     name: "Lakeview Residences",
//     builder: "Bakeri Group",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZU5XmjWEMKFN7c_bz69_JRLtHBXhOHPQcQ&s",
//     location: "Thaltej, Ahmedabad",
//     propertyType: "3 BHK",
//     areaRange: "1600-2000 sq.ft",
//     status: "New Launch",
//     image: "https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/12/06/Project-Photo-1-Solo-Lake-View-Ahmedabad-5425187_410_1440_240_0.jpg",
//     price: "₹95 Lakhs onwards",
//     bedrooms: "3",
//   },
//    {
//     name: "Harmony Homes",
//     builder: "Shapoorji Pallonji",
//     builderLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsu8Sv4RwRAnlFjkguWidsUw4lgBMHddtdmQ&s",
//     location: "Vastral, Ahmedabad",
//     propertyType: "2 BHK",
//     areaRange: "900-1100 sq.ft",
//     status: "Under Construction",
//     image: "https://housing-images.n7net.in/4f2250e8/8ef3fa6c579db72b7e11c9f8f915b721/v0/medium/shraddha_harmony-vastral-ahmedabad-shraddha_developers.jpeg",
//     price: "₹55 Lakhs onwards",
//     bedrooms: "2",
//   },
//   {
//     name: "Grandeur Commercial Hub",
//     builder: "Sobha Developers",
//     builderLogo: "https://www.big5global.com/wp-content/uploads/2023/10/GIA-VVIP-Partner-Sobha-Constructions.png",
//     location: "SG Highway, Ahmedabad",
//     propertyType: "Commercial Spaces",
//     areaRange: "1500-4000 sq.ft",
//     status: "New Launch",
//     image: "https://housing-images.n7net.in/4f2250e8/1913d0ed87c9007472e66b17a5dcedee/v0/medium/arise_ananta-gota-ahmedabad-arise_group.jpeg",
//     price: "₹2.5 Cr onwards",
//     bedrooms: "N/A",
//   },
// ]

// const builderLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lodha---New-LOgo.png",
//   "https://media.licdn.com/dms/image/v2/C4D0BAQFkYd49JE86Dg/company-logo_200_200/company-logo_200_200/0/1630538535381/dlf_logo?e=2147483647&v=beta&t=qCoIJDJk9yeGrjOAns8tjCgIHgJm2m80TMUP7jkoEmU",
//   "https://www.livemint.com/lm-img/img/2024/11/28/original/Godrej_new_logo_1732796773986.jpeg",
//   "https://bl-i.thgim.com/public/incoming/epo0je/article26643855.ece/alternates/LANDSCAPE_1200/oberoi-hotelspng",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziPf-BUgsQHa_0RkLFDlLfJLZcAhH7a3EIQ&s",
//   "https://www.big5global.com/wp-content/uploads/2023/10/GIA-VVIP-Partner-Sobha-Constructions.png",
// ]

// // Main Page Component
// const Commercial = () => {
//   const [filters, setFilters] = useState({
//     location: "",
//     propertyType: "",
//     budget: "",
//     bedrooms: "",
//     status: "",
//     builder: "",
//     searchTerm: "",
//   })

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }))
//   }

//   const clearFilters = () => {
//     setFilters({
//       location: "",
//       propertyType: "",
//       budget: "",
//       bedrooms: "",
//       status: "",
//       builder: "",
//       searchTerm: "",
//     })
//   }

//   // Memoize unique locations and property types
//   const uniqueLocations = useMemo(() => {
//     const locations = new Set()
//     projectsData.forEach(project => locations.add(project.location))
//     return Array.from(locations).sort()
//   }, [])

//   const uniquePropertyTypes = useMemo(() => {
//     const types = new Set()
//     // Add common categories first
//     types.add("Residential");
//     types.add("Commercial");
//     types.add("Villas");
//     types.add("Apartments");
    
//     // Add specific BHK types from data
//     projectsData.forEach(project => {
//         if (project.propertyType.includes("BHK")) {
//             types.add(project.propertyType);
//         } else {
//             // Normalize commercial spaces for selection if they exist in data
//             if (project.propertyType.toLowerCase().includes("commercial")) {
//                 types.add("Commercial Spaces");
//             }
//             if (project.propertyType.toLowerCase().includes("villa")) {
//                 types.add("Villas");
//             }
//         }
//     });
//     return Array.from(types).sort()
//   }, [])

//   const availableBuilders = useMemo(() => {
//     const builders = new Set()
//     projectsData.forEach((project) => builders.add(project.builder))
//     return Array.from(builders).sort()
//   }, [])

//   const filteredProjects = useMemo(() => {
//     return projectsData.filter((project) => {
//       const matchesSearch =
//         !filters.searchTerm ||
//         project.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//         project.builder.toLowerCase().includes(filters.searchTerm.toLowerCase())

//       const matchesLocation =
//         !filters.location || project.location.toLowerCase().includes(filters.location.toLowerCase())

//       const matchesType =
//         !filters.propertyType || 
//         (filters.propertyType.toLowerCase() === "residential" && (project.propertyType.toLowerCase().includes("bhk") || project.propertyType.toLowerCase().includes("apartment") || project.propertyType.toLowerCase().includes("villa"))) ||
//         (filters.propertyType.toLowerCase() === "commercial" && project.propertyType.toLowerCase().includes("commercial")) ||
//         (filters.propertyType.toLowerCase() === "villas" && project.propertyType.toLowerCase().includes("villa")) ||
//         (filters.propertyType.toLowerCase() === "apartments" && project.propertyType.toLowerCase().includes("apartment")) ||
//         project.propertyType.toLowerCase().includes(filters.propertyType.toLowerCase())


//       const matchesStatus = !filters.status || project.status.toLowerCase().includes(filters.status.toLowerCase())

//       const matchesBuilder = !filters.builder || project.builder.toLowerCase().includes(filters.builder.toLowerCase())

//       const matchesBedrooms = !filters.bedrooms || project.bedrooms.includes(filters.bedrooms)

//       const matchesBudget =
//         !filters.budget ||
//         (() => {
//           // Extract numerical value from price string (e.g., "₹80 Lakhs onwards" -> 80, "₹1.5 Cr onwards" -> 150)
//           let projectPriceNum;
//           const priceString = project.price.toLowerCase();

//           if (priceString.includes("lakhs")) {
//               projectPriceNum = parseFloat(priceString.replace(/₹|,|lakhs onwards/g, '').trim());
//           } else if (priceString.includes("cr")) {
//               projectPriceNum = parseFloat(priceString.replace(/₹|,|cr onwards/g, '').trim()) * 100; // Convert Crores to Lakhs
//           } else {
//               projectPriceNum = 0; // Default if format is unexpected
//           }

//           const filterBudget = filters.budget;

//           if (filterBudget === "50-75") {
//             return projectPriceNum >= 50 && projectPriceNum <= 75;
//           } else if (filterBudget === "75-100") {
//             return projectPriceNum > 75 && projectPriceNum <= 100;
//           } else if (filterBudget === "100+") {
//             return projectPriceNum > 100;
//           }
//           return false;
//         })()


//       return (
//         matchesSearch &&
//         matchesLocation &&
//         matchesType &&
//         matchesStatus &&
//         matchesBuilder &&
//         matchesBedrooms &&
//         matchesBudget
//       )
//     })
//   }, [filters])

//   return (
//     <div className="bg-white text-black font-sans">
//       <main>
//         {/* Hero Section */}
//         <section
//           className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop')" }}
//         >
//           <div className="absolute inset-0 bg-black opacity-60"></div>
//           <div className="relative z-10 text-center px-6">
//             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
//               Find Your Next
//               <br />
//               Premium Property
//             </h1>
//             <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
//               Discover exclusive commercial and residential projects from the most reputed builders in Ahmedabad.
//             </p>
//             <a
//               href="#projects"
//               className="mt-8 inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
//             >
//               Explore Projects
//             </a>
//           </div>
//         </section>

//         {/* Projects & Filters Section */}
//         <section id="projects" className="py-20 px-6 bg-gray-50">
//           <div className="container mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
//             <p className="text-center text-gray-500 mb-12">Curated properties that define luxury and functionality.</p>

//             {/* Filter Section */}
//             <section className="py-8 bg-gray-50 border-b">
//               <div className="max-w-7xl mx-auto px-6">
//                 {/* Search Bar */}
//                 <div className="relative mb-6">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search by project name or builder..."
//                     value={filters.searchTerm}
//                     onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-lg"
//                   />
//                 </div>

//                 {/* Filter Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
//                   <select
//                     value={filters.location}
//                     onChange={(e) => handleFilterChange("location", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">All Locations</option>
//                     {uniqueLocations.map((loc) => (
//                       <option key={loc} value={loc.toLowerCase()}>
//                         {loc}
//                       </option>
//                     ))}
//                   </select>

//                   <select
//                     value={filters.propertyType}
//                     onChange={(e) => handleFilterChange("propertyType", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">Property Type</option>
//                     {uniquePropertyTypes.map((type) => (
//                       <option key={type} value={type.toLowerCase()}>
//                         {type}
//                       </option>
//                     ))}
//                   </select>

//                   <select
//                     value={filters.budget}
//                     onChange={(e) => handleFilterChange("budget", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">Budget Range</option>
//                     <option value="50-75">₹50-75 Lakhs</option>
//                     <option value="75-100">₹75L-1Cr</option>
//                     <option value="100+">₹1Cr+</option>
//                   </select>

//                   <select
//                     value={filters.bedrooms}
//                     onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">Bedrooms</option>
//                     <option value="1">1 BHK</option>
//                     <option value="2">2 BHK</option>
//                     <option value="3">3 BHK</option>
//                     <option value="4+">4 BHK+</option>
//                     <option value="N/A">N/A (Commercial)</option>
//                   </select>

//                   <select
//                     value={filters.status}
//                     onChange={(e) => handleFilterChange("status", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">Project Status</option>
//                     <option value="under construction">Under Construction</option>
//                     <option value="ready to move">Ready to Move</option>
//                     <option value="new launch">New Launch</option>
//                   </select>

//                   <select
//                     value={filters.builder}
//                     onChange={(e) => handleFilterChange("builder", e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   >
//                     <option value="">All Builders</option>
//                     {availableBuilders.map((builderName) => (
//                       <option key={builderName} value={builderName.toLowerCase()}>
//                         {builderName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Filter Actions */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Filter className="w-5 h-5" />
//                     <span>{filteredProjects.length} properties found</span>
//                   </div>
//                   <button onClick={clearFilters} className="text-black font-semibold hover:text-gray-600 transition-colors">
//                     Clear All Filters
//                   </button>
//                 </div>
//               </div>
//             </section>
//             {/* End of Filter Section */}

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer mt-12">
//               {filteredProjects.length === 0 ? (
//                 <div className="text-center py-16 col-span-full">
//                   <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-gray-600 mb-2">No Properties Found</h3>
//                   <p className="text-gray-500 mb-6">Try adjusting your filters to see more results</p>
//                   <button
//                     onClick={clearFilters}
//                     className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               ) : (
//                 filteredProjects.map((project, index) => (
//                   <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.name}
//                         className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                       <div className="absolute bottom-0 left-0 p-6 text-white">
//                         <h3 className="text-2xl font-bold">{project.name}</h3>
//                         <p className="text-sm text-gray-300 flex items-center mt-1">
//                           <MapPin size={14} className="mr-1.5" />
//                           {project.location}
//                         </p>
//                       </div>
//                       <div className="absolute top-4 right-4 bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full">
//                         {project.status}
//                       </div>
//                       <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <ArrowUpRight size={20} className="text-black" />
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex justify-between items-center mb-4">
//                         <p className="text-sm text-gray-500">Built by:</p>
//                         <img src={project.builderLogo} alt={project.builder} className="h-10 w-auto filter grayscale" />
//                       </div>
//                       <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
//                         <div className="flex items-center gap-1.5">
//                           <Building2 size={16} className="text-gray-500" />
//                           <span className="font-medium">{project.propertyType}</span>
//                         </div>
//                         <div className="flex items-center gap-1.5">
//                           <SquareArrowOutUpRight size={16} className="text-gray-500" />
//                           <span className="font-medium">{project.areaRange}</span>
//                         </div>
//                       </div>
//                       {/* Added Price and Bedrooms info below area range, matching the original filter example */}
//                       <div className="flex items-center justify-between mt-4">
//                         <div className="text-lg font-bold text-green-600">{project.price}</div>
//                         {project.bedrooms !== "N/A" && (
//                             <div className="flex items-center text-sm text-gray-500">
//                                 <Home className="w-4 h-4 mr-1" />
//                                 <span>{project.bedrooms} BHK</span>
//                             </div>
//                         )}
//                       </div>
//                       <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </section>

//         {/* Builder Logos Section */}
//         <section id="builders" className="py-20 px-6">
//           <div className="container mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-4">Our Esteemed Builders</h2>
//             <p className="text-center text-gray-500 mb-12">Partnering with the best to build the future of Ahmedabad.</p>
//             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
//               {builderLogos.map((logo, index) => (
//                 <img key={index} src={logo} alt={`Builder logo ${index + 1}`} className="h-14 w-auto transition-opacity duration-300 filter  hover:grayscale-0" />
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Commercial



"use client";
import React, { useState, useMemo } from "react";
import {
  MapPin,
  Building2,
  SquareArrowOutUpRight,
  ArrowUpRight,
  Search,
  Filter,
  Home,
  Building,
  BedSingle,
  Bath,
  Ruler, // Added for potential future use or consistency
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const projectsData = [
  {
    id: "elysian-towers",
    name: "Elysian Towers",
    builder: "Prestige Group",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgG71a-0xes17v2rqjuWV5fsG4JgBiykGnw&s",
    location: "Vaishnodevi Circle, Ahmedabad",
    propertyType: "3 BHK",
    areaRange: "1800-2200 sq.ft",
    status: "New Launch",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    price: "₹80 Lakhs onwards",
    bedrooms: "3", // Added for filtering
    bathrooms: "3", // Added for detail page
    areaSqFt: "2000", // Added for detail page
    description:
      "Elysian Towers offer luxurious 3 BHK apartments designed for modern living. With spacious layouts, premium finishes, and breathtaking views, these homes provide an unparalleled living experience. Located in the serene Vaishnodevi Circle, it offers excellent connectivity and a peaceful environment.",
  },
  {
    id: "skyline-corporate",
    name: "Skyline Corporate",
    builder: "Goyal & Co.",
    builderLogo:
      "https://media.getrightproperty.com/builders/bengaluru/10/goyal-and-co-logo.webp?v=1734525598652",
    location: "Shilaj, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "500-5000 sq.ft",
    status: "Ready to Move",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    price: "₹1.5 Cr onwards",
    bedrooms: "N/A", // Added for filtering
    bathrooms: "N/A", // Added for detail page
    areaSqFt: "2500", // Added for detail page
    description:
      "Skyline Corporate provides premium commercial spaces ideal for businesses of all sizes. Featuring modern architecture, ample parking, and state-of-the-art facilities, it's the perfect location to establish or expand your enterprise. Situated in the bustling Shilaj area, it offers prime visibility and accessibility.",
  },
  {
    id: "the-greenfield-villas",
    name: "The Greenfield Villas",
    builder: "Adani Realty",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0iXSede8rDaQG8VqQoXfUuU92A8WXmaTfQ&s",
    location: "Gota, Ahmedabad",
    propertyType: "Villas",
    areaRange: "3500-5000 sq.yard",
    status: "New Launch",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    price: "₹2 Cr onwards",
    bedrooms: "4+", // Added for filtering
    bathrooms: "4+", // Added for detail page
    areaSqFt: "4000", // Added for detail page
    description:
      "Experience luxury living at The Greenfield Villas. These sprawling villas are designed with elegance and comfort in mind, offering private gardens, expansive living areas, and high-end amenities. Located in the rapidly developing Gota area, it's a sanctuary away from the city's hustle.",
  },
  {
    id: "orchid-plaza",
    name: "Orchid Plaza",
    builder: "Gala Group",
    builderLogo: "https://www.gala-group.com/wp-content/uploads/2024/01/gala-galagroup.webp",
    location: "Science City, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "1200-3000 sq.ft",
    status: "Ready to Move",
    image:
      "https://is1-2.housingcdn.com/4f2250e8/2c75469c9fcc0c9b325575de139d0ee9/v0/fs/lodha_hosa_road-hsr_layout_bangalore-bengaluru-lodha_group.png",
    price: "₹1 Cr onwards",
    bedrooms: "N/A", // Added for filtering
    bathrooms: "N/A", // Added for detail page
    areaSqFt: "1800", // Added for detail page
    description:
      "Orchid Plaza offers contemporary commercial spaces in the prime Science City area. With flexible layouts, robust infrastructure, and excellent connectivity, it's an ideal choice for offices, retail, and more. A vibrant business ecosystem awaits you.",
  },
  {
    id: "sapphire-residences",
    name: "Sapphire Residences",
    builder: "Bakeri Group",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZU5XmjWEMKFN7c_bz69_JRLtHBXhOHPQcQ&s",
    location: "Naroda, Ahmedabad",
    propertyType: "2 BHK",
    areaRange: "1100-1400 sq.ft",
    status: "Ready to Move",
    image:
      "https://imgcdn.houssed.com/Assets/Files/Projects/9797/Project%20Image/5bb474cda8b3f796a2130c7bceb5e02d.webp",
    price: "₹60 Lakhs onwards",
    bedrooms: "2", // Added for filtering
    bathrooms: "2", // Added for detail page
    areaSqFt: "1250", // Added for detail page
    description:
      "Sapphire Residences offers comfortable and affordable 2 BHK apartments. Designed for small families and individuals, these homes combine practicality with modern aesthetics. Located in Naroda, it provides easy access to essential amenities and transport links.",
  },
  {
    id: "infinity-business-hub",
    name: "Infinity Business Hub",
    builder: "Sun Builders",
    builderLogo: "https://lh3.googleusercontent.com/-OckhU5xMZ9g/VzNfvTWLYZI/AAAAAAAAAVI/fzka6gBnCpsJmbONZMH49kzGAjySFnwggCJkC/photo.jpg",
    location: "Prahlad Nagar, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "800-2500 sq.ft",
    status: "New Launch",
    image:
      "https://teja10.kuikr.com//r1/20190511/ak_1094_1664129496-1557546988_700x700.png",
    price: "₹90 Lakhs onwards",
    bedrooms: "N/A", // Added for filtering
    bathrooms: "N/A", // Added for detail page
    areaSqFt: "1500", // Added for detail page
    description:
      "Infinity Business Hub is a state-of-the-art commercial complex in Prahlad Nagar. It offers flexible office spaces with cutting-edge technology and a vibrant work environment. Perfect for startups and established businesses looking for a prestigious address.",
  },
  {
    id: "green-valley-apartments",
    name: "Green Valley Apartments",
    builder: "Prestige Group",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgG71a-0xes17v2rqjuWV5fsG4JgBiykGnw&s",
    location: "Gota, Ahmedabad",
    propertyType: "2 BHK",
    areaRange: "1000-1200 sq.ft",
    status: "Under Construction",
    image:
      "https://housing-images.n7net.in/012c1500/c738a5f3aeb1ca11bd491ba717ed2530/v0/medium.jpeg",
    price: "₹70 Lakhs onwards",
    bedrooms: "2",
    bathrooms: "2",
    areaSqFt: "1100",
    description:
      "Green Valley Apartments offer serene living in Gota, Ahmedabad. These 2 BHK units are designed with comfort and convenience in mind, featuring ample natural light and well-planned spaces. Enjoy a tranquil lifestyle with all urban amenities nearby.",
  },
  {
    id: "city-center-offices",
    name: "City Center Offices",
    builder: "Goyal & Co.",
    builderLogo:
      "https://media.getrightproperty.com/builders/bengaluru/10/goyal-and-co-logo.webp?v=1734525598652",
    location: "Central, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "700-1500 sq.ft",
    status: "Ready to Move",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRWKhS_vx_19moe2PzHUlITQ9l7o5lOHmSw&s",
    price: "₹1.2 Cr onwards",
    bedrooms: "N/A",
    bathrooms: "N/A",
    areaSqFt: "1000",
    description:
      "City Center Offices provide a dynamic environment for businesses in the heart of Ahmedabad. With modern infrastructure and flexible office layouts, these spaces are perfect for startups and established companies seeking a central and accessible location.",
  },
  {
    id: "palm-meadows",
    name: "Palm Meadows",
    builder: "Adani Realty",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0iXSede8rDaQG8VqQoXfUuU92A8WXmaTfQ&s",
    location: "South Bopal, Ahmedabad",
    propertyType: "Villas",
    areaRange: "3000-4500 sq.yard",
    status: "Ready to Move",
    image:
      "https://housing-images.n7net.in/01c16c28/6d68bb1da58d3b75d6e1faeee6aff402/v0/medium/2_bhk_apartment-for-sale-south_bopal-Ahmedabad-others.jpg",
    price: "₹3 Cr onwards",
    bedrooms: "4+",
    bathrooms: "4+",
    areaSqFt: "3800",
    description:
      "Palm Meadows offers exquisite villas in South Bopal, providing a luxurious and private living experience. These homes are designed with expansive layouts, premium amenities, and lush green surroundings, perfect for a high-end lifestyle.",
  },
  {
    id: "lakeview-residences",
    name: "Lakeview Residences",
    builder: "Bakeri Group",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZU5XmjWEMKFN7c_bz69_JRLtHBXhOHPQcQ&s",
    location: "Thaltej, Ahmedabad",
    propertyType: "3 BHK",
    areaRange: "1600-2000 sq.ft",
    status: "New Launch",
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/12/06/Project-Photo-1-Solo-Lake-View-Ahmedabad-5425187_410_1440_240_0.jpg",
    price: "₹95 Lakhs onwards",
    bedrooms: "3",
    bathrooms: "3",
    areaSqFt: "1800",
    description:
      "Lakeview Residences provides stunning 3 BHK apartments with picturesque lake views in Thaltej. These homes offer a tranquil living experience coupled with modern comforts and excellent connectivity to the city's key areas.",
  },
  {
    id: "harmony-homes",
    name: "Harmony Homes",
    builder: "Shapoorji Pallonji",
    builderLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsu8Sv4RwRAnlFjkguWidsUw4lgBMHddtdmQ&s",
    location: "Vastral, Ahmedabad",
    propertyType: "2 BHK",
    areaRange: "900-1100 sq.ft",
    status: "Under Construction",
    image:
      "https://housing-images.n7net.in/4f2250e8/8ef3fa6c579db72b7e11c9f8f915b721/v0/medium/shraddha_harmony-vastral-ahmedabad-shraddha_developers.jpeg",
    price: "₹55 Lakhs onwards",
    bedrooms: "2",
    bathrooms: "2",
    areaSqFt: "1000",
    description:
      "Harmony Homes in Vastral offers well-designed 2 BHK apartments, perfect for those seeking comfort and affordability. These homes are currently under construction, promising modern amenities and a thriving community environment.",
  },
  {
    id: "grandeur-commercial-hub",
    name: "Grandeur Commercial Hub",
    builder: "Sobha Developers",
    builderLogo:
      "https://www.big5global.com/wp-content/uploads/2023/10/GIA-VVIP-Partner-Sobha-Constructions.png",
    location: "SG Highway, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "1500-4000 sq.ft",
    status: "New Launch",
    image:
      "https://housing-images.n7net.in/4f2250e8/1913d0ed87c9007472e66b17a5dcedee/v0/medium/arise_ananta-gota-ahmedabad-arise_group.jpeg",
    price: "₹2.5 Cr onwards",
    bedrooms: "N/A",
    bathrooms: "N/A",
    areaSqFt: "2800",
    description:
      "Grandeur Commercial Hub on SG Highway offers expansive commercial spaces for large enterprises and businesses. With a prime location and state-of-the-art facilities, it's poised to become a landmark business destination in Ahmedabad.",
  },
];

const builderLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lodha---New-LOgo.png",
  "https://media.licdn.com/dms/image/v2/C4D0BAQFkYd49JE86Dg/company-logo_200_200/company-logo_200_200/0/1630538535381/dlf_logo?e=2147483647&v=beta&t=qCoIJDJk9yeGrjOAns8tjCgIHgJm2m80TMUP7jkoEmU",
  "https://www.livemint.com/lm-img/img/2024/11/28/original/Godrej_new_logo_1732796773986.jpeg",
  "https://bl-i.thgim.com/public/incoming/epo0je/article26643855.ece/alternates/LANDSCAPE_1200/oberoi-hotelspng",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziPf-BUgsQHa_0RkLFDlLfJLZcAhH7a3EIQ&s",
  "https://www.big5global.com/wp-content/uploads/2023/10/GIA-VVIP-Partner-Sobha-Constructions.png",
];

// Main Page Component
const Commercial = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bedrooms: "",
    status: "",
    builder: "",
    searchTerm: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      budget: "",
      bedrooms: "",
      status: "",
      builder: "",
      searchTerm: "",
    });
  };

  // Memoize unique locations and property types
  const uniqueLocations = useMemo(() => {
    const locations = new Set();
    projectsData.forEach((project) => locations.add(project.location));
    return Array.from(locations).sort();
  }, []);

  const uniquePropertyTypes = useMemo(() => {
    const types = new Set();
    // Add common categories first
    types.add("Residential");
    types.add("Commercial");
    types.add("Villas");
    types.add("Apartments");

    // Add specific BHK types from data
    projectsData.forEach((project) => {
      if (project.propertyType.includes("BHK")) {
        types.add(project.propertyType);
      } else {
        // Normalize commercial spaces for selection if they exist in data
        if (project.propertyType.toLowerCase().includes("commercial")) {
          types.add("Commercial Spaces");
        }
        if (project.propertyType.toLowerCase().includes("villa")) {
          types.add("Villas");
        }
      }
    });
    return Array.from(types).sort();
  }, []);

  const availableBuilders = useMemo(() => {
    const builders = new Set();
    projectsData.forEach((project) => builders.add(project.builder));
    return Array.from(builders).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        !filters.searchTerm ||
        project.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.builder.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesLocation =
        !filters.location ||
        project.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesType =
        !filters.propertyType ||
        (filters.propertyType.toLowerCase() === "residential" &&
          (project.propertyType.toLowerCase().includes("bhk") ||
            project.propertyType.toLowerCase().includes("apartment") ||
            project.propertyType.toLowerCase().includes("villa"))) ||
        (filters.propertyType.toLowerCase() === "commercial" &&
          project.propertyType.toLowerCase().includes("commercial")) ||
        (filters.propertyType.toLowerCase() === "villas" &&
          project.propertyType.toLowerCase().includes("villa")) ||
        (filters.propertyType.toLowerCase() === "apartments" &&
          project.propertyType.toLowerCase().includes("apartment")) ||
        project.propertyType.toLowerCase().includes(filters.propertyType.toLowerCase());

      const matchesStatus =
        !filters.status ||
        project.status.toLowerCase().includes(filters.status.toLowerCase());

      const matchesBuilder =
        !filters.builder ||
        project.builder.toLowerCase().includes(filters.builder.toLowerCase());

      const matchesBedrooms =
        !filters.bedrooms || project.bedrooms.includes(filters.bedrooms);

      const matchesBudget =
        !filters.budget ||
        (() => {
          // Extract numerical value from price string (e.g., "₹80 Lakhs onwards" -> 80, "₹1.5 Cr onwards" -> 150)
          let projectPriceNum;
          const priceString = project.price.toLowerCase();

          if (priceString.includes("lakhs")) {
            projectPriceNum = parseFloat(
              priceString.replace(/₹|,|lakhs onwards/g, "").trim()
            );
          } else if (priceString.includes("cr")) {
            projectPriceNum =
              parseFloat(priceString.replace(/₹|,|cr onwards/g, "").trim()) * 100; // Convert Crores to Lakhs
          } else {
            projectPriceNum = 0; // Default if format is unexpected
          }

          const filterBudget = filters.budget;

          if (filterBudget === "50-75") {
            return projectPriceNum >= 50 && projectPriceNum <= 75;
          } else if (filterBudget === "75-100") {
            return projectPriceNum > 75 && projectPriceNum <= 100;
          } else if (filterBudget === "100+") {
            return projectPriceNum > 100;
          }
          return false;
        })();

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesStatus &&
        matchesBuilder &&
        matchesBedrooms &&
        matchesBudget
      );
    });
  }, [filters]);

  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Find Your Next
              <br />
              Premium Property
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover exclusive commercial and residential projects from the most reputed
              builders in Ahmedabad.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              Explore Projects
            </a>
          </div>
        </section>

        {/* Projects & Filters Section */}
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-center text-gray-500 mb-12">
              Curated properties that define luxury and functionality.
            </p>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50 border-b">
              <div className="max-w-7xl mx-auto px-6">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by project name or builder..."
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-lg"
                  />
                </div>

                {/* Filter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map((loc) => (
                      <option key={loc} value={loc.toLowerCase()}>
                        {loc}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Property Type</option>
                    {uniquePropertyTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filters.budget}
                    onChange={(e) => handleFilterChange("budget", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Budget Range</option>
                    <option value="50-75">₹50-75 Lakhs</option>
                    <option value="75-100">₹75L-1Cr</option>
                    <option value="100+">₹1Cr+</option>
                  </select>

                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4+">4 BHK+</option>
                    <option value="N/A">N/A (Commercial)</option>
                  </select>

                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Project Status</option>
                    <option value="under construction">Under Construction</option>
                    <option value="ready to move">Ready to Move</option>
                    <option value="new launch">New Launch</option>
                  </select>

                  <select
                    value={filters.builder}
                    onChange={(e) => handleFilterChange("builder", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">All Builders</option>
                    {availableBuilders.map((builderName) => (
                      <option key={builderName} value={builderName.toLowerCase()}>
                        {builderName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Filter className="w-5 h-5" />
                    <span>{filteredProjects.length} properties found</span>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </section>
            {/* End of Filter Section */}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer mt-12">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 col-span-full">
                  <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">
                    No Properties Found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters to see more results
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <div
                    key={project.id} // Use project.id as key
                    className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <p className="text-sm text-gray-300 flex items-center mt-1">
                          <MapPin size={14} className="mr-1.5" />
                          {project.location}
                        </p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {project.status}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={20} className="text-black" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-500">Built by:</p>
                        <img
                          src={project.builderLogo}
                          alt={project.builder}
                          className="h-10 w-auto filter grayscale"
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={16} className="text-gray-500" />
                          <span className="font-medium">{project.propertyType}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <SquareArrowOutUpRight size={16} className="text-gray-500" />
                          <span className="font-medium">{project.areaRange}</span>
                        </div>
                      </div>
                      {/* Added Price and Bedrooms info below area range, matching the original filter example */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-lg font-bold text-green-600">
                          {project.price}
                        </div>
                        {project.bedrooms !== "N/A" && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Home className="w-4 h-4 mr-1" />
                            <span>{project.bedrooms} BHK</span>
                          </div>
                        )}
                      </div>
                      <Link
                        to={`/Commercial/details/${project.id}`} // Link to the new details route
                        className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4 block text-center" // block for full width
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Builder Logos Section */}
        <section id="builders" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Our Esteemed Builders</h2>
            <p className="text-center text-gray-500 mb-12">
              Partnering with the best to build the future of Ahmedabad.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {builderLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Builder logo ${index + 1}`}
                  className="h-14 w-auto transition-opacity duration-300 filter  hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Commercial;