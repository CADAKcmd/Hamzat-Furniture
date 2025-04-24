import React from "react";
import ProductCard from "./ProductCard";

const DecorativeObjects = ({ searchTerm = "", filterAndSortProducts, selectedPriceFilter = [] }) => {
  const allProducts = [
    { id: 1, name: "Home Decor", price: 155, image: "https://i.pinimg.com/736x/21/eb/16/21eb16bb40d35b9dc3c5becbc83c5a13.jpg" },
    { id: 2, name: "Bibbi Statue", price: 200, image: "https://i.pinimg.com/736x/c9/90/02/c9900285478ee37e42f3f6677f549f9f.jpg" },
    { id: 3, name: "Drink Malay statue", price: 250, image: "https://i.pinimg.com/736x/71/36/f5/7136f521f56ccc20e91b5b15583674fe.jpg" },
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


export default DecorativeObjects;
