import React from "react";

const Style = ({ onTypeChange }) => {
  const type = ["Candle Holders", "Decorative Objects", "Decorative Trays", "Door Hardware"]

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Type</h2>
      <ul>
        {type.map((item) => (
          <li key={item}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" onChange={() => onTypeChange(item)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Style;



  
  
  
  