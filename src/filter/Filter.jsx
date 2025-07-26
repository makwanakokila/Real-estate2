import React, { useState, useMemo } from "react";
import { FiMapPin, FiSearch, FiCalendar, FiRepeat } from "react-icons/fi";
import { FaBed, FaBuilding, FaRupeeSign } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";

const allProperties = [
  {
    id: 1,
    name: "Shanti Greens Villa",
    price: 25000000,
    type: "Villa",
    furnishing: "Fully Furnished",
    location: "Bopal",
    status: "New",
    postedBy: "Builder",
    superArea: 3200,
    carpetArea: 2800,
    floors: "G+2",
    timeline: "Within 3 months",
    amenities: ["Parking", "Garden", "Swimming Pool"],
    imageUrl:
      "https://lbcdn.airpaz.com/hotelimages/3223439/uma-shanti-villa-bf8a426e54a6796a535bf879f56f79e5.jpg",
  },
  {
    id: 2,
    name: "Divine Heights 3BHK",
    price: 7500000,
    type: "3 BHK",
    furnishing: "Semi Furnished",
    location: "Chandkheda",
    status: "Resale",
    postedBy: "Owner",
    superArea: 1800,
    carpetArea: 1500,
    floors: "G+4+",
    timeline: "Ready to Move",
    amenities: ["Lift", "Parking"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiw7Dl6HqvFoV3lsRX6sgA2S33jOA0lqzUA&s",
  },
  {
    id: 3,
    name: "Naroda Modern Flat",
    price: 4500000,
    type: "2 BHK",
    furnishing: "Unfurnished",
    location: "New Naroda",
    status: "New",
    postedBy: "Agent",
    superArea: 1200,
    carpetArea: 950,
    floors: "G+3",
    timeline: "Under Construction",
    amenities: ["Parking"],
    imageUrl: "https://rei.wlimg.com/prop_images/173469/1054559_3.jpg",
  },
  {
    id: 4,
    name: "Satellite Prime Home",
    price: 35000000,
    type: "4+ BHK",
    furnishing: "Fully Furnished",
    location: "Satellite",
    status: "Resale",
    postedBy: "Owner",
    superArea: 4000,
    carpetArea: 3500,
    floors: "G+1",
    timeline: "Ready to Move",
    amenities: ["Parking", "Garden"],
    imageUrl:
      "https://files.propertywala.com/photos/9b/J721190032.main-entrance.1112987l.jpg",
  },
  {
    id: 5,
    name: "Thaltej Duplex Dream",
    price: 18000000,
    type: "Duplex",
    furnishing: "Semi Furnished",
    location: "Thaltej",
    status: "New",
    postedBy: "Builder",
    superArea: 2500,
    carpetArea: 2200,
    floors: "G+2",
    timeline: "Within 3 months",
    amenities: ["Lift", "Parking"],
    imageUrl:
      "https://www.onestopproperty.in/upload/admin/advertisement/41749727244.jpeg",
  },
  {
    id: 6,
    name: "Navrangpura 1BHK",
    price: 3000000,
    type: "1 BHK",
    furnishing: "Unfurnished",
    location: "Navrangpura",
    status: "Resale",
    postedBy: "Agent",
    superArea: 800,
    carpetArea: 600,
    floors: "G+4+",
    timeline: "Ready to Move",
    amenities: ["Lift"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Ur7-NBLbfqhdjz6kvut5qILNrkZSU1ERw&s",
  },
  {
    id: 7,
    name: "Bopal Lake View 3BHK",
    price: 9500000,
    type: "3 BHK",
    furnishing: "Fully Furnished",
    location: "Bopal",
    status: "Resale",
    postedBy: "Owner",
    superArea: 1900,
    carpetArea: 1600,
    floors: "G+3",
    timeline: "Ready to Move",
    amenities: ["Parking", "Garden"],
    imageUrl:
      "https://static.squareyards.com/resources/images/ahmedabad/tn-projectflagship/tn-shaligram-garden-homes-flagshipimg1.jpg?aio=w-345;h-182;crop;",
  },
  {
    id: 8,
    name: "Chandkheda Garden Villa",
    price: 15000000,
    type: "Villa",
    furnishing: "Unfurnished",
    location: "Chandkheda",
    status: "New",
    postedBy: "Builder",
    superArea: 2200,
    carpetArea: 1900,
    floors: "G+1",
    timeline: "Just Started",
    amenities: ["Parking", "Garden"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAHPzo8DpQtKIzEPId8FMzmGdE-zbnu_QZQ&s",
  },
  {
    id: 9,
    name: "SG Highway 4+ BHK Penthouse",
    price: 40000000,
    type: "4+ BHK",
    furnishing: "Semi Furnished",
    location: "Satellite",
    status: "New",
    postedBy: "Builder",
    superArea: 4500,
    carpetArea: 4000,
    floors: "G+4+",
    timeline: "Under Construction",
    amenities: ["Lift", "Parking", "Swimming Pool"],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 10,
    name: "Cozy Studio Thaltej",
    price: 5000000,
    type: "1 BHK",
    furnishing: "Fully Furnished",
    location: "Thaltej",
    status: "Resale",
    postedBy: "Owner",
    superArea: 900,
    carpetArea: 700,
    floors: "G+2",
    timeline: "Ready to Move",
    amenities: ["Parking"],
    imageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/max600/529255117.jpg?k=778611b102d0872cc5f5b7ea9554a92efad18002af1b8943cca1dd48d54dd369&o=",
  },
  {
    id: 11,
    name: "New Naroda Low Rise",
    price: 5500000,
    type: "2 BHK",
    furnishing: "Semi Furnished",
    location: "New Naroda",
    status: "Resale",
    postedBy: "Owner",
    superArea: 1300,
    carpetArea: 1100,
    floors: "G+1",
    timeline: "Ready to Move",
    amenities: ["Garden", "Parking"],
    imageUrl:
      "https://is1-2.housingcdn.com/4f2250e8/3e2a6116293dc0d3617879b932d2819c/v5/fs/teraiya_shantikunj-gidc_naroda-ahmedabad-teraiya_group.jpg",
  },
  {
    id: 12,
    name: "Navrangpura Heritage Duplex",
    price: 22000000,
    type: "Duplex",
    furnishing: "Fully Furnished",
    location: "Navrangpura",
    status: "Resale",
    postedBy: "Agent",
    superArea: 2800,
    carpetArea: 2500,
    floors: "G+1",
    timeline: "Ready to Move",
    amenities: ["Parking", "Garden"],
    imageUrl: "https://onlynew.in/assets/images/2025-04-18-11-25-01-hari-.jpg",
  },
  {
    id: 13,
    name: "High Rise 2BHK",
    price: 8800000,
    type: "2 BHK",
    furnishing: "Fully Furnished",
    location: "Satellite",
    status: "New",
    postedBy: "Builder",
    superArea: 1500,
    carpetArea: 1200,
    floors: "G+4+",
    timeline: "Under Construction",
    amenities: ["Lift", "Garden", "Swimming Pool"],
    imageUrl: "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
  },
  {
    id: 14,
    name: "Bopal Budget 1BHK",
    price: 3200000,
    type: "1 BHK",
    furnishing: "Unfurnished",
    location: "Bopal",
    status: "New",
    postedBy: "Builder",
    superArea: 750,
    carpetArea: 650,
    floors: "G+3",
    timeline: "Launching Soon",
    amenities: ["Lift", "Parking"],
    imageUrl:
      "https://cloudimage.homeonline.com/325x216/public/uploads/property/images/lightbox/921195a842155ae10a_blob.jpeg",
  },
  {
    id: 15,
    name: "Thaltej Serene Bungalow",
    price: 45000000,
    type: "Bungalow",
    furnishing: "Semi Furnished",
    location: "Thaltej",
    status: "Resale",
    postedBy: "Owner",
    superArea: 5000,
    carpetArea: 4200,
    floors: "G+2",
    timeline: "Ready to Move",
    amenities: ["Garden", "Parking", "Swimming Pool"],
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
  },
];

// Inside your RealEstatePage component file

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="relative">
      {/* --- THIS IS THE CORRECTED LINK --- */}
      <Link to={`/property/${property.id}`}>
        <img
          className="w-full h-56 object-cover cursor-pointer"
          src={property.imageUrl}
          alt={`View of ${property.name}`}
        />
      </Link>
      <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {property.status}
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm font-semibold text-gray-600 tracking-wider">
        {property.type} • {property.postedBy}
      </p>
      <h3 className="text-xl font-bold text-gray-900 mt-1">{property.name}</h3>
      <p className="text-gray-700 mt-2">{property.location}, Ahmedabad</p>
      <p className="text-2xl font-black text-black mt-4">
        ₹{property.price.toLocaleString()}
      </p>
    </div>
  </div>
);

const FilterPanel = ({
  filters,
  onFilterChange,
  onNestedFilterChange,
  onMultiSelectChange,
  onResetFilters,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg w-full border border-gray-200">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
      <button
        onClick={onResetFilters}
        className="text-sm text-gray-600 hover:text-black flex items-center transition-colors"
      >
        <FiRepeat className="mr-1" /> Reset
      </button>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FiMapPin className="mr-2" /> Location
      </label>
      <div className="relative">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Location..."
          value={filters.location}
          onChange={(e) => onFilterChange("location", e.target.value)}
          className="w-full pl-10 p-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FaRupeeSign className="mr-2" /> Price Range (in Lakhs)
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min"
          value={filters.price.min}
          onChange={(e) => onNestedFilterChange("price", "min", e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          placeholder="Max"
          value={filters.price.max}
          onChange={(e) => onNestedFilterChange("price", "max", e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FaBuilding className="mr-2" /> Super Area (sq.ft)
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min"
          value={filters.superArea.min}
          onChange={(e) =>
            onNestedFilterChange("superArea", "min", e.target.value)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          placeholder="Max"
          value={filters.superArea.max}
          onChange={(e) =>
            onNestedFilterChange("superArea", "max", e.target.value)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FaBuilding className="mr-2" /> Carpet Area (sq.ft)
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min"
          value={filters.carpetArea.min}
          onChange={(e) =>
            onNestedFilterChange("carpetArea", "min", e.target.value)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          placeholder="Max"
          value={filters.carpetArea.max}
          onChange={(e) =>
            onNestedFilterChange("carpetArea", "max", e.target.value)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FaBed className="mr-2" /> Property Type
      </label>
      <div className="grid grid-cols-3 gap-2">
        {[
          "1 BHK",
          "2 BHK",
          "3 BHK",
          "4+ BHK",
          "Villa",
          "Bungalow",
          "Duplex",
        ].map((type) => (
          <button
            key={type}
            onClick={() => onMultiSelectChange("propertyType", type)}
            className={`p-2 text-xs text-center rounded-lg border-2 transition-colors ${
              filters.propertyType.includes(type)
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <BsBuilding className="mr-2" /> Floors Required
      </label>
      <select
        value={filters.floors}
        onChange={(e) => onFilterChange("floors", e.target.value)}
        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="All">All Floors</option>
        <option>G+1</option>
        <option>G+2</option>
        <option>G+3</option>
        <option>G+4+</option>
      </select>
    </div>

    <div className="mb-8">
      <label className="flex items-center font-semibold text-gray-800 mb-2">
        <FiCalendar className="mr-2" /> Project Timeline
      </label>
      <select
        value={filters.timeline}
        onChange={(e) => onFilterChange("timeline", e.target.value)}
        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="All">Any Timeline</option>
        <option>Ready to Move</option>
        <option>Just Started</option>
        <option>Under Construction</option>
        <option>Launching Soon</option>
      </select>
    </div>

    <div className="relative mt-4">
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        Suggestion
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Any suggestion"
          className="w-full pl-3 border-0 border-b border-gray-400 focus:border-black focus:outline-none py-2 placeholder:text-gray-600 bg-transparent"
        />
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function RealEstatePage() {
  const initialFilters = {
    propertyType: [],
    superArea: { min: "", max: "" },
    carpetArea: { min: "", max: "" },
    price: { min: "", max: "" },
    location: "",
    furnishing: [],
    status: "All",
    postedBy: [],
    floors: "All",
    timeline: "All",
    amenities: [],
  };

  const [filters, setFilters] = useState(initialFilters);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProperties = useMemo(() => {
    return allProperties.filter((p) => {
      const {
        propertyType,
        superArea,
        carpetArea,
        price,
        location,
        furnishing,
        status,
        postedBy,
        floors,
        timeline,
        amenities,
      } = filters;

      if (
        location &&
        !p.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;
      if (propertyType.length > 0 && !propertyType.includes(p.type))
        return false;
      if (furnishing.length > 0 && !furnishing.includes(p.furnishing))
        return false;
      if (postedBy.length > 0 && !postedBy.includes(p.postedBy)) return false;
      if (status !== "All" && p.status !== status) return false;
      if (floors !== "All" && p.floors !== floors) return false;
      if (timeline !== "All" && p.timeline !== timeline) return false;

      const minPrice = price.min ? parseFloat(price.min) * 100000 : 0;
      const maxPrice = price.max ? parseFloat(price.max) * 100000 : Infinity;
      if (p.price < minPrice || p.price > maxPrice) return false;

      const minSuperArea = superArea.min ? parseFloat(superArea.min) : 0;
      const maxSuperArea = superArea.max ? parseFloat(superArea.max) : Infinity;
      if (p.superArea < minSuperArea || p.superArea > maxSuperArea)
        return false;

      const minCarpetArea = carpetArea.min ? parseFloat(carpetArea.min) : 0;
      const maxCarpetArea = carpetArea.max
        ? parseFloat(carpetArea.max)
        : Infinity;
      if (p.carpetArea < minCarpetArea || p.carpetArea > maxCarpetArea)
        return false;

      if (
        amenities.length > 0 &&
        !amenities.every((amenity) => p.amenities.includes(amenity))
      )
        return false;

      return true;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleNestedFilterChange = (key, nestedKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const handleMultiSelectChange = (key, value) => {
    setFilters((prev) => {
      const newSet = new Set(prev[key]);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return { ...prev, [key]: Array.from(newSet) };
    });
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
    
      <main className="container mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-1/3 xl:w-1/4">
            <div className="sticky top-24">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onNestedFilterChange={handleNestedFilterChange}
                onMultiSelectChange={handleMultiSelectChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          </aside>

          {isFilterVisible && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-40 lg:hidden"
              onClick={() => setIsFilterVisible(false)}
            >
              <div
                className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl z-50 p-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setIsFilterVisible(false)}
                    className="text-3xl text-gray-600 hover:text-black"
                  >
                    &times;
                  </button>
                </div>
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onNestedFilterChange={handleNestedFilterChange}
                  onMultiSelectChange={handleMultiSelectChange}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </div>
          )}

          <section className="w-full lg:w-2/3 xl:w-3/4 mt-16">
            <div className="flex justify-between items-baseline mb-8">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Properties in Ahmedabad
              </h1>
              <p className="font-semibold text-gray-700">
                {filteredProperties.length} results found
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  No Properties Found
                </h2>
                <p className="text-gray-600 mt-2">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
