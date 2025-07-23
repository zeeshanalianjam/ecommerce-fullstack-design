import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Brands = () => {
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
        <span>Brands</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className=" ">
          <div
            className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
          >
            <input type="checkbox" id="samsung" className="w-4 h-4 accent-blue-600"/>
            <label htmlFor="samsung">Samsung</label>
          </div>
          <div
            className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
          >
            <input type="checkbox" id="samsung" className="w-4 h-4 accent-blue-600"/>
            <label htmlFor="samsung">Apple</label>
          </div>
          <div
            className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
          >
            <input type="checkbox" id="samsung" className="w-4 h-4 accent-blue-600"/>
            <label htmlFor="samsung">Huawei</label>
          </div>
          <div
            className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
          >
            <input type="checkbox" id="samsung" className="w-4 h-4 accent-blue-600"/>
            <label htmlFor="samsung">Pocco</label>
          </div>
          <div
            className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
          >
            <input type="checkbox" id="samsung" className="w-4 h-4 accent-blue-600"/>
            <label htmlFor="samsung">Lenovo</label>
          </div>
          <NavLink
            to="/list-view/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-[#0D6EFD]"
              } block  py-2 hover:text-blue-700`
            }
          >
            Sell All
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Brands;
