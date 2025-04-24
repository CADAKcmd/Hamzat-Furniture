import React from "react";
import Carousel from "./Carousel";
import cards from "../Data/CaroselCards"; // Make sure this path is correct

const BlogCards = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-[80%] justify-center bg-black p-4 text-white border-t-2 border-slate-500">
      <h1 className="text-3xl font-bold mb-6">BLOGS</h1>
      <h1 className="text-3xl font-bold mb-6">Featured Cards</h1>
      <Carousel cards={cards} />
    </div>
  );
};

export default BlogCards;
