import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Category = () => {
   const [isOpen, setIsOpen] = useState(true); // default open

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-gray-800 border-t">
      <div
        className="cursor-pointer flex justify-between items-center  py-2  rounded-md font-semibold transition-all  "
        onClick={toggleDropdown}
      >
        <span>Category</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className="">
          <NavLink
            to="/list-view/category/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-gray-600"
              } block  py-2 hover:text-black`
            }
          >
            Mobile Accessories
          </NavLink>
          <NavLink
            to="/list-view/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-gray-600"
              } block  py-2 hover:text-black`
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="/list-view/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-gray-600"
              } block  py-2 hover:text-black`
            }
          >
            Smartphones
          </NavLink>
          <NavLink
            to="/list-view/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-gray-600"
              } block  py-2 hover:text-black`
            }
          >
            Modern Tech
          </NavLink>
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
}

export default Category