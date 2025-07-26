// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// // Assuming ContactFormModal is a separate component or integrated into a new page
// // For this example, let's just make it a simple placeholder for the new page content
// const ContactFormPage = ({ selectedCity }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     enquiryNature: "",
//   });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits";
//     }
//     if (!formData.enquiryNature.trim())
//       newErrors.enquiryNature = "Please select an enquiry type";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("✅ Form submitted:", formData, "City:", selectedCity);
//       alert("Form Submitted!"); // Or navigate away, show success message
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#2a2a2a] flex justify-center items-center font-sans px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         className="bg-[#1f1f1f] text-white p-8 rounded-lg w-full max-w-lg relative shadow-lg"
//       >
//         <h2 className="text-2xl font-semibold mb-2 text-center">
//           Don’t hesitate to contact us
//         </h2>

//         {selectedCity && (
//           <p className="text-center text-gray-400 mb-6 text-sm">
//             Location: <strong>{selectedCity}</strong>
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm mb-2 text-gray-300">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               className={`w-full px-4 py-3 bg-transparent border ${
//                 errors.fullName ? "border-red-500" : "border-gray-600"
//               } rounded focus:outline-none focus:border-white text-base`}
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className={`w-full px-4 py-3 bg-transparent border ${
//                 errors.email ? "border-red-500" : "border-gray-600"
//               } rounded focus:outline-none focus:border-white text-base`}
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-2">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone"
//               className={`w-full px-4 py-3 bg-transparent border ${
//                 errors.phone ? "border-red-500" : "border-gray-600"
//               } rounded focus:outline-none focus:border-white text-base`}
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">
//               Nature of Enquiry
//             </label>
//             <select
//               name="enquiryNature"
//               className={`w-full px-4 py-3 bg-transparent border ${
//                 errors.enquiryNature ? "border-red-500" : "border-gray-600"
//               } rounded appearance-none focus:outline-none focus:border-white text-base`}
//               value={formData.enquiryNature}
//               onChange={handleChange}
//             >
//               <option className="bg-[#111111]" value="">
//                 Please select
//               </option>
//               <option className="bg-[#111111]" value="General Inquiry">
//                 General Inquiry
//               </option>
//               <option className="bg-[#111111]" value="Careers">
//                 Careers
//               </option>
//               <option className="bg-[#111111]" value="PR & Collaborations">
//                 PR & Collaborations
//               </option>
//             </select>
//             {errors.enquiryNature && (
//               <p className="text-red-500 text-xs mt-2">
//                 {errors.enquiryNature}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
//           >
//             Submit Enquiry
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// const ContactSection = () => {
//   const [selectedCity, setSelectedCity] = useState("Mumbai"); // Keep selectedCity for map interaction

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const handleCityClick = (city) => {
//     setSelectedCity(city);
//     // You might also want to navigate to the contact form page here
//     // or set a state that opens a modal with the pre-selected city
//   };

//   return (
//     <>
//       <section
//         className="min-h-[110vh] bg-[#151515] flex items-end justify-center px-6 md:px-12 lg:px-20 pt-20 pb-20"
//         data-aos="fade-down"
//         data-aos-duration="1000"
//       >
//         <div className="w-[60%] max-w-6xl text-white text-left">
//           <h2
//             className="text-2xl md:text-4xl leading-tight mb-16 tracking-wide font-semibold"
//             data-aos="fade-up"
//           >
//             Get in touch
//             <br />
//             with us
//           </h2>

//           <div className="flex flex-col md:flex-row md:gap-40 gap-10 mb-16 text-xs">
//             <div data-aos="fade-up" data-aos-delay="200">
//               <p className="text-[#666666] mb-1 text-[13px]">
//                 General Inquiries:
//               </p>
//               <p className="text-white text-[13px]">info@yodezeen.com</p>
//             </div>
//             <div data-aos="fade-up" data-aos-delay="400">
//               <p className="text-[#666666] mb-1 text-[12px]">
//                 PR&amp;Collaborations:
//               </p>
//               <p className="text-white text-[13px]">pr@yodezeen.com</p>
//             </div>
//             <div data-aos="fade-up" data-aos-delay="600">
//               <p className="text-[#666666] mb-1 text-[13px]">Careers:</p>
//               <p className="text-white text-[13px]">hr@yodezeen.com</p>
//             </div>
//           </div>

//           <p
//             className="text-[#666666] text-[14px] tracking-[0.09em] leading-[2] mb-12 w-full max-w-[400px]"
//             style={{ fontFamily: "Circe, Arial, Helvetica, sans-serif" }}
//             data-aos="fade-up"
//             data-aos-delay="800"
//           >
//             We are ready to lead you into the exciting world of architecture and
//             interior design.
//           </p>

//           <div data-aos="fade-up" data-aos-delay="1000">
//             {/* Use Link component to navigate to /contact-form */}
//             <Link
//               to="/contact"
//               className="relative w-[260px] py-4 uppercase text-[12px] font-semibold tracking-wider text-white border border-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-black group inline-block text-center"
//             >
//               <span className="relative z-10">Send Request</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Map Section (remains the same) */}
//       <section className="relative w-full h-screen bg-[#111111] overflow-hidden">
//         {/* Background Map Image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/map.png"
//             alt="World Map"
//             className="w-full h-full object-cover object-center"
//             style={{ opacity: 0.15 }}
//           />
//         </div>

//         {/* Markers Layer */}
//         <div className="relative z-10 w-full h-full text-white">
//           {/* Los Angeles */}
//           <div
//             onClick={() => handleCityClick("Los Angeles")}
//             className="absolute left-[17%] top-[40%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-left group"
//           >
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
//               <h2 className="text-xl font-semibold text-white">Los Angeles</h2>
//             </div>
//             <div
//               className="ml-7"
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "21px",
//                 fontWeight: 300,
//                 color: "#BDBDBD",
//               }}
//             >
//               <p className="text-white font-medium">+1 917 400 0230</p>
//               <p>24151 Ventura blvd unit 370</p>
//               <p>Calabasas, CA 91302</p>
//             </div>
//           </div>

//           {/* Miami */}
//           <div
//             onClick={() => handleCityClick("Miami")}
//             className="absolute left-[29%] top-[63%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-left group"
//           >
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
//               <h2 className="text-xl font-semibold text-white">Miami</h2>
//             </div>

//             <div
//               className="ml-7"
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "21px",
//                 fontWeight: 300,
//                 color: "#BDBDBD",
//               }}
//             >
//               <p className="text-white font-medium">+1 305 213 1321</p>
//               <p>25 NW 34th st</p>
//               <p>Miami, FL 33127</p>
//             </div>
//           </div>

//           {/* London */}
//           <div
//             onClick={() => handleCityClick("London")}
//             className="absolute right-[34%] top-[32%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
//           >
//             <div className="flex items-center gap-3 mb-2 justify-end">
//               <h2 className="text-xl font-semibold text-white">London</h2>
//               <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
//             </div>
//             <div
//               className="text-sm leading-relaxed text-gray-300 mr-7"
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "21px",
//                 fontWeight: 300,
//                 color: "#BDBDBD",
//               }}
//             >
//               <p>70 Brompton Road, SW3 1ER</p>
//             </div>
//           </div>
//           <div
//             onClick={() => handleCityClick("Warsaw")}
//             className="absolute left-[59%] top-[38%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
//           >
//             <div className="flex items-center gap-3 mb-2 justify-end">
//               <h2 className="text-xl font-semibold text-white">Warsaw</h2>
//               <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
//             </div>

//             <div
//               className="ml-7"
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "21px",
//                 fontWeight: 300,
//                 color: "#BDBDBD",
//               }}
//             >
//               <p>2 Franciszka Nullo st 3rd floor,</p>
//               <p>00-486 Warsaw, Poland</p>
//             </div>
//           </div>

//           {/* Kyiv */}
//           <div
//             onClick={() => handleCityClick("Kyiv")}
//             className="absolute left-[70%] top-[40%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
//           >
//             <div className="flex items-center gap-3 mb-2 justify-end">
//               <h2 className="text-xl font-semibold text-white">Kyiv</h2>
//               <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
//             </div>

//             <div
//               className="ml-7"
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "21px",
//                 fontWeight: 300,
//                 color: "#BDBDBD",
//               }}
//             >
//               <p className="text-white font-medium">+38 068 000 0670</p>
//               <p>4 Lypynskoho st</p>
//               <p>office 15-16</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactSection;



// ContactSection.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Make sure framer-motion is installed if you use it in other parts
import AOS from "aos";
import "aos/dist/aos.css";
// Link को हटा दिया क्योंकि अब बटन मोडल खोलेगा, नेविगेट नहीं करेगा
// import { Link } from "react-router-dom"; // No longer needed for this specific button

import ContactFormModal from "../about/ContactFormModal "; // ✅ Make sure this path is correct

const ContactSection = () => {
  const [modalOpen, setModalOpen] = useState(false); // ✅ यह स्टेट मोडल की दृश्यता को नियंत्रित करती है
  const [selectedCity, setSelectedCity] = useState("Mumbai"); // Initial city

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    // आप यहां भी मोडल खोल सकते हैं अगर मैप पर शहर क्लिक करने से फॉर्म खुलना चाहिए
    // setModalOpen(true);
  };

  const handleOpenModal = () => {
    setModalOpen(true); // <-- ✅ यह मोडल को खोलता है
    console.log("Modal opened!"); // Debugging log
  };

  const handleCloseModal = () => {
    setModalOpen(false); // <-- ✅ यह मोडल को बंद करता है
    console.log("Modal closed!"); // Debugging log
  };

  return (
    <>
      <section
        className="min-h-[110vh] bg-[#151515] flex items-end justify-center px-6 md:px-12 lg:px-20 pt-20 pb-20"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="w-[60%] max-w-6xl text-white text-left">
          <h2
            className="text-2xl md:text-4xl leading-tight mb-16 tracking-wide font-semibold"
            data-aos="fade-up"
          >
            Get in touch
            <br />
            with us
          </h2>

          <div className="flex flex-col md:flex-row md:gap-40 gap-10 mb-16 text-xs">
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-[#666666] mb-1 text-[13px]">
                General Inquiries:
              </p>
              <p className="text-white text-[13px]">info@yodezeen.com</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-[#666666] mb-1 text-[12px]">
                PR&amp;Collaborations:
              </p>
              <p className="text-white text-[13px]">pr@yodezeen.com</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <p className="text-[#666666] mb-1 text-[13px]">Careers:</p>
              <p className="text-white text-[13px]">hr@yodezeen.com</p>
            </div>
          </div>

          <p
            className="text-[#666666] text-[14px] tracking-[0.09em] leading-[2] mb-12 w-full max-w-[400px]"
            style={{ fontFamily: "Circe, Arial, Helvetica, sans-serif" }}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            We are ready to lead you into the exciting world of architecture and
            interior design.
          </p>

          <div data-aos="fade-up" data-aos-delay="1000">
            {/* यह अब एक साधारण बटन है जो मोडल को खोलता है */}
            <button
              className="relative w-[260px] py-4 uppercase text-[12px] font-semibold tracking-wider text-white border border-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-black group"
              onClick={handleOpenModal} // <-- ✅ यह मोडल को खोलेगा
            >
              <span className="relative z-10">Send Request</span>
            </button>
          </div>
        </div>
      </section>

      {/* ✅ महत्वपूर्ण: मोडल को तभी रेंडर करें जब modalOpen true हो */}
      {modalOpen && (
        <ContactFormModal
          onClose={handleCloseModal} // <-- ✅ यह फंक्शन मोडल को बंद करने के लिए पास किया गया है
          selectedCity={selectedCity}
        />
      )}

      {/* Map Section (Remains the same) */}
      <section className="relative w-full h-screen bg-[#111111] overflow-hidden">
        {/* Background Map Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/map.png"
            alt="World Map"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.15 }}
          />
        </div>

        {/* Markers Layer */}
        <div className="relative z-10 w-full h-full text-white">
          {/* Los Angeles */}
          <div
            onClick={() => handleCityClick("Los Angeles")}
            className="absolute left-[17%] top-[40%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-left group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
              <h2 className="text-xl font-semibold text-white">Los Angeles</h2>
            </div>
            <div
              className="ml-7"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 300,
                color: "#BDBDBD",
              }}
            >
              <p className="text-white font-medium">+1 917 400 0230</p>
              <p>24151 Ventura blvd unit 370</p>
              <p>Calabasas, CA 91302</p>
            </div>
          </div>

          {/* Miami */}
          <div
            onClick={() => handleCityClick("Miami")}
            className="absolute left-[29%] top-[63%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-left group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
              <h2 className="text-xl font-semibold text-white">Miami</h2>
            </div>

            <div
              className="ml-7"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 300,
                color: "#BDBDBD",
              }}
            >
              <p className="text-white font-medium">+1 305 213 1321</p>
              <p>25 NW 34th st</p>
              <p>Miami, FL 33127</p>
            </div>
          </div>

          {/* London */}
          <div
            onClick={() => handleCityClick("London")}
            className="absolute right-[34%] top-[32%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
          >
            <div className="flex items-center gap-3 mb-2 justify-end">
              <h2 className="text-xl font-semibold text-white">London</h2>
              <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
            </div>
            <div
              className="text-sm leading-relaxed text-gray-300 mr-7"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 300,
                color: "#BDBDBD",
              }}
            >
              <p>70 Brompton Road, SW3 1ER</p>
            </div>
          </div>
          <div
            onClick={() => handleCityClick("Warsaw")}
            className="absolute left-[59%] top-[38%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
          >
            <div className="flex items-center gap-3 mb-2 justify-end">
              <h2 className="text-xl font-semibold text-white">Warsaw</h2>
              <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
            </div>

            <div
              className="ml-7"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 300,
                color: "#BDBDBD",
              }}
            >
              <p>2 Franciszka Nullo st 3rd floor,</p>
              <p>00-486 Warsaw, Poland</p>
            </div>
          </div>

          {/* Kyiv */}
          <div
            onClick={() => handleCityClick("Kyiv")}
            className="absolute left-[70%] top-[40%] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-right group"
          >
            <div className="flex items-center gap-3 mb-2 justify-end">
              <h2 className="text-xl font-semibold text-white">Kyiv</h2>
              <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
            </div>

            <div
              className="ml-7"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 300,
                color: "#BDBDBD",
              }}
            >
              <p className="text-white font-medium">+38 068 000 0670</p>
              <p>4 Lypynskoho st</p>
              <p>office 15-16</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;