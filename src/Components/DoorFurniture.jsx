import { useState } from "react";
import { FaCheck, FaPlay, FaArrowUp, FaTimes } from "react-icons/fa";

export default function DoorFurniture() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className=" py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center w-full gap-10">
      {/* Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
          <div className="relative w-[90%] md:w-[70%] max-w-3xl bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition z-50"
              onClick={() => setShowVideo(false)}
            >
              <FaTimes />
            </button>
            <video controls className="w-full h-60 md:h-96 rounded-lg">
              <source src="/path-to-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Images Section */}
      <div className={`flex gap-6 transition ${showVideo ? "blur-md" : ""}`}>
        <div className="relative group">
          <img
            src="https://img.freepik.com/premium-photo/wooden-door-with-key-3d-illustration_356060-2234.jpg"
            alt="Door Lock"
            className="w-48 md:w-64 lg:w-80 h-auto rounded-lg shadow-md transition-all duration-500 group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-30 backdrop-blur-md">
            <span className="text-white text-lg font-semibold">Door Lock</span>
          </div>
        </div>
        
        <div className="relative group">
          <img
            src="https://img.freepik.com/premium-photo/interior-doors-handle-black-lock-front_156139-606.jpg"
            alt="Door Hinge"
            className="w-48 md:w-64 lg:w-80 h-auto rounded-lg shadow-md transition-all duration-500 group-hover:opacity-50"
          />
          <button 
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg transition-opacity duration-500 group-hover:opacity-100"
          >
            <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-black text-xl">
              <FaPlay />
            </span>
          </button>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-md bg-white bg-opacity-50 p-6 rounded-lg backdrop-blur-md text-black">
        <p className="text-sm uppercase tracking-wide">Functional Accessories</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Door furniture and hardware</h2>
        <p className="mt-4">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        
        <ul className="mt-4 space-y-2">
          <li className="flex items-center"><FaCheck className="text-red-500 mr-2" /> Adipiscing eli sed eiusmod</li>
          <li className="flex items-center"><FaCheck className="text-red-500 mr-2" /> Tempor incididunt</li>
          <li className="flex items-center"><FaCheck className="text-red-500 mr-2" /> Labore et dolore magna</li>
        </ul>
        
        <button className="mt-6 px-6 py-3 bg-red-400 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-500">
          About Us
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800">
        <FaArrowUp />
      </button>
    </section>
  );
}
