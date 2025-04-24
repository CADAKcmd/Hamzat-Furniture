import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faInfoCircle, faEdit, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "You haven't filled it up!";
    if (!formData.phone.trim()) newErrors.phone = "You haven't filled it up!";
    if (!formData.email.trim()) newErrors.email = "You haven't filled it up!";
    if (!formData.subject.trim()) newErrors.subject = "You haven't filled it up!";
    if (!formData.message.trim()) newErrors.message = "You haven't filled it up!";
    if (!formData.agree) newErrors.agree = "You must agree before submitting!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[url('https://img.freepik.com/premium-photo/leather-couch_872147-18818.jpg?uid=R135999332&ga=GA1.1.644479316.1738232734&semt=ais_hybrid')] bg-cover bg-center bg-no-repeat py-8 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl gap-0 overflow-hidden rounded-lg shadow-lg">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-6 text-white">
          <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-lg">
            Contact Us
          </motion.h1>

          <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-4xl mb-6">
            Ready to start a <br /> project with us?
          </motion.h1>

          <motion.img initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} 
            src="https://pantry.axiomthemes.com/wp-content/uploads/2024/04/image39-copyright.jpg" 
            alt="Contact" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-black p-8 space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { name: "name", icon: faUser, placeholder: "Name" },
              { name: "phone", icon: faPhone, placeholder: "Phone" },
              { name: "email", icon: faEnvelope, placeholder: "Email Address" },
              { name: "subject", icon: faInfoCircle, placeholder: "Subject" },
            ].map((field, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 + index * 0.2 }}>
                <div className={`flex items-center border-b py-2 ${errors[field.name] ? "border-red-600" : "border-gray-600"}`}>
                  <FontAwesomeIcon icon={field.icon} className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  />
                </div>
                {errors[field.name] && <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>}
              </motion.div>
            ))}

            {/* Message Field */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}>
              <div className={`flex items-start border-b py-2 ${errors.message ? "border-red-600" : "border-gray-600"}`}>
                <FontAwesomeIcon icon={faEdit} className="text-gray-400 mr-3" />
                <textarea
                  placeholder="How can we help you?"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400 h-20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </motion.div>

            {/* Checkbox */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="flex items-center text-gray-400">
              <input type="checkbox" id="agree" className="mr-2"
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              />
              <label htmlFor="agree" className="text-sm">I agree that my data is <a href="#" className="underline">collected and stored</a>.</label>
            </motion.div>
            {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

            {/* Submit Button */}
            <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.4 }} 
              type="submit"
              className="w-36 bg-red-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-red-700 transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-white text-lg" />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
