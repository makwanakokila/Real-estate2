// import React, { useState } from 'react';

// const Contacts = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="pt-20 lg:pt-24 min-h-screen bg-black">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
//         <div className="text-center mb-16 lg:mb-24">
//           <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
//             CONTACTS
//           </h1>
//           <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
//             Ready to start your architectural journey? We'd love to hear about your project and discuss how we can bring your vision to life.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
//           {/* Contact Information */}
//           <div>
//             <h2 className="text-3xl lg:text-4xl font-light text-white mb-12">
//               GET IN TOUCH
//             </h2>
            
//             <div className="space-y-12">
//               <div>
//                 <h3 className="text-lg font-light tracking-[0.1em] text-white mb-4">EMAIL</h3>
//                 <p className="text-white font-light">hello@yodezeen.com</p>
//                 <p className="text-white font-light">projects@yodezeen.com</p>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-light tracking-[0.1em] text-white mb-4">PHONE</h3>
//                 <p className="text-white font-light">+380 44 123 4567</p>
//                 <p className="text-white font-light">+44 20 7123 4567</p>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-light tracking-[0.1em] text-white mb-4">OFFICES</h3>
//                 <div className="space-y-6">
//                   <div>
//                     <p className="text-white font-light mb-2">KYIV</p>
//                     <p className="text-white font-light">
//                       123 Architecture Street<br />
//                       Design District<br />
//                       Kyiv, Ukraine 01001
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-white font-light mb-2">LONDON</p>
//                     <p className="text-white font-light">
//                       456 Design Avenue<br />
//                       Creative Quarter<br />
//                       London, UK SW1A 1AA
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h2 className="text-3xl lg:text-4xl font-light text-white mb-12">
//               SEND MESSAGE
//             </h2>
            
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="FULL NAME"
//                   className="w-full border-b border-white/30 pb-4 text-white font-light tracking-[0.05em] placeholder-white/60 bg-transparent focus:border-white focus:outline-none transition-colors duration-300"
//                 />
//               </div>
              
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="EMAIL ADDRESS"
//                   className="w-full border-b border-white/30 pb-4 text-white font-light tracking-[0.05em] placeholder-white/60 bg-transparent focus:border-white focus:outline-none transition-colors duration-300"
//                 />
//               </div>
              
//               <div>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="SUBJECT"
//                   className="w-full border-b border-white/30 pb-4 text-white font-light tracking-[0.05em] placeholder-white/60 bg-transparent focus:border-white focus:outline-none transition-colors duration-300"
//                 />
//               </div>
              
