import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";

const images = [
  "https://img.freepik.com/premium-photo/modern-interior-kitchen-with-living-room_196776-270.jpg",
  "https://img.freepik.com/premium-photo/modern-kitchen_13598-13.jpg",
  "https://img.freepik.com/premium-photo/modern-art-deco-kitchen-with-classic-elements-glass-facade-built-appliances-interior-beige-colors-3d-rendering_295714-4366.jpg",
  "https://img.freepik.com/premium-photo/modern-bright-clean-kitchen-interior-with-stainless-steel-appliances_29285-120.jpg"
];

const KitchenProjects = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  // Toggle video play state
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  // Navigate through images
  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full">
      {/* Video Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative w-[90%] md:w-[70%] max-w-3xl">
            <button
              className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
              onClick={toggleVideo}
            >
              <FaTimes />
            </button>
            <iframe
              className="w-full h-60 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/S-A0qLTxf-U"
              title="Kitchen Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Image & Content Section */}
      <div className={`flex flex-col md:flex-row h-screen transition ${isPlaying ? "blur-md" : ""}`}>
        {/* Left Section - Auto-Sliding Image */}
        <div className="md:w-1/2 w-full relative">
          <img
            src={images[currentImage]}
            alt="Modern Kitchen"
            className="w-full h-[50vh] md:h-full object-cover transition-all duration-500"
          />
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 w-full bg-[url('https://img.freepik.com/premium-vector/sketch-kitchen-vector-illustration-sketch-style_125494-1300.jpg')] bg-cover bg-center text-white p-6 md:p-10 flex flex-col justify-center bg-opacity-95 relative">
          <h3 className="text-xs md:text-sm uppercase text-gray-200">Modern Design</h3>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Our Popular Kitchen Projects
          </h1>
          <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base">
            Explore our latest kitchen projects designed with elegance and functionality in mind.
          </p>
          
          {/* Play Button */}
          <button
            className="absolute bottom-5 md:bottom-10 right-5 md:right-10 p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition"
            onClick={toggleVideo}
          >
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KitchenProjects;