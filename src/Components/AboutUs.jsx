import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-black h-fit py-2 px-6 md:px-16">
      <div className="bg-black h-fit grid md:grid-cols-2 sm:grid-cols-2 items-center">
        {/* Parent Image Wrapper (No motion here) */}
        <div className="flex justify-center">
          {/* Image - Slide in from left */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/2.jpg"
            alt="About us"
            className="w-[80%] h-[100%] object-cover"
          />
        </div>

        {/* Parent Text Wrapper (No motion here) */}
        <div className="bg-black p-6 md:p-12 lg:flex lg:flex-col text-white md:justify-between">
          <div>
            <h2 className="text-xl text-slate-200">ABOUT US</h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="text-5xl md:text-4xl lg:text-6xl font-bold"
            >
              We will help you implement your ideas
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="md:mt-6 lg:mt-12 flex flex-col"
          >
            <p className="text-lg mt-6 text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus
              fugiat et quidem expedita.
            </p>
            <button className="mt-6 bg-red-800 text-white py-3 px-6 text-lg font-semibold md:w-64 h-20 hover:bg-red-700 transition-all w-40">
              View all projects
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
