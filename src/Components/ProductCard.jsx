import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-60 md:w-72">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      {product.category && <p className="text-gray-600">{product.category}</p>}
      <p className="text-red-600 font-bold mt-1">${product.price}</p>
      <button
        onClick={() => addToCart && addToCart(product)}
        className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-3 hover:bg-red-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
