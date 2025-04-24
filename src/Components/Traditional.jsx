import React from "react";
import ProductCard from "./ProductCard";

const Traditional = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "King Size Bed", price: 499, image: "bed.jpg" },
    { id: 2, name: "Nightstand", price: 79, image: "nightstand.jpg" },
    { id: 3, name: "Wardrobe", price: 399, image: "wardrobe.jpg" },
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


export default Traditional;
