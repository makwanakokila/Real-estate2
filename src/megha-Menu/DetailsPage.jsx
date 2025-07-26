


"use client"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MapPin, BedSingle, Bath, Ruler, CheckCircle, ChevronDown, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- YOUR PROJECT DATA (Fully restored and updated) ---
const allProjects = [
    {
        id: 1,
        name: "Elegant Heights",
        builder: "Yodezeen Builders",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/his.png",
        location: "Ahmedabad",
        propertyType: "1BHK",
        areaRange: "1800-2200 sq.ft",
        status: "Ready to Move",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        price: "₹25 Lakh onwards",
        bedrooms: "1",
        bathrooms: "1",
        areaSqFt: "1800",
        description: "Compact 1BHK homes with modern interiors and a calm environment. Features include a community hall, children's play area, and 24/7 security. Located close to schools, hospitals, and major IT hubs.",
        planFeatures: ["Gym", "Parking", "Security", "Play Area", "Community Hall"],
        availablePlans: [
            { name: "1 BHK Compact (Type A)", area: "1,800 sq.ft", bedrooms: "1 BHK", price: "₹25 Lakhs", image: "https://www.piramalrealty.com/_next/image?url=%2Fimages%2F1-BHK-in-mumbai.jpg&w=3840&q=75" },
            { name: "1 BHK Compact (Type B)", area: "1,850 sq.ft", bedrooms: "1 BHK", price: "₹26 Lakhs", image: "https://homezonline.in/wp-content/uploads/2022/07/Small-home-with-alluring-exterior.jpg" },
        ],
    },
    {
        id: 2,
        name: "Urban Residency",
        builder: "Design Wanted Group",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/designwanted.png",
        location: "Ahmedabad",
        propertyType: "2BHK",
        areaRange: "2000-3000 sq.ft",
        status: "Under Construction",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
        price: "₹45 Lakh onwards",
        bedrooms: "2",
        bathrooms: "2",
        areaSqFt: "2500",
        description: "Spacious 2BHK apartments in the heart of the city with top-class amenities like a gym, swimming pool, and dedicated parking. Expected completion in 18 months.",
        planFeatures: ["Swimming Pool", "Gym", "Clubhouse", "Lift", "Power Backup"],
        availablePlans: [
            { name: "2 BHK Deluxe", area: "2,200 sq.ft", bedrooms: "2 BHK", price: "₹45 Lakhs", image: "https://psgroup.in/blog/wp-content/uploads/2020/11/2BHK-flats-in-Kolkata.jpeg" },
            { name: "2 BHK Premium", area: "2,800 sq.ft", bedrooms: "2 BHK", price: "₹52 Lakhs", image: "https://delf2iyv2crlj.cloudfront.net/Images/38ae84d1-d557-4234-81a5-350bb5fe95d6.webp" },
        ],
    },
    {
        id: 3,
        name: "Skyline Villas",
        builder: "Adani Realty",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/1.png",
        location: "Ahmedabad",
        propertyType: "Villas",
        areaRange: "3500-5000 sq.ft",
        status: "New Launch",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        price: "₹1.2 Cr onwards",
        bedrooms: "4",
        bathrooms: "4",
        areaSqFt: "4000",
        description: "Luxury villas with private gardens, swimming pool and club access. These bespoke residences offer unparalleled comfort and elegance. Customize your interiors with premium finishes.",
        planFeatures: ["Private Garden", "Swimming Pool", "Clubhouse", "Security", "Sports Facilities"],
        availablePlans: [
            { name: "4 BHK Villa", area: "4,000 sq.ft", bedrooms: "4 BHK", price: "₹1.2 Crores", image: "https://signaturevillas.co.in/wp-content/uploads/2020/01/signature-villas-nv.jpg" },
            { name: "5 BHK Villa", area: "4,800 sq.ft", bedrooms: "5 BHK", price: "₹1.5 Crores", image: "https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg" },
        ],
    },
    {
        id: 4,
        name: "City View Apartments",
        location: "Ahmedabad",
        propertyType: "3BHK",
        status: "Ready to Move",
        price: "₹65 Lakh onwards",
        bedrooms: "3",
        bathrooms: "3",
        areaSqFt: "2800",
        builder: "Shapoorji Pallonji",
        image: "https://www.propertypanther.in/img/property_galary/f7b9fccb638a69b7cfff39ebe992ebaf.webp",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/id-interior.png",
        description: "Modern 3BHK apartments with skyline views and premium interiors. Enjoy panoramic cityscapes from your balcony. Prime location with excellent connectivity to business districts and entertainment zones.",
        areaRange: "2500-4000 sq.ft",
        planFeatures: ["Modular Kitchen", "Balcony", "Gym", "Intercom", "24/7 Water Supply"],
        availablePlans: [
            { name: "3 BHK Standard (View A)", area: "2,800 sq.ft", bedrooms: "3 BHK", price: "₹65 Lakhs", image: "https://orchardamritaya.oswalgroup.net/blog/wp-content/uploads/2023/12/An-Ideal-3-bhk-luxury-flats-in-kolkata-for-your-family-1.png" },
            { name: "3 BHK Standard (View B)", area: "2,900 sq.ft", bedrooms: "3 BHK", price: "₹68 Lakhs", image: "https://www.casagrand.co.in/wp-content/uploads/2024/05/New-Project-2.png?ver=1.211" },
        ],
    },
    {
        id: 5,
        name: "Green Oasis Homes",
        location: "Gandhinagar",
        propertyType: "2BHK",
        status: "Under Construction",
        price: "₹38 Lakh onwards",
        bedrooms: "2",
        bathrooms: "2",
        areaSqFt: "2100",
        builder: "EcoBuild Developers",
        image: "https://amazingarchitecture.com/storage/files/1742/architecture-projects/the-grid-architects/urban-oasis/02-urban_oasis%20_gated_community_living_housing_the_grid_architects.jpg",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/%D0%BA%D1%83%D1%85%D0%BD%D0%B8.png",
        description: "Eco-friendly 2BHK homes in a serene environment, focusing on sustainable living. Rainwater harvesting and solar panels installed. Close to nature trails and green spaces, offering a peaceful lifestyle.",
        areaRange: "1900-2400 sq.ft",
        planFeatures: ["Rainwater Harvesting", "Solar Power", "Green Spaces", "Cycling Track"],
        availablePlans: [
            { name: "2 BHK Eco", area: "2,100 sq.ft", bedrooms: "2 BHK", price: "₹38 Lakhs", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop" },
            { name: "2 BHK Garden", area: "2,150 sq.ft", bedrooms: "2 BHK", price: "₹40 Lakhs", image: "https://guesthousewale.com/storage/properties/new-delhi/resort-1/2-bh-farm-with-private-pool-sanitised-guesthousewale-27-1.jpg" },
        ],
    },
    {
        id: 6,
        name: "Heritage Grande",
        location: "Vadodara",
        propertyType: "3BHK",
        status: "Ready to Move",
        price: "₹72 Lakh onwards",
        bedrooms: "3",
        bathrooms: "4",
        areaSqFt: "3500",
        builder: "Royal Estates",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/int.png",
        description: "Luxurious 3BHK apartments blending traditional architecture with modern comforts. Grand entrance lobby and exclusive residents' lounge. Located in a historic part of Vadodara.",
        areaRange: "2800-4200 sq.ft",
        planFeatures: ["Grand Lobby", "Residents Lounge", "Heritage Design", "Dedicated Concierge"],
        availablePlans: [
            { name: "3 BHK Royal", area: "3,500 sq.ft", bedrooms: "3 BHK", price: "₹72 Lakhs", image: "https://psgroup.in/blog/wp-content/uploads/2020/12/ABACUS_Terrace-Seating-Area_gallery.jpg" },
            { name: "3 BHK Imperial", area: "3,600 sq.ft", bedrooms: "3 BHK", price: "₹75 Lakhs", image: "https://static.360realtors.com/properties/photos/1012/mini/1.jpg" }
        ],
    },
    {
        id: 7,
        name: "Tech Park Residences",
        location: "Ahmedabad",
        propertyType: "1BHK",
        status: "New Launch",
        price: "₹28 Lakh onwards",
        bedrooms: "1",
        bathrooms: "1",
        areaSqFt: "1700",
        builder: "Innovate Spaces",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqkRW-gQ-pXQZcG_JTNSrOeAUT2lCK62_wA&s",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/dwell.png",
        description: "Compact yet stylish 1BHK units ideal for young professionals, situated near major IT hubs. Smart home features included. High rental yield potential due to proximity to corporate offices.",
        areaRange: "1700-2100 sq.ft",
        planFeatures: ["Smart Home", "Co-working Space", "High-speed Internet", "Cafeteria"],
        availablePlans: [
            { name: "1 BHK Tech", area: "1,700 sq.ft", bedrooms: "1 BHK", price: "₹28 Lakhs", image: "https://delf2iyv2crlj.cloudfront.net/Images/Bangalore7f8d8671-ae71-4bfb-a135-933cc331678a.webp" },
            { name: "1 BHK Smart", area: "1,800 sq.ft", bedrooms: "1 BHK", price: "₹30 Lakhs", image: "https://www.piramalrealty.com/_next/image?url=%2Fimages%2F1-BHK-in-mumbai.jpg&w=3840&q=75" }
        ],
    },
    {
        id: 8,
        name: "Serene Lakefront Villas",
        location: "Surat",
        propertyType: "Villas",
        status: "Ready to Move",
        price: "₹1.5 Cr onwards",
        bedrooms: "4+",
        bathrooms: "5",
        areaSqFt: "4500",
        builder: "Waterfront Properties",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/622513570.jpg?k=23cd4fb9df047d569c15fba3b2a164be8ee166d585559d914861a0cafdb6c2cc&o=&hp=1",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/5-1.png",
        description: "Exclusive lakefront villas offering breathtaking views and tranquil living. Private jetties and lush landscaping. Limited units available, ensuring privacy and exclusivity.",
        areaRange: "4000-6000 sq.ft",
        planFeatures: ["Lake View", "Private Jetty", "Landscaped Gardens", "Gazebo"],
        availablePlans: [
            { name: "4 Bed Lakefront Villa", area: "4,500 sq.ft", bedrooms: "4 BHK", price: "₹1.5 Crores", image: "https://images.trvl-media.com/lodging/88000000/87690000/87685500/87685439/c8779972.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" },
            { name: "5 Bed Grand Villa", area: "5,500 sq.ft", bedrooms: "5 BHK", price: "₹1.8 Crores", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiODwiWJMlNl8WVMRf3u0JMkyeZTkaPp29CMkVTo4n04-nQ8TyHYphejB5CyP0XUh4pBLuCLzaUq6I7up9Oav-yRUM6PSyn9lNgwahfphwQM1N3DReFV7kdw4IbdOveUsb09IIO9FNw2CFK/w1200-h630-p-k-no-nu/grand-villa-architecture-thumb.jpg" }
        ],
    },
    {
        id: 9,
        name: "Capital Towers",
        location: "Gandhinagar",
        propertyType: "3BHK",
        status: "Ready to Move",
        price: "₹85 Lakh onwards",
        bedrooms: "3",
        bathrooms: "3",
        areaSqFt: "3000",
        builder: "Elite Builders",
        image: "https://sahjanandgroup.in/wp-content/uploads/2021/10/cam_16_view_night_FF.jpg",
        builderLogo: "https://www.elitebuilders.co.uk/wp-content/uploads/2020/06/elite-builders-logo.png",
        description: "Premium 3BHK apartments with state-of-the-art facilities in Gandhinagar's central business district. Ideal for families and professionals. High-rise living with stunning city views.",
        areaRange: "2800-4500 sq.ft",
        planFeatures: ["Swimming Pool", "Gym", "Concierge Service", "High-Speed Elevators"],
        availablePlans: [
            { name: "3 BHK City View", area: "3,000 sq.ft", bedrooms: "3 BHK", price: "₹85 Lakhs", image: "https://www.peoplespropertypoint.com/wp-content/uploads/2023/12/3-BHK-Flats-In-Zirakpur-Under-40-Lakhs.jpg" },
            { name: "3 BHK Corner", area: "3,200 sq.ft", bedrooms: "3 BHK", price: "₹90 Lakhs", image: "https://props9.com/storage/accounts/buddanadurgadevi/whatsapp-image-2024-09-11-at-20338-am-5.jpeg" }
        ],
    },
    {
        id: 10,
        name: "Riviera Apartments",
        location: "Surat",
        propertyType: "2BHK",
        status: "Under Construction",
        price: "₹42 Lakh onwards",
        bedrooms: "2",
        bathrooms: "2",
        areaSqFt: "2000",
        builder: "Coastal Homes",
        image: "https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/zbvuga.gif",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/contemporist-1.png",
        description: "Charming 2BHK apartments near the coast in Surat, offering a relaxed lifestyle. Excellent for sea-lovers and retirees. Close to beaches and promenades.",
        areaRange: "1950-2500 sq.ft",
        planFeatures: ["Beach Access", "Jogging Track", "Clubhouse", "Yoga Deck"],
        availablePlans: [
            { name: "2 BHK Coastal", area: "2,000 sq.ft", bedrooms: "2 BHK", price: "₹42 Lakhs", image: "https://delf2iyv2crlj.cloudfront.net/Images/Mumbaib4927600-21a0-40d7-b230-edd6e3468f1c.webp" },
            { name: "2 BHK Sea View", area: "2,200 sq.ft", bedrooms: "2 BHK", price: "₹45 Lakhs", image: "https://www.guptasen.com/wp-content/uploads/2024/10/2-Bedroom-apartment-with-large-balcony-overlooking-ocean-versova-mumbai.webp" }
        ],
    },
    {
        id: 11,
        name: "Global Greens",
        location: "Ahmedabad",
        propertyType: "4BHK",
        status: "Ready to Move",
        price: "₹95 Lakh onwards",
        bedrooms: "4",
        bathrooms: "4",
        areaSqFt: "4000",
        builder: "Green Earth Developers",
        image: "https://is1-3.housingcdn.com/4f2250e8/1cd12487527408ee03398c8c99f8f5e0/v0/fs/swara_skygreen-naranpura_1-ahmedabad-swara_group.jpeg",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2019/09/2.png",
        description: "Spacious 4BHK homes designed for large families, with ample green spaces and recreational facilities. Located in a tranquil yet well-connected area of Ahmedabad.",
        areaRange: "3500-5000 sq.ft",
        planFeatures: ["Large Gardens", "Kids Pool", "Sports Court", "Party Hall"],
        availablePlans: [
            { name: "4 BHK Garden View", area: "4,000 sq.ft", bedrooms: "4 BHK", price: "₹95 Lakhs", image: "https://is1-3.housingcdn.com/01c16c28/87c57084ab989a43203b377621ef74b1/v0/medium/4_bhk_villa-for-sale-kollur-Hyderabad-others.jpg" },
            { name: "4 BHK Terrace View", area: "4,100 sq.ft", bedrooms: "4 BHK", price: "₹98 Lakhs", image: "https://housing-images.n7net.in/012c1500/2311eb93aa3d5b618c3d14890836ec94/v0/medium.png" }
        ],
    },
    {
        id: 12,
        name: "Phoenix Towers",
        location: "Vadodara",
        propertyType: "2BHK",
        status: "New Launch",
        price: "₹50 Lakh onwards",
        bedrooms: "2",
        bathrooms: "2",
        areaSqFt: "2200",
        builder: "Urban Phoenix",
        image: "https://dandc.in/wp-content/uploads/2021/05/Image-for-phoenix-page-under-banner.jpg",
        builderLogo: "https://yodezeen.com/wp-content/uploads/2018/03/%D0%BA%D1%83%D1%85%D0%BD%D0%B8.png",
        description: "Modern 2BHK units with state-of-the-art smart home features, perfect for contemporary living. Early booking discounts available. Excellent investment opportunity.",
        areaRange: "2100-2800 sq.ft",
        planFeatures: ["Smart Home", "High-Tech Security", "Rooftop Lounge", "EV Charging"],
        availablePlans: [
            { name: "2 BHK Smart", area: "2,200 sq.ft", bedrooms: "2 BHK", price: "₹50 Lakhs", image: "https://delf2iyv2crlj.cloudfront.net/Images/Godrej%20Gurgaon%20Dsktop%20Size%2056153b61-fdd6-44f4-a528-6d9310ed68566b4f7b6f-8a09-4d40-927b-c402824c1582.webp" },
            { name: "2 BHK Tech", area: "2,300 sq.ft", bedrooms: "2 BHK", price: "₹55 Lakhs", image: "https://delf2iyv2crlj.cloudfront.net/Images/2621547f-e4b2-45f1-8697-867921d0987b.webp" }
        ],
    }
];

// --- Sub-Components with updated theme ---
const HeroSection = ({ property, onContactClick }) => (
  <section
    className="relative min-h-screen bg-cover bg-center flex flex-col justify-end"
    style={{ backgroundImage: `url(${property.image})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-[#1A1A1A]/40"></div>
    <motion.div
      className="relative z-10 text-white w-full max-w-7xl mx-auto px-6 md:px-8 pb-20 space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <motion.div
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
        className="flex items-center gap-4"
      >
        <img
          src={property.builderLogo || "/placeholder.svg"}
          alt={`${property.builder} Logo`}
          className="h-14 w-14 bg-white p-1 rounded-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
        />
        <span className="text-lg font-semibold">{property.builder}</span>
      </motion.div>

      <motion.h1
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        {property.name}
      </motion.h1>

      <motion.div
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
        className="flex items-center gap-x-6 gap-y-2 text-lg"
      >
        <MapPin size={20} className="mr-2 opacity-80" />
        <span>{property.location}</span>
      </motion.div>

      <motion.div
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
        className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4"
      >
        <div className="flex flex-col items-center">
          <BedSingle size={32} />
          <span className="mt-1 text-lg">{property.bedrooms} Beds</span>
        </div>
        <div className="flex flex-col items-center">
          <Bath size={32} />
          <span className="mt-1 text-lg">{property.bathrooms} Baths</span>
        </div>
        <div className="flex flex-col items-center">
          <Ruler size={32} />
          <span className="mt-1 text-lg">{property.areaSqFt} sq.ft</span>
        </div>
      </motion.div>

      <motion.div
        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
        className="pt-4"
      >
        <button
          onClick={onContactClick}
          className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
        >
          Schedule a Visit
        </button>
      </motion.div>
    </motion.div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <ChevronDown className="text-white h-10 w-10 animate-bounce" strokeWidth={1} />
    </div>
  </section>
)

const OverviewSection = ({ property, onContactClick }) => {
  const [galleryImage, setGalleryImage] = useState(property.image)

  const images = [property.image, ...property.availablePlans.map((p) => p.image).slice(0, 2)].filter(Boolean)

  return (
    <section id="overview" className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 sticky top-24"
        >
          <img
            src={galleryImage || "/placeholder.svg"}
            alt="Property View"
            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setGalleryImage(img)}
                className={`rounded-lg cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 ${
                  galleryImage === img ? "ring-2 ring-offset-2 ring-black grayscale-0" : "opacity-70 hover:opacity-100"
                }`}
              />
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside the Property</h2>
            <p className="text-lg text-gray-900 leading-relaxed">{property.description}</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {property.planFeatures?.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-lg text-gray-1000"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle size={22} className="text-green-400 mr-4" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={onContactClick}
              className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg font-bold  transition-colors duration-300"
            >
              Request a Brochure
            </button>
            <button
              onClick={onContactClick}
              className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
            >
              Get Price Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FloorPlanCard = ({ plan }) => (
  <motion.div
    className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 w-full md:max-w-md border border-gray-800"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    <div className="overflow-hidden">
      <img
        src={plan.image || "/placeholder.svg"}
        alt={plan.name}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
      />
    </div>
    <div className="p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-300 mb-4">
        {plan.area} &bull; {plan.bedrooms}
      </p>
      <p className="text-2xl font-semibold text-white">{plan.price}</p>
    </div>
  </motion.div>
)

const AvailablePlansSection = ({ property }) => {
  if (!property.availablePlans || property.availablePlans.length === 0) {
    return null
  }
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Available Floor Plans</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {property.availablePlans.map((plan, index) => (
            <FloorPlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactFormModal = ({ propertyName, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-[#1A1A1A] rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg relative border border-gray-800"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <X size={24} />
      </button>

      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Schedule a Visit</h3>
      <p className="text-gray-300 mb-6">
        for <span className="font-semibold">{propertyName}</span>
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-[#252525] text-white"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-[#252525] text-white"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-[#252525] text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-[#1A1A1A] px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Submit Request
        </button>
      </form>
    </motion.div>
  </motion.div>
)

// --- Main Page Component ---
const DetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const foundProperty = allProjects.find((p) => p.id == id)
    if (foundProperty) {
      setProperty(foundProperty)
    } else {
      navigate("/404")
    }
    window.scrollTo(0, 0)
  }, [id, navigate])

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A] text-white">
        <p className="text-xl animate-pulse">Loading Property Details...</p>
      </div>
    )
  }

  return (
    <div className="bg-[#1A1A1A] font-sans">
      <HeroSection property={property} onContactClick={() => setShowModal(true)} />
      <OverviewSection property={property} onContactClick={() => setShowModal(true)} />
      <AvailablePlansSection property={property} />
      <AnimatePresence>
        {showModal && <ContactFormModal propertyName={property.name} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default DetailsPage