//               <div>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="MESSAGE"
//                   className="w-full border-b border-white/30 pb-4 text-white font-light tracking-[0.05em] placeholder-white/60 bg-transparent focus:border-white focus:outline-none transition-colors duration-300 resize-none"
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 className="bg-white text-black px-8 py-4 text-sm font-light tracking-[0.1em] hover:bg-gray-200 transition-colors duration-300"
//               >
//                 SEND MESSAGE
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts; 


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(""); // NEW
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryNature: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.enquiryNature.trim()) newErrors.enquiryNature = "Please select an enquiry type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form submitted:", formData, "City:", selectedCity);
      onClose();
    }
  };

  const onClose = () => {
    setOpen(false);
    setFormData({ fullName: "", email: "", phone: "", enquiryNature: "" });
    setSelectedCity("");
    setErrors({});
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);  // Set city in state
    setOpen(true);              // Open modal
  };

  const locations = [
    {
      city: "Los Angeles",
      phone: "+1 917 400 0230",
      address: "24151 Ventura blvd unit 370\nCalabasas, CA 91302",
      style: "left-[10%] top-[60%]",
    },
    {
      city: "Miami",
      phone: "+1 305 213 1321",
      address: "25 NW 34th st\nMiami, FL 33127",
      style: "left-[30%] top-[70%]",
    },
    {
      city: "London",
      phone: "",
      address: "70 Brompton Road,\nSW3 1ER",
      style: "left-[58%] top-[35%]",
    },
    {
      city: "Warsaw",
      phone: "",
      address: "2 Franciszka Nullo st 3rd floor,\n00-486 Warsaw, Poland",
      style: "left-[64%] top-[34%]",
    },
    {
      city: "Kyiv",
      phone: "+38 068 000 0670",
      address: "4 Lypynskoho st\noffice 15-16",
      style: "left-[70%] top-[40%]",
    },
  ];

  return (
    <div className="bg-[#111] text-white w-full">

      {/* ---------------------- Contact Section ---------------------- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2
            className="text-[2.25rem] font-bold leading-[2.75rem] mb-16"
            data-aos="fade-up"
            style={{ fontFamily: "'Circe', Arial, Helvetica, sans-serif" }}
          >
            Get in touch <br /> with us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base mb-16">
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-[#666] text-sm mb-1">General Inquiries:</p>
              <p className="text-white font-medium text-[16px]">info@yodezeen.com</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-[#666] text-sm mb-1">PR & Collaborations:</p>
              <p className="text-white font-medium text-[16px]">pr@yodezeen.com</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <p className="text-[#666] text-sm mb-1">Careers:</p>
              <p className="text-white font-medium text-[16px]">hr@yodezeen.com</p>
            </div>
          </div>

          <p
            className="text-[#666] text-[17px] leading-[2.9] tracking-wide max-w-2xl mb-16"
            data-aos="fade-up"
            data-aos-delay="800"
            style={{ fontFamily: "'Circe', Arial, Helvetica, sans-serif" }}
          >
            We are ready to lead you into the exciting world of architecture and interior design.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="border border-white px-12 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition duration-300"
            data-aos="fade-up"
            data-aos-delay="1000"
            style={{ fontFamily: "'Circe', Arial, Helvetica, sans-serif" }}
          >
            Send Request
          </button>
        </div>
      </section>

      {/* ---------------------- Modal ---------------------- */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#2a2a2a] bg-opacity-95 flex justify-center items-center font-sans px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="bg-[#1f1f1f] text-white p-8 rounded-lg w-full max-w-lg relative shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-3xl font-light hover:scale-110 transition-transform"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-2 text-center">
              Don’t hesitate to contact us
            </h2>

            {selectedCity && (
              <p className="text-center text-gray-400 mb-6 text-sm">
                Location: <strong>{selectedCity}</strong>
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } rounded focus:outline-none focus:border-white text-base`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } rounded focus:outline-none focus:border-white text-base`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.phone ? "border-red-500" : "border-gray-600"
                  } rounded focus:outline-none focus:border-white text-base`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
              </div>

              {/* Enquiry Type */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">Nature of Enquiry</label>
                <select
                  name="enquiryNature"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.enquiryNature ? "border-red-500" : "border-gray-600"
                  } rounded appearance-none focus:outline-none focus:border-white text-base`}
                  value={formData.enquiryNature}
                  onChange={handleChange}
                >
                  <option className="bg-[#111111]" value="">Please select</option>
                  <option className="bg-[#111111]" value="General Inquiry">General Inquiry</option>
                  <option className="bg-[#111111]" value="Careers">Careers</option>
                  <option className="bg-[#111111]" value="PR & Collaborations">PR & Collaborations</option>
                </select>
                {errors.enquiryNature && (
                  <p className="text-red-500 text-xs mt-2">{errors.enquiryNature}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-4 w-full border border-white py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider"
              >
                SEND REQUEST
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* ---------------------- Map Locations ---------------------- */}
      <section className="relative w-full h-[100vh] bg-black overflow-hidden text-white">
        <img
          src="https://i.pinimg.com/736x/32/2f/55/322f55ad503bfa67cdeaa86c5aec4802.jpg"
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {locations.map((loc, index) => (
          <div
            key={index}
            onClick={() => handleCityClick(loc.city)} // 👈 Make city clickable
            className={`absolute ${loc.style} cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-left`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-400 shadow-md"></div>
              <h2 className="text-lg font-semibold">{loc.city}</h2>
            </div>
            <p className="text-sm leading-tight whitespace-pre-line text-gray-200">
              {loc.phone && <span className="block text-blue-300">{loc.phone}</span>}
              {loc.address}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contacts;
