import { useState } from "react";
import { FaChair, FaBed, FaLaptop, FaWarehouse, FaArrowRight } from "react-icons/fa";

const categories = [
  { icon: FaChair, title: "Tables and chairs" },
  { icon: FaBed, title: "Bedrooms and beds" },
  { icon: FaLaptop, title: "Desks and office" },
  { icon: FaWarehouse, title: "Swing cabinets" },
];

export default function FurnitureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  w-full justify-between md:h-72 p-6">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
}

function CategoryCard({ category }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center p-6 transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <category.icon className={`text-8xl md:text-9xl transition-all duration-300 ${hover ? "text-white scale-110" : "text-gray-600"}`} />
      <h3 className="mt-4 text-lg font-semibold text-gray-200">{category.title}</h3>
      <div className="flex items-center mt-2 cursor-pointer transition-all duration-300 ${hover ? 'text-white' : 'text-gray-600'}`">
        <FaArrowRight 
          size={24} 
          className={`transform transition-transform duration-300 ${hover ? "translate-x-2 text-white" : "translate-x-0 text-gray-600"}`} 
        />
        <span className={`text-sm font-medium transition-opacity duration-300 ${hover ? "text-white ml-2" : "opacity-0"}`}>Read more</span>
      </div>
    </div>
  );
}
