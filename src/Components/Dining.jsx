import React from "react";
import ProductCard from "./ProductCard";

const Dining = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Round Tble", price: 400, image: "https://i.pinimg.com/736x/4a/fb/72/4afb72acceb9ca3db49149790bfed358.jpg" },
    { id: 2, name: "maiden Table", price: 600, image: "https://i.pinimg.com/736x/fc/50/03/fc5003c251d9a4662615067387b7f568.jpg" },
    { id: 3, name: "Darcey Table", price: 399, image: "https://i.pinimg.com/736x/b6/25/1b/b6251b2ccb0a5b6623d6071ba65194bd.jpg" },
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


export default Dining;
