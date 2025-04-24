import React from "react";
import ProductCard from "./ProductCard";

const ArtDeco = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Luxury Plant Flower", price: 499, image: "https://i.pinimg.com/736x/ba/63/29/ba632983d0eb6d632a5915079ecd12d4.jpg" },
    { id: 2, name: "Traditional Bookshelves", price: 150, image: "https://i.pinimg.com/736x/41/1d/8e/411d8ef3098351d70da1e708021f0769.jpg" },
    { id: 3, name: "Steady Tortoise Carving", price: 399, image: "https://i.pinimg.com/736x/80/bd/1e/80bd1eff7fb2da2aca0ffd9c3ba3eb1b.jpg" },
  ];

  // Apply search filter
  let filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting if function exists
  if (typeof filterAndSortProducts === "function") {
    filteredProducts = filterAndSortProducts(filteredProducts);
  }

  // Apply price filtering
  if (selectedPriceFilter.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedPriceFilter.some((priceRange) => {
        if (typeof priceRange !== "string") return false;  
        const [min, max] = priceRange.split("-").map(Number);
        return product.price >= min && product.price <= max;
      })
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-white text-center col-span-full">No products found.</p>
      )}
    </div>
  );
};

export default ArtDeco;
