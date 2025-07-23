import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Tabs = () => {
  return (
   <nav className="bg-white w-full py-5 ">
      <div className="container font-medium text-[#8B96A5] mx-auto px-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-6 text-sm relative">
          {/* Home */}
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Home</span>
              <FaAngleRight size={12} />
            </div>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home 2</li>
              </ul>
            </div>
          </div>

          {/* Clothings */}
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Clothings</span>
              <FaAngleRight size={12} />
            </div>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shirts</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jackets</li>
              </ul>
            </div>
          </div>

          {/* Men's Wear */}
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Men's wear</span>
              <FaAngleRight size={12} />
            </div>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Formal</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Casual</li>
              </ul>
            </div>
          </div>

          {/* Summer Clothing */}
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Summer clothing</span>
              <FaAngleRight size={12} />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shorts</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cotton Shirts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Tabs;
