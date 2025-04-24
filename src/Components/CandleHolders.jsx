import React from "react";
import ProductCard from "./ProductCard";

const CandleHolders = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Paloma Pillaar", price: 70, image: "https://i.pinimg.com/736x/b8/2a/41/b82a4178a900833c86abe4ef81c84acd.jpg" },
    { id: 2, name: "Cerronimmo Bubble Mum", price: 79, image: "https://i.pinimg.com/736x/f5/f2/14/f5f214d8efea1db9677fa6a0acaf2b24.jpg" },
    { id: 3, name: "Threcalo Pillar", price: 100, image: "https://i.pinimg.com/736x/29/e3/ea/29e3ea0186830c74f789c0e026365c57.jpg" },
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


export default CandleHolders;
