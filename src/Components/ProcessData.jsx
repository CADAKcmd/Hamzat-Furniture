import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDesktop,
  faFileAlt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ProcessData = () => {
  return (
    <>
      {/* Process Section */}
      <div className="bg-black px-6 md:px-16 py-2 bg-cover bg-no-repeat bg-center">
        <section className="text-white lg:flex lg:space-x-32 lg:w-[100%] py-12 px-6 md:px-16">
          {/* Left Section (Heading + Description) */}
          <div className="max-w-4xl mx-auto lg:space-y-8 lg:text-left text-center lg:w-[50%]">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="uppercase text-gray-200 font-semibold"
            >
              Working Process
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Individual approach to interior projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="mt-4 text-gray-700 opacity-5 font-bold"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </motion.p>
          </div>

          {/* Right Section (Process Items) */}
          <div className="mt-12 lg:flex lg:flex-col gap-8 space-y-3 md:grid-cols-2 max-w-5xl mx-auto md:space-y-6 lg:my-8">
            {/* Process Items */}
            {[
              { icon: faComments, title: "Project discussion" },
              { icon: faDesktop, title: "Project visualization" },
              { icon: faFileAlt, title: "Documents preparation" },
              { icon: faTruck, title: "Production & delivery" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.2 * index,
                }}
                className="flex items-start lg:w-[70%] lg:my-6 space-x-4"
              >
                <button className="bg-gray-800 p-4 rounded-full hover:bg-black transition duration-300 active:scale-95">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-white text-xl"
                  />
                </button>
                <div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-300 mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProcessData;
