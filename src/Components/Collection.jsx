import React from "react";

const Collection = ({ onCollectionChange }) => {
  const collection = ["Art Deco", "Harmony", "Nature", "Serenity"];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Collection</h2>
      <ul>
        {collection.map((item) => (
          <li key={item}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" onChange={() => onCollectionChange(item)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;
