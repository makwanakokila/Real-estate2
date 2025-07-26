
// src/components/Filterdata.jsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    MapPin,
    BedSingle,
    Ruler,
    CheckCircle,
    ChevronDown,
    X,
    Building,
    Sofa,
    Calendar,
    User,
    Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// --- DATA ---
// Your provided property data
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
        imageUrl: "https://lbcdn.airpaz.com/hotelimages/3223439/uma-shanti-villa-bf8a426e54a6796a535bf879f56f79e5.jpg",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiw7Dl6HqvFoV3lsRX6sgA2S33jOA0lqzUA&s",
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
        imageUrl: "https://files.propertywala.com/photos/9b/J721190032.main-entrance.1112987l.jpg",
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
        imageUrl: "https://www.onestopproperty.in/upload/admin/advertisement/41749727244.jpeg",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Ur7-NBLbfqhdjz6kvut5qILNrkZSU1ERw&s",
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
        imageUrl: "https://static.squareyards.com/resources/images/ahmedabad/tn-projectflagship/tn-shaligram-garden-homes-flagshipimg1.jpg?aio=w-345;h-182;crop;",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAHPzo8DpQtKIzEPId8FMzmGdE-zbnu_QZQ&s",
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
        imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/max600/529255117.jpg?k=778611b102d0872cc5f5b7ea9554a92efad18002af1b8943cca1dd48d54dd369&o=",
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
        imageUrl: "https://is1-2.housingcdn.com/4f2250e8/3e2a6116293dc0d3617879b932d2819c/v5/fs/teraiya_shantikunj-gidc_naroda-ahmedabad-teraiya_group.jpg",
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
        imageUrl: "https://cloudimage.homeonline.com/325x216/public/uploads/property/images/lightbox/921195a842155ae10a_blob.jpeg",
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


// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- Helper function to format price
const formatPrice = (price) => {
    if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    if (price >= 100000) {
        return `₹${(price / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
};


// --- Sub-Components ---
const HeroSection = ({ property, onContactClick }) => (
    <section
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${property.imageUrl})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <motion.div
            className="relative z-10 text-white w-full max-w-7xl mx-auto px-6 md:px-8 pb-20 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    <User size={32} className="text-white" />
                </div>
                <span className="text-lg font-semibold bg-black/30 px-3 py-1 rounded-full">
                    Posted by: {property.postedBy}
                </span>
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
                <div className="flex flex-col items-center">
                    <BedSingle size={32} />
                    <span className="mt-1 text-lg">{property.type}</span>
                </div>
                <div className="flex flex-col items-center">
                    <Building size={32} />
                    <span className="mt-1 text-lg">{property.floors}</span>
                </div>
                <div className="flex flex-col items-center">
                    <Ruler size={32} />
                    <span className="mt-1 text-lg">{property.superArea} sq.ft</span>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-4">
                <button
                    onClick={onContactClick}
                    className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
                >
                    Contact Now
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

const OverviewSection = ({ property, onContactClick }) => (
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
                    src={property.imageUrl}
                    alt={property.name}
                    className="rounded-xl shadow-xl w-full h-auto object-cover aspect-video filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Price Details</h3>
                    <p className="text-4xl font-bold text-black mb-4">
                        {formatPrice(property.price)}
                    </p>
                    <p className="text-gray-600">
                        (Price is negotiable. Contact for final offer)
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="space-y-10"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]">
                        Property Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A stunning {property.type} located in the prime area of {" "}
                        {property.location}. This {property.furnishing.toLowerCase()} property
                        is a {property.status.toLowerCase()} listing, perfect for those seeking
                        a new home or a valuable investment.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6 text-lg">
                    <div className="flex items-center gap-3">
                        <Sofa className="text-[#1A1A1A]" />
                        <span>{property.furnishing}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check className="text-[#1A1A1A]" />
                        <span>{property.status}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Ruler className="text-[#1A1A1A]" />
                        <span>{property.carpetArea} sq.ft Carpet</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Calendar className="text-[#1A1A1A]" />
                        <span>{property.timeline}</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
                        {property.amenities.map((amenity, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center text-lg text-gray-700"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CheckCircle size={22} className="text-green-500 mr-3 flex-shrink-0" />
                                <span>{amenity}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap gap-4 pt-6">
                    <button
                        onClick={onContactClick}
                        className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors duration-300"
                    >
                        I'm Interested
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);


const ContactFormModal = ({ propertyName, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: `I am interested in "${propertyName}". Please provide more details.`
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your interest! We will contact you shortly.");
        onClose();
    };

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
                className="bg-[#1C1C1C] rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg relative text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Get in Touch</h3>
                <p className="text-gray-400 text-center mb-6">
                    Enquiry for: <span className="font-semibold text-white">{propertyName}</span>
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
                        required
                    />
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
                        required
                    />
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-white text-[#1C1C1C] px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                        SEND REQUEST
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};


// --- Main Component ---
const Filterdata = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Find the property that matches the ID from the URL
        const foundProperty = allProperties.find((p) => p.id === parseInt(id));
        if (foundProperty) {
            setProperty(foundProperty);
        } else {
            // Optional: navigate to a 404 page if not found
            // navigate("/404"); 
            console.error("Property not found!");
        }
        window.scrollTo(0, 0);
    }, [id, navigate]);

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
            
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="container mx-auto px-6 md:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Interested in this Property?
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                        Our team is ready to provide you with more information and schedule a site visit.
                    </p>
                    <div className="flex justify-center">
                     <Link to="/contact">
  <button
    className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
  >
    Contact Us Now
  </button>
</Link>
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

export default Filterdata;