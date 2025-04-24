import React from "react";
import ProductCard from "./ProductCard";

const Kitchen = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Modern Kitchen", price: 1000, image: "https://i.pinimg.com/736x/77/b8/97/77b897abb35a4b0058bb40265fc52866.jpg" },
    { id: 2, name: "Luxury Kitchen", price: 5000, image: "https://i.pinimg.com/736x/8f/1c/e0/8f1ce0d1b227e1f67d69996a7eb33a33.jpg" },
    { id: 3, name: "White kitchen Luxury", price: 3000, image: "https://i.pinimg.com/736x/cd/31/bf/cd31bf1cac47e3a0aa3f1ff503dffcb9.jpg" },
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
        if (typeof priceRange !== "string") return false; // Ensure priceRange is a string
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


export default Kitchen;
