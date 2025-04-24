import React, { useState } from "react";
import { useEffect } from "react";
import LivingRoom from "../Components/LivingRoom";
import Bedroom from "../Components/Bedroom";
import Dining from "../Components/Dining";
import { Heart, ShoppingCart, Filter, Import } from "lucide-react";
import Categories from "../Components/Categories";
import Collection from "../Components/Collection";
import Style from "../Components/Style";
import Type from "../Components/Type";
import PriceFilter from "../Components/PriceFilter";
import Office from "../Components/Office";
import Kitchen from "../Components/Kitchen";
import ArtDeco from "../Components/ArtDeco";
import Harmony from "../Components/Harmony";
import Nature from "../Components/Nature";
import Serenity from "../Components/Serenity";
import Bohemian from "../Components/Bohemian";
import Farmhouse from "../Components/Farmhouse";
import Modern from "../Components/Modern";
import Traditional from "../Components/Traditional";
import CandleHolders from "../Components/CandleHolders";
import DecorativeObjects from "../Components/DecorativeObjects";
import DecorativeTrays from "../Components/DecorativeTrays";
import DoorHardware from "../Components/DoorHardware";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [AllProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState([]);
  const [rating, setRating] = useState(null);
  const [sortOption, setSortOption] = useState("latest");

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCollectionChange = (collection) => {
    setSelectedCollection((prev) =>
      prev.includes(collection)
        ? prev.filter((l) => l !== collection)
        : [...prev, collection]
    );
  };

  const handleStyleChange = (style) => {
    setSelectedStyle((prev) =>
      prev.includes(style) ? prev.filter((l) => l !== style) : [...prev, style]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((l) => l !== type) : [...prev, type]
    );
  };

  const handlePriceFilterChange = (price) => {
    setSelectedPriceFilter(price);
  };
  
  const filterAndSortProducts = (products) => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "price") {
          return a.price - b.price;
        } else if (sortOption === "popularity") {
          return b.popularity - a.popularity;
        }
        return 0;
      });
  };

  return (
    <div className="mt-16 w-full p-6 flex flex-col lg:flex-row gap-3 relative">
      {/* Sidebar for Filters */}
      <aside className="w-full lg:w-1/4 bg-white text-black p-6 rounded-lg shadow-md border border-white">

        <Categories onCategoryChange={handleCategoryChange} />
        <Collection onCollectionChange={handleCollectionChange} />
        <Style onStyleChange={handleStyleChange} />
        <Type onTypeChange={handleTypeChange} />
        <PriceFilter onPriceFilterChange={handlePriceFilterChange} />

        {/* Rating Filter */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 border-b pb-2">Rating</h2>
          <div className="flex space-x-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                className={`text-xl ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content for Products */}
      <main className="w-full bg-black p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 w-full md:w-1/2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Sort by latest</option>
            <option value="price">Sort by price</option>
            <option value="popularity">Sort by popularity</option>
          </select>
        </div>

        <div className="w-full space-y-6">
          {selectedCategories.includes("Living Room") && (
            <LivingRoom
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCategories.includes("Bedroom") && (
            <Bedroom
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCategories.includes("Dining") && (
            <Dining
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCategories.includes("Office") && (
            <Office
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCategories.includes("Kitchen") && (
            <Kitchen
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
        </div>

        <div className="w-full space-y-6">
          {selectedCollection.includes("Art Deco") && (
            <ArtDeco
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCollection.includes("Harmony") && (
            <Harmony
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCollection.includes("Nature") && (
            <Nature
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedCollection.includes("Serenity") && (
            <Serenity
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
        </div>
        <div className="w-full space-y-6">
          {selectedStyle.includes("Bohemian") && (
            <Bohemian
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedStyle.includes("Farm house") && (
            <Farmhouse
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedStyle.includes("Modern") && (
            <Modern
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedStyle.includes("Traditional") && (
            <Traditional
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
        </div>
        <div className="w-full space-y-6">
          {selectedType.includes("Candle Holders") && (
            <CandleHolders
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedType.includes("Decorative Objects") && (
            <DecorativeObjects
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedType.includes("Decorative Trays") && (
            <DecorativeTrays
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedType.includes("Door Hardware") && (
            <DoorHardware
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
        </div>
        <div className="w-full space-y-6">
          {selectedPriceFilter.includes("Art Deco") && (
            <ArtDeco
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedPriceFilter.includes("Harmony") && (
            <Harmony
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedPriceFilter.includes("Nature") && (
            <Nature
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
          {selectedPriceFilter.includes("Serenity") && (
            <Serenity
              searchTerm={searchTerm}
              filterAndSortProducts={filterAndSortProducts}
              selectedPriceFilter={selectedPriceFilter}
            />
          )}
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-4 space-y-3 flex flex-col">
        <button className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300">
          <ShoppingCart size={24} />
        </button>
        <button className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300">
          <Heart size={24} />
        </button>
        <button className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300">
          <Filter size={24} />
        </button>
      </div>
    </div>
  );
};

export default Shop
