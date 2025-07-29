import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { Menu } from 'lucide-react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white w-full  py-3 border-b border-t border-gray-200">
      <div className="container font-medium text-[#1C1C1C] mx-auto px-4 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <RxHamburgerMenu className="w-6 h-6 " />

          <Link to="/list-view" className="text-sm  cursor-pointer">All Category</Link>
          <span className="text-sm  cursor-pointer">Hot Offers</span>
          <span className="text-sm  cursor-pointer">Gift Boxes</span>
          <span className="text-sm  cursor-pointer">Projects</span>
          <span className="text-sm  cursor-pointer">Menu Item</span>

          {/* Help dropdown */}
          <select className="text-sm  focus:outline-none">
            <option>Help</option>
            <option>FAQ</option>
          </select>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <select className="text-sm   focus:outline-none">
            <option>English, USD</option>
            <option>Urdu, PKR</option>
          </select>
          <select className="text-sm   focus:outline-none">
            <option>Ship to</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
