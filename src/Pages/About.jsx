import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FloatingButton from "../Components/FloatingButton";
import KitchenProjects from "../Components/KitchenProjects";

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", img: "https://i.pinimg.com/736x/ad/08/5f/ad085fb4032fb51f9dbce4eab1950364.jpg" },
  { name: "Jane Smith", role: "Head Designer", img: "https://i.pinimg.com/736x/5e/87/00/5e8700424201eb225c9a7dea4c3ec7f4.jpg" },
  { name: "Emily Johnson", role: "Marketing Lead", img: "https://i.pinimg.com/736x/e5/45/ca/e545ca570256c9b8969b8fedb4c43b13.jpg" },
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <>
    <div className="w-full flex flex-col items-center gap-10 bg-[url('https://i.pinimg.com/736x/d6/73/41/d6734122148df3c4455124235615764a.jpg')] bg-cover bg-center bg-no-repeat bg-fixed h-full"> 
      {/* Hero Section */}
      <div className="bg-[url('https://img.freepik.com/premium-photo/3d-rendering-interior-modern-living-room_38322-20.jpg?uid=R135999332&ga=GA1.1.644479316.1738232734&semt=ais_hybrid')] bg-cover bg-center h-[60vh] flex items-center w-full justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>
      
      {/* Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
        <p className="text-lg text-gray-200">We are passionate about providing quality furniture that blends style and function. With years of experience, we bring you the best in modern and classic designs.</p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6  bg-opacity-70 backdrop-blur-sm  text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">High-Quality Materials</h3>
            <p className="text-gray-600">We use the finest woods and metals to create durable furniture.</p>
          </div>
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Timeless Designs</h3>
            <p className="text-gray-600">Our pieces are crafted to remain stylish for years.</p>
          </div>
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">Luxury furniture at budget-friendly prices.</p>
          </div>
          <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-gray-600">Sustainability is at the core of our designs.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Carousel */}
      <section className="py-16 px-6 text-center  w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
        <div className="relative max-w-lg mx-auto">
          <div className="flex justify-center">
            <img src={teamMembers[current].img} alt={teamMembers[current].name} className="w-64 h-64 rounded-full border-4 " />
          </div>
          <h3 className="text-xl text-white font-semibold mt-4">{teamMembers[current].name}</h3>
          <p className="text-gray-400">{teamMembers[current].role}</p>
          <div className="flex gap-10 justify-center mt-2">
            <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"><FaChevronLeft /></button>
            <button onClick={nextSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"><FaChevronRight /></button>
          </div>
        </div>
      </section>

      <KitchenProjects/>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[url('src/assets/modern-styled-entryway.jpg')] bg-cover bg-center bg-no bg-repeat text-white text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Let's Furnish Your Home</h2>
        <p className="text-lg mb-6">Explore our collection and find your perfect furniture pieces today.</p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all">  <Link to="/Shop"><h1>Shop Now</h1></Link></button>
      </section>
    </div>
     <FloatingButton />
    </>
  );
}
