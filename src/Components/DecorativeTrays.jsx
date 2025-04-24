import React from "react";
import ProductCard from "./ProductCard";

const DecorativeTrays = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Linkove Tray", price: 100, image: "https://i.pinimg.com/736x/df/5e/e4/df5ee4dcfbe588970a2e67315abd33c7.jpg" },
    { id: 2, name: "Bone Inlay Tray", price: 79, image: "https://i.pinimg.com/736x/ea/ae/a6/eaaea65649441eae39cf1edde7662848.jpg" },
    { id: 3, name: "Brass Gold Tray", price: 60, image: "https://i.pinimg.com/736x/2d/d1/96/2dd19607c84d41c78e00d6e3d27afc1a.jpg" },
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


export default DecorativeTrays;
