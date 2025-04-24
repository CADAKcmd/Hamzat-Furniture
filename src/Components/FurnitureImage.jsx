import React from "react";
import { motion } from "framer-motion";

const FurnitureImage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full"
      style={{
        backgroundImage:
          "url(src/assets/interior-design-neoclassical-style-with-furnishings-decor.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "fixed",
      }}
    >
      <div className="text-white pt-36 p-8 px-6 md:px-16 md:mt-16">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="lg:min-h-[70vh] md:w-[85%] space-y-8 p-6 md:p-12"
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl f">
            Elevate your space with luxury furnishings
          </h1>
          <p className="text-white text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            vitae velit et omnis saepe.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FurnitureImage;
