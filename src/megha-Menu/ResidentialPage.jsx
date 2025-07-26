import React, { useState, useEffect } from "react";
import {
  FaBuilding,
  FaDraftingCompass,
  FaCouch,
  FaCalculator,
  FaBalanceScale,
  FaComments,
  FaVideo,
  FaMapMarkedAlt,
  FaMapSigns,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const ResidentialPage = () => {
  const allProjects = [
    {
      id: 1,
      name: "Elegant Heights",
      location: "Ahmedabad",
      type: "1BHK",
      status: "Available",
      price: "₹25 Lakh",
      budget: "20-30 Lakh",
      bedrooms: "1",
      projectStatus: "Ready to Move",
      builder: "Yodezeen Builders",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/his.png",
      description:
        "Compact 1BHK homes with modern interiors and a calm environment. Features include a community hall, children's play area, and 24/7 security. Located close to schools, hospitals, and major IT hubs, ensuring a convenient lifestyle. Excellent connectivity to public transport.",
      area: "1800-2200 sq.ft",
      amenities: ["Gym", "Parking", "Security", "Play Area"],
      rera: "PRJ2023000123",
      possession: "Immediate",
    },
    {
      id: 2,
      name: "Urban Residency",
      location: "Ahmedabad",
      type: "2BHK",
      status: "Available",
      price: "₹45 Lakh",
      budget: "40-50 Lakh",
      bedrooms: "2",
      projectStatus: "Under Construction",
      builder: "Design Wanted Group",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      builderLogo:
        "https://yodezeen.com/wp-content/uploads/2018/03/designwanted.png",
      description:
        "Spacious 2BHK apartments in the heart of the city with top-class amenities like a gym, swimming pool, and dedicated parking. Expected completion in 18 months. Prime location with excellent schools and shopping centers nearby. Invest in a rapidly developing area.",
      area: "2000-3000 sq.ft",
      amenities: ["Swimming Pool", "Gym", "Clubhouse", "Lift", "Power Backup"],
      rera: "PRJ2024000456",
      possession: "Dec 2025",
    },
    {
      id: 3,
      name: "Skyline Villas",
      location: "Ahmedabad",
      type: "Villas",
      status: "Available",
      price: "₹1.2 Cr",
      budget: "1 Cr+",
      bedrooms: "4+",
      projectStatus: "New Launch",
      builder: "Adani Realty",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/1.png",
      description:
        "Luxury villas with private gardens, swimming pool and club access. These bespoke residences offer unparalleled comfort and elegance. Customize your interiors with premium finishes. Located in an exclusive gated community with strict security.",
      area: "3500-5000 sq.ft",
      amenities: [
        "Private Garden",
        "Swimming Pool",
        "Clubhouse",
        "Security",
        "Sports Facilities",
      ],
      rera: "PRJ2025000789",
      possession: "Aug 2026",
    },
    {
      id: 4,
      name: "City View Apartments",
      location: "Ahmedabad",
      type: "3BHK",
      status: "Available",
      price: "₹65 Lakh",
      budget: "60-70 Lakh",
      bedrooms: "3",
      projectStatus: "Ready to Move",
      builder: "Shapoorji Pallonji",
      image:
        "https://www.propertypanther.in/img/property_galary/f7b9fccb638a69b7cfff39ebe992ebaf.webp", // Added image
      builderLogo:
        "https://yodezeen.com/wp-content/uploads/2018/03/id-interior.png",
      description:
        "Modern 3BHK apartments with skyline views and premium interiors. Enjoy panoramic cityscapes from your balcony. Prime location with excellent connectivity to business districts and entertainment zones. High-quality construction and fittings.",
      area: "2500-4000 sq.ft",
      amenities: [
        "Modular Kitchen",
        "Balcony",
        "Gym",
        "Intercom",
        "24/7 Water Supply",
      ],
      rera: "PRJ2022001011",
      possession: "Immediate",
    },
    {
      id: 5,
      name: "Green Oasis Homes",
      location: "Gandhinagar",
      type: "2BHK",
      status: "Available",
      price: "₹38 Lakh",
      budget: "30-40 Lakh",
      bedrooms: "2",
      projectStatus: "Under Construction",
      builder: "EcoBuild Developers",
      image:
        "https://amazingarchitecture.com/storage/files/1742/architecture-projects/the-grid-architects/urban-oasis/02-urban_oasis%20_gated_community_living_housing_the_grid_architects.jpg",
      builderLogo:
        "https://yodezeen.com/wp-content/uploads/2018/03/%D0%BA%D1%83%D1%85%D0%BD%D0%B8.png", // Replaced placeholder
      description:
        "Eco-friendly 2BHK homes in a serene environment, focusing on sustainable living. Rainwater harvesting and solar panels installed. Close to nature trails and green spaces, offering a peaceful lifestyle. Community farming options available.",
      area: "1900-2400 sq.ft",
      amenities: [
        "Rainwater Harvesting",
        "Solar Power",
        "Green Spaces",
        "Cycling Track",
      ],
      rera: "PRJ2024001213",
      possession: "Sep 2025",
    },
    {
      id: 6,
      name: "Heritage Grande",
      location: "Vadodara",
      type: "3BHK",
      status: "Available",
      price: "₹72 Lakh",
      budget: "70-80 Lakh",
      bedrooms: "3",
      projectStatus: "Ready to Move",
      builder: "Royal Estates",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/int.png", // Replaced placeholder
      description:
        "Luxurious 3BHK apartments blending traditional architecture with modern comforts. Grand entrance lobby and exclusive residents' lounge. Located in a historic part of Vadodara, close to cultural landmarks and bustling markets.",
      area: "2800-4200 sq.ft",
      amenities: [
        "Grand Lobby",
        "Residents Lounge",
        "Heritage Design",
        "Dedicated Concierge",
      ],
      rera: "PRJ2022001415",
      possession: "Immediate",
    },
    {
      id: 7,
      name: "Tech Park Residences",
      location: "Ahmedabad",
      type: "1BHK",
      status: "Available",
      price: "₹28 Lakh",
      budget: "20-30 Lakh",
      bedrooms: "1",
      projectStatus: "New Launch",
      builder: "Innovate Spaces",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqkRW-gQ-pXQZcG_JTNSrOeAUT2lCK62_wA&s",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/dwell.png", // Replaced placeholder
      description:
        "Compact yet stylish 1BHK units ideal for young professionals, situated near major IT hubs. Smart home features included. Pre-booking offers available for early birds. High rental yield potential due to proximity to corporate offices.",
      area: "1700-2100 sq.ft",
      amenities: [
        "Smart Home",
        "Co-working Space",
        "High-speed Internet",
        "Cafeteria",
      ],
      rera: "PRJ2025001617",
      possession: "Mar 2027",
    },
    {
      id: 8,
      name: "Serene Lakefront Villas",
      location: "Surat",
      type: "Villas",
      status: "Available",
      price: "₹1.5 Cr",
      budget: "1 Cr+",
      bedrooms: "4+",
      projectStatus: "Ready to Move",
      builder: "Waterfront Properties",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/622513570.jpg?k=23cd4fb9df047d569c15fba3b2a164be8ee166d585559d914861a0cafdb6c2cc&o=&hp=1",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/5-1.png", // Replaced placeholder
      description:
        "Exclusive lakefront villas offering breathtaking views and tranquil living. Private jetties and lush landscaping. Limited units available, ensuring privacy and exclusivity. Perfect for those seeking a luxurious retreat near the water.",
      area: "4000-6000 sq.ft",
      amenities: ["Lake View", "Private Jetty", "Landscaped Gardens", "Gazebo"],
      rera: "PRJ2023001819",
      possession: "Immediate",
    },
    {
      id: 9,
      name: "Capital Towers",
      location: "Gandhinagar",
      type: "3BHK",
      status: "Available",
      price: "₹85 Lakh",
      budget: "80-90 Lakh",
      bedrooms: "3",
      projectStatus: "Ready to Move",
      builder: "Elite Builders",
      image:
        "https://sahjanandgroup.in/wp-content/uploads/2021/10/cam_16_view_night_FF.jpg",
      builderLogo:
        "https://www.elitebuilders.co.uk/wp-content/uploads/2020/06/elite-builders-logo.png", // Replaced placeholder
      description:
        "Premium 3BHK apartments with state-of-the-art facilities in Gandhinagar's central business district. Ideal for families and professionals. High-rise living with stunning city views.",
      area: "2800-4500 sq.ft",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Concierge Service",
        "High-Speed Elevators",
      ],
      rera: "PRJ2021002021",
      possession: "Immediate",
    },
    {
      id: 10,
      name: "Riviera Apartments",
      location: "Surat",
      type: "2BHK",
      status: "Available",
      price: "₹42 Lakh",
      budget: "40-50 Lakh",
      bedrooms: "2",
      projectStatus: "Under Construction",
      builder: "Coastal Homes",
      image:
        "https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/zbvuga.gif",
      builderLogo:
        "https://yodezeen.com/wp-content/uploads/2018/03/contemporist-1.png", // Replaced placeholder
      description:
        "Charming 2BHK apartments near the coast in Surat, offering a relaxed lifestyle. Excellent for sea-lovers and retirees. Close to beaches and promenades.",
      area: "1950-2500 sq.ft",
      amenities: ["Beach Access", "Jogging Track", "Clubhouse", "Yoga Deck"],
      rera: "PRJ2024002223",
      possession: "Apr 2026",
    },
    {
      id: 11,
      name: "Global Greens",
      location: "Ahmedabad",
      type: "4BHK",
      status: "Available",
      price: "₹95 Lakh",
      budget: "90 Lakh-1 Cr",
      bedrooms: "4",
      projectStatus: "Ready to Move",
      builder: "Green Earth Developers",
      image:
        "https://is1-3.housingcdn.com/4f2250e8/1cd12487527408ee03398c8c99f8f5e0/v0/fs/swara_skygreen-naranpura_1-ahmedabad-swara_group.jpeg",
      builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/2.png",
      description:
        "Spacious 4BHK homes designed for large families, with ample green spaces and recreational facilities. Located in a tranquil yet well-connected area of Ahmedabad.",
      area: "3500-5000 sq.ft",
      amenities: ["Large Gardens", "Kids Pool", "Sports Court", "Party Hall"],
      rera: "PRJ2022002425",
      possession: "Immediate",
    },
    {
      id: 12,
      name: "Phoenix Towers",
      location: "Vadodara",
      type: "2BHK",
      status: "Available",
      price: "₹50 Lakh",
      budget: "40-50 Lakh",
      bedrooms: "2",
      projectStatus: "New Launch",
      builder: "Urban Phoenix",
      image:
        "https://dandc.in/wp-content/uploads/2021/05/Image-for-phoenix-page-under-banner.jpg",
      builderLogo:
        "https://yodezeen.com/wp-content/uploads/2018/03/%D0%BA%D1%83%D1%85%D0%BD%D0%B8.png",
      description:
        "Modern 2BHK units with state-of-the-art smart home features, perfect for contemporary living. Early booking discounts available. Excellent investment opportunity.",
      area: "2100-2800 sq.ft",
      amenities: [
        "Smart Home",
        "High-Tech Security",
        "Rooftop Lounge",
        "EV Charging",
      ],
      rera: "PRJ2025002627",
      possession: "Oct 2027",
    },
  ];

  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    budgetRange: "",
    bedrooms: "",
    projectStatus: "",
    builder: "",
    searchTerm: "", // New state for search input
  });
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    let result = allProjects;

    if (filters.location) {
      result = result.filter((p) => p.location === filters.location);
    }
    if (filters.propertyType) {
      result = result.filter((p) => p.type === filters.propertyType);
    }
    if (filters.budgetRange) {
      result = result.filter((p) => p.budget === filters.budgetRange);
    }
    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms === filters.bedrooms);
    }
    if (filters.projectStatus) {
      result = result.filter((p) => p.projectStatus === filters.projectStatus);
    }
    if (filters.builder) {
      result = result.filter((p) => p.builder === filters.builder);
    }
    if (filters.searchTerm) {
      const lowerCaseSearchTerm = filters.searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          p.builder.toLowerCase().includes(lowerCaseSearchTerm) ||
          p.location.toLowerCase().includes(lowerCaseSearchTerm) ||
          p.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    setFilteredProjects(result);
  }, [filters]);

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleClearFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      budgetRange: "",
      bedrooms: "",
      projectStatus: "",
      builder: "",
      searchTerm: "",
    });
  };

  // Function to scroll to the projects grid section
  const scrollToProjects = () => {
    document.getElementById("projects-grid-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen relative">
      {/* HERO */}
      {/* Added 'group' class to the section to enable group-hover utility */}
      <section className="group relative h-[700px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Residential"
          // Apply grayscale to hero image by default, and remove on group hover
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Black overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
            Find Your Dream Home
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore residential projects with world‑class amenities and flexible
            plans.
          </p>
          {/* Explore Plots Button */}
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg 
            hover:bg-white hover:text-black 
            transition-colors duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
          >
            Explore Projects
          </button>
        </div>
      </section>

      {/* PROJECTS GRID - Moved here */}
      <section
        id="projects-grid-section"
        className="relative z-20 max-w-7xl mx-auto py-12 px-4 md:px-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Available Projects
        </h2>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 text-xl font-medium">
            No projects found matching your criteria. Please adjust your
            filters.
          </p>
        )}
        {/* FILTER BAR - Moved below the heading */}
        <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 mb-8">
          {" "}
          {/* Added mb-8 for spacing */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by project name or builder..."
              className="flex-1 min-w-[250px] p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* All Locations */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="">All Locations</option>
              {[...new Set(allProjects.map((p) => p.location))].map(
                (location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>

            {/* Property Type */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.propertyType}
              onChange={(e) =>
                handleFilterChange("propertyType", e.target.value)
              }
            >
              <option value="">Property Type</option>
              {[...new Set(allProjects.map((p) => p.type))].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Budget Range */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.budgetRange}
              onChange={(e) =>
                handleFilterChange("budgetRange", e.target.value)
              }
            >
              <option value="">Budget Range</option>
              {[...new Set(allProjects.map((p) => p.budget))]
                .sort()
                .map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
            </select>

            {/* Bedrooms */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
            >
              <option value="">Bedrooms</option>
              {[...new Set(allProjects.map((p) => p.bedrooms))]
                .sort()
                .map((bedrooms) => (
                  <option key={bedrooms} value={bedrooms}>
                    {bedrooms}
                  </option>
                ))}
            </select>

            {/* Project Status */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.projectStatus}
              onChange={(e) =>
                handleFilterChange("projectStatus", e.target.value)
              }
            >
              <option value="">Project Status</option>
              {[...new Set(allProjects.map((p) => p.projectStatus))].map(
                (status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                )
              )}
            </select>

            {/* All Builders */}
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={filters.builder}
              onChange={(e) => handleFilterChange("builder", e.target.value)}
            >
              <option value="">All Builders</option>
              {[...new Set(allProjects.map((p) => p.builder))].map(
                (builder) => (
                  <option key={builder} value={builder}>
                    {builder}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              <span className="font-bold">{filteredProjects.length}</span>{" "}
              properties found
            </p>
            <button
              onClick={handleClearFilters}
              className="text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {filteredProjects.map((proj) => (
  <div
    key={proj.id}
    className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
  >
    <div className="relative">
      <img
        src={proj.image}
        alt={proj.name}
        className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <span className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full shadow-md bg-white text-black">
        {proj.projectStatus}
      </span>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-lg font-bold mb-1">{proj.name}</h3>
      <p className="text-sm text-gray-500 mb-3"> {proj.location}</p>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400">Built by:</p>
        <div className="h-6">
          <img
            src={proj.builderLogo}
            alt="Builder Logo"
            className="h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-auto border-t border-gray-100 pt-3 flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          {/* <span className="text-lg">🏠</span> */}
          <span className="font-medium">{proj.type}</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <span className="text-lg">📐</span> */}
          <span className="font-medium">{proj.area}</span>
        </div>
      </div>

      {/* 👇 View Details Link */}
      <Link
        to={`/Residential/details/${proj.id}`}
        className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4 block text-center"
      >
        View Details
      </Link>
    </div>
  </div>
))}

        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;
