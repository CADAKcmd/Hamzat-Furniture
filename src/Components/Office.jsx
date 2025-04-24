import React from "react";
import ProductCard from "./ProductCard";

const Office = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Maculine Home Office", price: 4566, image: "https://i.pinimg.com/736x/a0/31/44/a03144f40e238d19cbe4ca9b8ec4807e.jpg" },
    { id: 2, name: "Minimalist Office", price: 3000, image: "https://i.pinimg.com/736x/da/d6/b9/dad6b9d24478a6f5ff45d34ee4fe4cdd.jpg" },
    { id: 3, name: "Luxury Office", price: 399, image: "https://i.pinimg.com/736x/41/c4/c8/41c4c873a29da592e84b70841b7122e8.jpg" },
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


export default Office;
