import React from "react";
import ProductCard from "./ProductCard";

const LivingRoom = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Luxury Home", price: 2000, image: "https://i.pinimg.com/736x/79/65/c3/7965c3347c27ec98e6f45fce9044cae9.jpg" },
    { id: 2, name: "Luxury Hill", price: 4000, image: "https://i.pinimg.com/736x/4c/e5/11/4ce511c69838eaaea1c36ae262b40a62.jpg" },
    { id: 3, name: "IDW Luxury", price: 399, image: "https://i.pinimg.com/736x/2b/76/cc/2b76cc89c6c9553288e83f48495a5357.jpg" },
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

export default LivingRoom;
