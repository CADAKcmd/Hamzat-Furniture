import React from "react";
import ContactUs from "../Components/ContactUs";
import FurnitureImage from "../Components/FurnitureImage";
import ProcessData from "../Components/ProcessData";
import AboutUs from "../Components/AboutUs";
import FurnitureCategories from "../Components/FurnitureCategories";
import PremiumServices from "../Components/PremiumServices";
import BlogCards from "../Components/BlogCards";
import FloatingButton from "../Components/FloatingButton"; // Import the button

const Home = () => {
  return (
    <>
      <FurnitureImage />
      <FurnitureCategories />
      <AboutUs />
      <ProcessData />
      <PremiumServices />
      <BlogCards />
      <ContactUs />
      <FloatingButton /> {/* Add the floating button here */}
    </>
  );
};

export default Home;
