import { motion } from "framer-motion";

export default function FurnitureCraftsmanship() {
  return (
    <div className="flex justify-center items-center h-32 md:h-48 lg:h-80 overflow-hidden relative  w-full">
      <motion.div
        animate={{ x: ["0%", "-100%"] }} // Start immediately from visible position
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }} // No delay
        className="absolute whitespace-nowrap flex space-x-8"
      >
        {[...Array(10)].map((_, index) => (
          <h1
            key={index}
            className="text-5xl md:text-7xl lg:text-[10rem] font-bold text-white flex items-center"
          >
            Furniture Craftsmanship
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="text-gray-400 text-6xl md:text-8xl lg:text-[12rem] ml-4"
            >
              ★
            </motion.span>
          </h1>
        ))}
      </motion.div>
    </div>
  );
}
