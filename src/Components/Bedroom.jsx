import React from "react";
import ProductCard from "./ProductCard";

const Bedroom = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Elegant Master Bedroom", price: 499, image: "https://i.pinimg.com/736x/76/80/70/768070292de1bd3ffd0eb7b28c3e38eb.jpg" },
    { id: 2, name: "Nightstand", price: 79, image: "https://i.pinimg.com/736x/89/64/52/896452e7a085dcc34c333a9540df982c.jpg" },
    { id: 3, name: "Kings Wardrobe", price: 399, image: "https://i.pinimg.com/736x/28/9d/c1/289dc12016b1ef139b775f421b9a7881.jpg" },
    { id: 4, name: "Queens Wardrobe", price: 399, image: "https://i.pinimg.com/736x/5c/cd/fc/5ccdfc1efe60f40b62e97637ae2a9272.jpg" }
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


export default Bedroom;
