import React from "react";

const Categories = ({ onCategoryChange }) => {
  const categories = ["ALL","Living Room", "Bedroom", "Dining", "Kitchen", "Office"];
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" onChange={() => onCategoryChange(category)} />
              <span>{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;