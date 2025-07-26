


// src/PropertyDetails.js
"use client";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  BedSingle,
  Bath,
  Ruler,
  CheckCircle,
  ChevronDown,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
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
    bedrooms: "3",
    bathrooms: "3",
    areaSqFt: "2000",
    description:
      "Elysian Towers offer luxurious 3 BHK apartments designed for modern living. With spacious layouts, premium finishes, and breathtaking views, these homes provide an unparalleled living experience. Located in the serene Vaishnodevi Circle, it offers excellent connectivity and a peaceful environment.",
    planFeatures: [
      "Spacious Living Room",
      "Modern Kitchen",
      "Master Bedroom with Attached Bath",
      "Balcony",
      "Parking Space",
    ],
    availablePlans: [
      {
        name: "3 BHK Deluxe",
        area: "1,650 sq.ft",
        bedrooms: "3 BHK",
        price: "₹1.2 Crores",
        image:
          "https://orchardamritaya.oswalgroup.net/blog/wp-content/uploads/2023/12/An-Ideal-3-bhk-luxury-flats-in-kolkata-for-your-family-1.png",
      },
      {
        name: "4 BHK Luxury",
        area: "2,200 sq.ft",
        bedrooms: "4 BHK",
        price: "₹1.8 Crores",
        image:
          "https://psgroup.in/blog/wp-content/uploads/2020/12/ABACUS_Terrace-Seating-Area_gallery.jpg",
      },
    ],
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
    bedrooms: "N/A",
    bathrooms: "N/A",
    areaSqFt: "2500",
    description:
      "Skyline Corporate provides premium commercial spaces ideal for businesses of all sizes. Featuring modern architecture, ample parking, and state-of-the-art facilities, it's the perfect location to establish or expand your enterprise. Situated in the bustling Shilaj area, it offers prime visibility and accessibility.",
    planFeatures: [
      "High-speed Internet",
      "24/7 Security",
      "Conference Rooms",
      "Power Backup",
      "Ample Parking",
    ],
    availablePlans: [
      {
        name: "Small Office Space",
        area: "500 sq.ft",
        bedrooms: "Office",
        price: "₹50 Lakhs",
        image:
          "https://cedreo.com/wp-content/uploads/cloudinary/US_Office_09_render_1920px_tlzhpi.jpg",
      },
      {
        name: "Large Office Floor",
        area: "5,000 sq.ft",
        bedrooms: "Commercial",
        price: "₹4 Crores",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZmxvb3J8ZW58MHx8MHx8fDA%3D",
      },
    ],
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
    bedrooms: "4+",
    bathrooms: "4+",
    areaSqFt: "4000",
    description:
      "Experience luxury living at The Greenfield Villas. These sprawling villas are designed with elegance and comfort in mind, offering private gardens, expansive living areas, and high-end amenities. Located in the rapidly developing Gota area, it's a sanctuary away from the city's hustle.",
    planFeatures: [
      "Private Garden",
      "Swimming Pool access",
      "Clubhouse Membership",
      "Smart Home Automation",
      "2-car Garage",
    ],
    availablePlans: [
      {
        name: "Elite Villa",
        area: "4,500 sq.yard",
        bedrooms: "5 BHK",
        price: "₹2.8 Crores",
        image:
          "https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg",
      },
      {
        name: "Signature Villa",
        area: "3,500 sq.yard",
        bedrooms: "4 BHK",
        price: "₹2.2 Crores",
        image:
          "https://signaturevillas.co.in/wp-content/uploads/2020/01/signature-villas-nv.jpg",
      },
    ],
  },
  {
    id: "orchid-plaza",
    name: "Orchid Plaza",
    builder: "Gala Group",
    builderLogo:
      "https://www.gala-group.com/wp-content/uploads/2024/01/gala-galagroup.webp",
    location: "Science City, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "1200-3000 sq.ft",
    status: "Ready to Move",
    image:
      "https://is1-2.housingcdn.com/4f2250e8/2c75469c9fcc0c9b325575de139d0ee9/v0/fs/lodha_hosa_road-hsr_layout_bangalore-bengaluru-lodha_group.png",
    price: "₹1 Cr onwards",
    bedrooms: "N/A",
    bathrooms: "N/A",
    areaSqFt: "1800",
    description:
      "Orchid Plaza offers contemporary commercial spaces in the prime Science City area. With flexible layouts, robust infrastructure, and excellent connectivity, it's an ideal choice for offices, retail, and more. A vibrant business ecosystem awaits you.",
    planFeatures: [
      "Central Air Conditioning",
      "High Ceilings",
      "Dedicated Parking",
      "Food Court Access",
      "24/7 Power Backup",
    ],
    availablePlans: [
      {
        name: "Retail Shop",
        area: "1,200 sq.ft",
        bedrooms: "Retail",
        price: "₹1.5 Crores",
        image:
          "https://www.shutterstock.com/image-photo/photo-mall-shopping-street-north-260nw-2293665041.jpg",
      },
      {
        name: "Office Suite",
        area: "2,500 sq.ft",
        bedrooms: "Office",
        price: "₹2.5 Crores",
        image:
          "https://img.freepik.com/free-photo/modern-minimalist-office_23-2151780752.jpg?semt=ais_hybrid&w=740",
      },
    ],
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
    bedrooms: "2",
    bathrooms: "2",
    areaSqFt: "1250",
    description:
      "Sapphire Residences offers comfortable and affordable 2 BHK apartments. Designed for small families and individuals, these homes combine practicality with modern aesthetics. Located in Naroda, it provides easy access to essential amenities and transport links.",
    planFeatures: [
      "Modern Fixtures",
      "Ventilated Rooms",
      "Community Hall",
      "Children's Play Area",
      "24/7 Water Supply",
    ],
    availablePlans: [
      {
        name: "2 BHK Smart",
        area: "1,100 sq.ft",
        bedrooms: "2 BHK",
        price: "₹60 Lakhs",
        image:
          "https://housivity-production.s3.ap-south-1.amazonaws.com/production/properties/65d6f5a583d294413b0700b3/images/1716441244-courtyard-sample-house_page-0003.webp",
      },
      {
        name: "2 BHK Plus",
        area: "1,300 sq.ft",
        bedrooms: "2 BHK",
        price: "₹70 Lakhs",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "infinity-business-hub",
    name: "Infinity Business Hub",
    builder: "Sun Builders",
    builderLogo:
      "https://play-lh.googleusercontent.com/IksyR_82yB23xgtjFpS_1y51iAEhC4p42qxeft3T2jqkS2e-8o_yadKbgz0hXfAosA",
    location: "Prahlad Nagar, Ahmedabad",
    propertyType: "Commercial Spaces",
    areaRange: "800-2500 sq.ft",
    status: "New Launch",
    image:
      "https://teja10.kuikr.com//r1/20190511/ak_1094_1664129496-1557546988_700x700.png",
    price: "₹90 Lakhs onwards",
    bedrooms: "N/A",
    bathrooms: "N/A",
    areaSqFt: "1500",
    description:
      "Infinity Business Hub is a state-of-the-art commercial complex in Prahlad Nagar. It offers flexible office spaces with cutting-edge technology and a vibrant work environment. Perfect for startups and established businesses looking for a prestigious address.",
    planFeatures: [
      "Co-working Spaces",
      "High-speed Elevators",
      "Visitor Parking",
      "Cafeteria",
      "IT Support",
    ],
    availablePlans: [
      {
        name: "Small Office",
        area: "800 sq.ft",
        bedrooms: "Office",
        price: "₹90 Lakhs",
        image:
          "https://res.cloudinary.com/kea/image/upload/v1693567570/website/blogs/38.jpg",
      },
      {
        name: "Medium Office",
        area: "1,500 sq.ft",
        bedrooms: "Office",
        price: "₹1.5 Crores",
        image:
          "https://assets.entrepreneur.com/content/3x2/2000/1689949417-great-office-space-g-1352248463.jpg",
      },
    ],
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
    planFeatures: [
      "Green Spaces",
      "Gymnasium",
      "Swimming Pool",
      "24/7 Security",
      "Power Backup",
    ],
    availablePlans: [
      {
        name: "2 BHK Classic",
        area: "1,000 sq.ft",
        bedrooms: "2 BHK",
        price: "₹70 Lakhs",
        image:
          "https://is1-3.housingcdn.com/01c16c28/6c99e2687ce6f5dcb89579714d179b5d/v0/medium/2_bhk_apartment-for-sale-hiranandani_estate-Thane-hall.jpg",
      },
      {
        name: "2 BHK Premium",
        area: "1,200 sq.ft",
        bedrooms: "2 BHK",
        price: "₹80 Lakhs",
        image:
          "https://psgroup.in/blog/wp-content/uploads/2020/11/2BHK-flats-in-Kolkata.jpeg",
      },
    ],
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
    planFeatures: [
      "Prime Location",
      "Modern Interiors",
      "High-speed Internet",
      "Conference Facilities",
      "Dedicated Parking",
    ],
    availablePlans: [
      {
        name: "Small Office",
        area: "700 sq.ft",
        bedrooms: "Office",
        price: "₹1.2 Crores",
        image: "https://uniland.com/wp-content/uploads/2025/01/Lobby.jpg",
      },
      {
        name: "Medium Office",
        area: "1,500 sq.ft",
        bedrooms: "Office",
        price: "₹2.0 Crores",
        image:
          "https://thumbs.dreamstime.com/b/green-real-estate-office-illustration-workspace-energy-lighting-recycled-materials-indoor-369870593.jpg",
      },
    ],
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
    planFeatures: [
      "Large Private Garden",
      "Clubhouse Access",
      "Gym and Spa",
      "24/7 Concierge",
      "Servant Quarters",
    ],
    availablePlans: [
      {
        name: "Palm Villa Grand",
        area: "4,000 sq.yard",
        bedrooms: "5 BHK",
        price: "₹3.5 Crores",
        image:
          "https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2024/12/10/Dubai-Sothebys-International-Realty-Six-Senses-Palm-Jumeirah-branded-real-estate-768x511.jpg",
      },
      {
        name: "Palm Villa Royal",
        area: "3,500 sq.yard",
        bedrooms: "4 BHK",
        price: "₹3.0 Crores",
        image:
          "https://luxhabitat.ae/resizedimages/1920w/20189/source/924057941860f64b840816ed1cf344c03c315fe96b4d7b06ee70d9d190ad5299.jpg",
      },
    ],
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
    planFeatures: [
      "Lake View Balcony",
      "Modular Kitchen",
      "24/7 Security",
      "Gymnasium",
      "Clubhouse",
    ],
    availablePlans: [
      {
        name: "3 BHK Classic",
        area: "1,600 sq.ft",
        bedrooms: "3 BHK",
        price: "₹95 Lakhs",
        image:
          "https://radiantassets.com/wp-content/uploads/2025/01/North-Type-1-1280x700.jpg",
      },
      {
        name: "3 BHK Premium",
        area: "2,000 sq.ft",
        bedrooms: "3 BHK",
        price: "₹1.1 Crores",
        image:
          "https://is1-3.housingcdn.com/01c16c28/ec479dfb3935542d4767700558da3c99/v0/medium/3_bhk_villa-for-sale-kcc_nagar-Hosur-others.jpg",
      },
    ],
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
    planFeatures: [
      "Kids Play Area",
      "Landscaped Gardens",
      "Rainwater Harvesting",
      "Secure Gated Community",
      "CCTV Surveillance",
    ],
    availablePlans: [
      {
        name: "2 BHK Compact",
        area: "900 sq.ft",
        bedrooms: "2 BHK",
        price: "₹55 Lakhs",
        image:
          "https://website-data-pluckwalk.s3-ap-south-1.amazonaws.com/test/9ufezN4BkyR5cTy4bmo3EP.jpeg",
      },
      {
        name: "2 BHK Standard",
        area: "1,100 sq.ft",
        bedrooms: "2 BHK",
        price: "₹65 Lakhs",
        image:
          "https://www.adanirealty.com/-/media/project/realty/residential/ahmedabad/aster-neo/1920x1080/1920x1080-cam_03-n.ashx",
      },
    ],
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
    planFeatures: [
      "Grade A Office Space",
      "Executive Lounges",
      "High-speed Internet",
      "Multi-level Parking",
      "Food and Beverage Outlets",
    ],
    availablePlans: [
      {
        name: "Executive Office",
        area: "2,000 sq.ft",
        bedrooms: "Office",
        price: "₹2.5 Crores",
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230719/pngtree-executive-office-design-a-modern-3d-rendering-of-a-productive-workspace-image_3662661.jpg",
      },
      {
        name: "Corporate Suite",
        area: "3,500 sq.ft",
        bedrooms: "Commercial",
        price: "₹4.0 Crores",
        image:
          "https://wallpapers.com/blog/wp-content/uploads/2024/03/How-to-Upscale-Real-Estate-Photos-for-Better-Listings.jpg",
      },
    ],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- Sub-Components ---

const HeroSection = ({ property, onContactClick }) => (
    <section
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${property.image})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <motion.div
            className="relative z-10 text-white w-full max-w-7xl mx-auto px-6 md:px-8 pb-20 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
                <img
                    src={property.builderLogo}
                    alt={`${property.builder} Logo`}
                    className="h-14 w-14 bg-white p-1 rounded-full object-contain"
                />
                <span className="text-lg font-semibold">{property.builder}</span>
            </motion.div>
            <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold tracking-tight"
            >
                {property.name}
            </motion.h1>
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg"
            >
                <div className="flex items-center">
                    <MapPin size={20} className="mr-2 opacity-80" />
                    <span>{property.location}</span>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4"
            >
                {property.bedrooms !== "N/A" && (
                    <div className="flex flex-col items-center">
                        <BedSingle size={32} />
                        <span className="mt-1 text-lg">{property.bedrooms} Beds</span>
                    </div>
                )}
                {property.bathrooms !== "N/A" && (
                    <div className="flex flex-col items-center">
                        <Bath size={32} />
                        <span className="mt-1 text-lg">{property.bathrooms} Baths</span>
                    </div>
                )}
                <div className="flex flex-col items-center">
                    <Ruler size={32} />
                    <span className="mt-1 text-lg">{property.areaSqFt} sq.ft</span>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-4">
                <button
                    onClick={onContactClick}
                    className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
                >
                    Schedule a Visit
                </button>
            </motion.div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <ChevronDown
                className="text-white h-10 w-10 animate-bounce"
                strokeWidth={1}
            />
        </div>
    </section>
);

const OverviewSection = ({ property, onContactClick }) => {
    const [galleryImage, setGalleryImage] = useState(property.image);
    const images = [
        property.image,
        ...property.availablePlans.map((p) => p.image).slice(0, 2),
    ];
    return (
        <section className="bg-white text-[#1A1A1A] py-20 md:py-28">
            <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-4 sticky top-24"
                >
                    <img
                        src={galleryImage}
                        alt="Property View"
                        className="rounded-xl shadow-xl w-full h-auto object-cover aspect-video filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        {images.map(
                            (img, idx) =>
                                img && (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        onClick={() => setGalleryImage(img)}
                                        className={`rounded-lg cursor-pointer transition-all duration-500 filter grayscale hover:grayscale-0 ${
                                            galleryImage === img
                                                ? "ring-2 ring-offset-2 ring-[#1A1A1A]"
                                                : "opacity-70 hover:opacity-100"
                                        }`}
                                    />
                                )
                        )}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]">
                            Inside the Property
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {property.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Key Features</h3>
                        <ul className="space-y-4">
                            {property.planFeatures?.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-lg text-gray-700"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CheckCircle size={22} className="text-[#1A1A1A] mr-4 flex-shrink-0" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-6">
                        <button
                            onClick={onContactClick}
                            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors duration-300"
                        >
                            Request a Brochure
                        </button>
                        <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                            Get Price Details
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FloorPlanCard = ({ plan }) => (
    <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
    >
        <div className="overflow-hidden">
            <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-64 object-cover group-hover:scale-105 filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
        </div>
        <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold mb-2 text-[#1A1A1A]">{plan.name}</h3>
            <p className="text-gray-600 mb-4">
                {plan.area} • {plan.bedrooms}
            </p>
            <p className="text-2xl font-semibold text-black">{plan.price}</p>
        </div>
    </motion.div>
);

const AvailablePlansSection = ({ property }) => {
    if (!property.availablePlans || property.availablePlans.length === 0) {
        return null;
    }
    return (
        <section className="bg-gray-100 py-20 md:py-28">
            <div className="container mx-auto px-6 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1A1A1A]">
                    Available Floor Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {property.availablePlans.map((plan, index) => (
                        <FloorPlanCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactFormModal = ({ propertyName, onClose }) => {
  // State to manage form inputs (optional, but good practice for controlled components)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the formData to your backend or an API
    console.log("Form submitted:", formData)
    // For now, just close the modal
    onClose()
  }

  return (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 font-sans"
  onClick={onClose}
>
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 50, opacity: 0 }}
    className="bg-[#1C1C1C] rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg relative text-white max-h-[90vh] overflow-y-auto"
    onClick={(e) => e.stopPropagation()}
  >
    <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
      <X size={24} />
    </button>

    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
      Don't hesitate to contact us
    </h3>
    <p className="text-gray-400 text-center mb-6 text-sm">
      Location: Your Project Inquiry City
    </p>

    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="enquiryType" className="block text-white text-sm font-medium mb-1">
          Nature of Enquiry
        </label>
        <select
          id="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white appearance-none pr-8"
          required
        >
          <option value="" disabled className="text-gray-400">Please select</option>
          <option value="site_visit" className="text-white">Schedule a Site Visit</option>
          <option value="price_details" className="text-white">Get Price Details</option>
          <option value="brochure_request" className="text-white">Request a Brochure</option>
          <option value="general_inquiry" className="text-white">General Inquiry</option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center mt-8 text-white">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-white text-[#1C1C1C] px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
      >
        SEND REQUEST
      </button>
    </form>
  </motion.div>
</motion.div>

  )
}

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Find the property that matches the ID from the URL
    const foundProperty = projectsData.find((p) => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      // If no property is found, navigate to the 404 page
      navigate("/404");
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  // Loading state while the property is being found
  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <p className="text-xl animate-pulse">Loading Property Details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans">
      <HeroSection
        property={property}
        onContactClick={() => setShowModal(true)}
      />
      <OverviewSection
        property={property}
        onContactClick={() => setShowModal(true)}
      />
      <AvailablePlansSection property={property} />

      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Interested in this Property?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Our team is ready to provide you with more information, schedule a
            site visit, or answer any questions you may have.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
            >
              Contact Us Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="border border-gray-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
            >
              Explore Other Projects
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <ContactFormModal
            propertyName={property.name}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetails;