import React from "react";

const Style = ({ onStyleChange }) => {
  const style = ["Bohemian", "Farm house", "Modern", "Traditional"];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Style</h2>
      <ul>
        {style.map((item) => (
          <li key={item}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" onChange={() => onStyleChange(item)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Style;


