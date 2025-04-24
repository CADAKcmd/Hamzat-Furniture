import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PremiumServices = () => {
  return (
    <section className="bg-black text-white px-6 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side: Image Section (No Animation on Parent) */}
        <div className="relative w-full lg:w-1/2">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://img.freepik.com/premium-photo/image-captures-africanamerican-woman-lounging-comfortably-home_1339901-7604.jpg?uid=R135999332&ga=GA1.1.644479316.1738232734&semt=ais_hybrid"
            alt="Premium Service"
            className="w-full h-auto rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-6 left-6 bg-[#9B815E] text-white p-5 text-lg font-bold w-64"
          >
            Down to the very last detail
          </motion.div>
        </div>

        {/* Right Side: Text Section (Parent is Static) */}
        <div className="w-full lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="uppercase text-sm text-gray-400 tracking-widest"
          >
            Premium Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold mt-2"
          >
            What makes us different
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-gray-400 mt-4"
          >
            Praesent sed leo augue. Integer consectetur massa id egestas pretium.
            Integer hendrerit justo.
          </motion.p>

          {/* Features List (Each Feature Item Animates Separately) */}
          <div className="mt-6 space-y-4">
            {[
              { number: "01.", text: "High quality materials" },
              { number: "02.", text: "Custom design projects" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.5 + index * 0.2,
                }}
                className="flex items-center gap-3"
              >
                <span className="text-gray-500 text-lg font-bold">
                  {item.number}
                </span>
                <p className="text-lg font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <Link to="/About">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-md mt-6"
          >
            About Us
          </motion.button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
