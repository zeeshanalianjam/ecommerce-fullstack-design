import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PriceRange = () => {

   const [isOpen, setIsOpen] = useState(true); // default open
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999999);

  const handleMinChange = (e) => {

    const val = Number(e.target.value);
    if (val <= maxValue) setMinValue(val);
  };

  const handleMaxChange = (e) => {
    const val = Number(e.target.value);
    if (val >= minValue) setMaxValue(val);
  };

  const handleApply = () => {
    alert(`Price Range Applied: ${minValue} - ${maxValue}`);
  };

  return (
    <div className="w-full text-gray-800 border-t my-4">
         <div
           className="cursor-pointer flex justify-between items-center  py-2  rounded-md font-semibold transition-all  "
           onClick={toggleDropdown}
         >
           <span>Price Range</span>
           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
         </div>


{isOpen && (
  <>
   {/* Slider */}
      <div className="flex flex-col space-y-2">
        <input
          type="range"
          min="0"
          max="999999"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <input
          type="range"
          min="0"
          max="999999"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
      </div>

      {/* Min & Max Inputs */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          <label className="text-xs text-gray-600">Min</label>
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-600">Max</label>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="w-full bg-transparent text-blue-600 font-medium bg-white border mt-2 py-2 "
      >
        Apply
      </button>
  </>
)}
     
    </div>
  )
}

export default PriceRange