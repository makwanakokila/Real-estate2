// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for potential redirection

// const ContactFormModal = ({ onClose, selectedCity }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     enquiryNature: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // Initialize useNavigate hook

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
//     if (!formData.enquiryNature.trim()) {
//       newErrors.enquiryNature = "Please select an enquiry type";
//     }
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
//       // Here, you would typically send the form data to your backend API.
//       // Example:
//       // fetch('/api/submit-contact', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(formData),
//       // })
//       // .then(response => response.json())
//       // .then(data => {
//       //   console.log('Success:', data);
//       //   onClose(); // Close modal on success
//       //   navigate('/thank-you'); // Navigate to a thank-you page
//       // })
//       // .catch((error) => {
//       //   console.error('Error:', error);
//       //   // Handle error, maybe show an error message in the modal
//       // });

//       // For demonstration, close modal and navigate immediately:
//       onClose(); // Close the modal
//       navigate("/thank-you"); // Navigate to a thank-you page after successful submission
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4 font-sans">
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         className="bg-[#1f1f1f] text-white p-8 rounded-lg w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto"
//       >
//         {/* Close icon */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white text-3xl font-light hover:scale-110 transition-transform"
//           aria-label="Close"
//         >
//           &times;
//         </button>

//         <h2 className="text-3xl font-semibold mb-4 text-center">
//           Don’t hesitate to contact us
//         </h2>

//         {selectedCity && (
//           <p className="text-center text-gray-400 mb-6 text-sm">
//             Location: <strong>{selectedCity}</strong>
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Full Name</label>
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

//           {/* Email */}
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

//           {/* Phone */}
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

//           {/* Enquiry Nature */}
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
//               <p className="text-red-500 text-xs mt-2">{errors.enquiryNature}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-4 w-full border border-white py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider"
//           >
//             SEND REQUEST
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactFormModal;


// ContactFormModal.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For redirection after form submission

const ContactFormModal = ({ onClose, selectedCity }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryNature: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

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
    if (!formData.enquiryNature.trim()) {
      newErrors.enquiryNature = "Please select an enquiry type";
    }
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
      // Here, you would typically send the form data to your backend API.
      // For demonstration, close modal and navigate immediately:
      onClose(); // <-- ✅ This calls the onClose prop to close the modal
      navigate("/thank-you"); // Navigate to a thank-you page after successful submission
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="bg-[#1f1f1f] text-white p-8 rounded-lg w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Close icon - This button calls the onClose prop */}
        <button
          onClick={onClose} // <-- ✅ This is the key to closing the modal
          className="absolute top-4 right-4 text-white text-3xl font-light hover:scale-110 transition-transform"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-semibold mb-4 text-center">
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
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>
            )}
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
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
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
            {errors.phone && (
              <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
            )}
          </div>

          {/* Enquiry Nature */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Nature of Enquiry
            </label>
            <select
              name="enquiryNature"
              className={`w-full px-4 py-3 bg-transparent border ${
                errors.enquiryNature ? "border-red-500" : "border-gray-600"
              } rounded appearance-none focus:outline-none focus:border-white text-base`}
              value={formData.enquiryNature}
              onChange={handleChange}
            >
              <option className="bg-[#111111]" value="">
                Please select
              </option>
              <option className="bg-[#111111]" value="General Inquiry">
                General Inquiry
              </option>
              <option className="bg-[#111111]" value="Careers">
                Careers
              </option>
              <option className="bg-[#111111]" value="PR & Collaborations">
                PR & Collaborations
              </option>
            </select>
            {errors.enquiryNature && (
              <p className="text-red-500 text-xs mt-2">{errors.enquiryNature}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full border border-white py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider"
          >
            SEND REQUEST
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactFormModal;