import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Condition = () => {
     const [isOpen, setIsOpen] = useState(true); // default open
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
  return (
     <div className="w-full text-gray-800 border-t my-4">
          <div
            className="cursor-pointer flex justify-between items-center  py-2  rounded-md font-semibold transition-all  "
            onClick={toggleDropdown}
          >
            <span>Condition</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
    
          {isOpen && (
            <div className="">
              <div
                className="
                   font-medium text-gray-600
                   flex py-2 hover:text-black space-x-3 items-center"
              >
                <input type="radio" name="condition" id="any" className="w-4 h-4 accent-blue-600"/>
                <label htmlFor="any">Any</label>
              </div>
              <div
                className="
                   font-medium text-gray-600
                   flex py-2 hover:text-black space-x-3 items-center"
              >
                <input type="radio" name="condition" id="refurbished" className="w-4 h-4 accent-blue-600"/>
                <label htmlFor="refurbished">Refurbished</label>
              </div>
              <div
                className="
                   font-medium text-gray-600
                   flex py-2 hover:text-black space-x-3 items-center"
              >
                <input type="radio" name="condition" id="brand-new" className="w-4 h-4 accent-blue-600"/>
                <label htmlFor="brand-new">Brand new</label>
              </div>
              <div
                className="
                   font-medium text-gray-600
                   flex py-2 hover:text-black space-x-3 items-center"
              >
                <input type="radio" name="condition" id="old-items" className="w-4 h-4 accent-blue-600"/>
                <label htmlFor="old-items">Old items</label>
              </div>
            </div>
          )}
        </div>
  )
}

export default Condition