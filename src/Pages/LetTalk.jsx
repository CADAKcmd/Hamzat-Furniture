import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faInfoCircle, faPencilAlt, faPaperPlane, faBuilding, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function LetTalk() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", agree: false });
  const [errors, setErrors] = useState({});
  const [location, setLocation] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key] && key !== "agree") {
        newErrors[key] = "This field is required";
      }
    });
    if (!form.agree) {
      newErrors["agree"] = "You must agree before submitting";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        (error) => {
          alert("Location access denied");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-8 bg-gray-100 min-h-screen mt-16 w-full">
    <h2 className="text-3xl font-bold">Contact Us</h2>
    <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg w-full md:gap-6 max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-1/3 space-y-4">
        <h3 className="text-xl font-semibold mb-4">Contact details</h3>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBuilding} />
            <span>785 15th Street, Office 478</span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapPin} />
            <span>Berlin, De 81566</span>
          </p>
          <p className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@email.com</span>
          </p>
          <p className="flex items-center space-x-2 font-bold">
            <FontAwesomeIcon icon={faPhone} />
            <span>+1 840 841 25 69</span>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-blue-400 text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-pink-500 text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div>
              <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} />
                <span>Name</span>
              </label>
              <input type="text" className="w-full p-2 border-b-2 border-transparent focus:border-gray-500 outline-none" placeholder="Your Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email Address</span>
              </label>
              <input type="email" className="w-full p-2 border-b-2 border-transparent focus:border-gray-500 outline-none" placeholder="Your Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div>
              <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>Phone</span>
              </label>
              <input type="tel" className="w-full p-2 border-b-2 border-transparent focus:border-gray-500 outline-none" placeholder="Your Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>Subject</span>
              </label>
              <input type="text" className="w-full p-2 border-b-2 border-transparent focus:border-gray-500 outline-none" placeholder="Subject" onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPencilAlt} />
              <span>Message</span>
            </label>
            <textarea className="w-full p-2 border-b-2 border-transparent focus:border-gray-500 outline-none" placeholder="How can we help you?" onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" onChange={(e) => setForm({ ...form, agree: e.target.checked })} />
            <label>I agree that my data is collected and stored.</label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
          <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Get in Touch</span>
          </button>
        </form>
      </div>
      <button onClick={handleLocate} className="bg-blue-500 text-white py-2 px-4 rounded-md">Locate Me</button>
      {location && (
        <iframe
          src={`https://www.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
          className="w-full max-w-4xl h-64 mt-4 border"
        ></iframe>
      )}
    </div>
  );
}
