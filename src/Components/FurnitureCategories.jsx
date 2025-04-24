import React, { useState } from "react";
import { motion } from "framer-motion";

const FurnitureCategories = () => {
  const [active, setActive] = useState("Entryway");

  const categories = [
    { name: "Entryway", color: "text-white", arrowColor: "text-gray-400" },
    { name: "Living room", color: "text-white", arrowColor: "text-gray-400" },
    { name: "Bedroom", color: "text-white", arrowColor: "text-gray-400" },
  ];

  return (
    <section
      className="relative w-full px-6 lg:px-20 py-16 flex justify-around items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('src/assets/dark-fantasy-scene.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full max-w-[1300px] mx-auto"
      >
        {/* Left Section */}
        <div className="lg:w-1/3 max-w-md">
          <h1 className="text-4xl text-white lg:text-6xl font-bold leading-tight">
            Premium furniture for elegance & comfort
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 mt-10 lg:mt-0 space-y-8 lg:ms-20">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`cursor-pointer transition-all ${
                active === category.name ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActive(category.name)}
            >
              <h2 className={`text-3xl lg:text-5xl font-bold ${category.color}`}>
                {category.name}
              </h2>
              <p className="text-gray-400 mt-2 max-w-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <span className={`text-xl mt-3 inline-block ${category.arrowColor}`}>
                →
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FurnitureCategories;
