import React, { useState } from "react";

const PriceFilter = ({ onPriceFilterChange }) => {
  const priceRanges = [
    { label: "$0 - $100", value: "0-100" },
    { label: "$101 - $500", value: "101-500" },
    { label: "$501 - $1000", value: "501-1000" },
    { label: "$1001 - $5000", value: "1001-5000" }
  ];

  const [selectedPrices, setSelectedPrices] = useState([]);

  const handlePriceSelection = (value) => {
    setSelectedPrices((prev) => {
      const updatedPrices = prev.includes(value)
        ? prev.filter((price) => price !== value)
        : [...prev, value];

      onPriceFilterChange(updatedPrices);
      return updatedPrices;
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Price</h2>
      <div className="flex flex-col space-y-2">
        {priceRanges.map((range) => (
          <label key={range.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={range.value}
              checked={selectedPrices.includes(range.value)}
              onChange={() => handlePriceSelection(range.value)}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
