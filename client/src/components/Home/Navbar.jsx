import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { Menu } from 'lucide-react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import MobileSearchBar from "../MobileSearchBar";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-white w-full  py-3 border-b border-t border-gray-200">
      {/* mobile search bar */}
      <MobileSearchBar />
      <div className="container md:font-medium text-[#1C1C1C] mx-auto px-4 flex items-center justify-between">
        {/* Left side */}
        <div className="flex  overflow-x-auto items-center md:space-x-4 scrollBar">
          <RxHamburgerMenu className="w-6 h-6 hidden md:block" />

          {/* for mobile view */}
          <div className="md:hidden">
            {location.pathname.startsWith("/list-view") ? (
              <>
                {" "}
                <div className="w-full overflow-x-auto whitespace-nowrap flex md:justify-start space-x-2  md:space-x-6 scrollbar-hide">
                  <Link
                    to="/list-view"
                    className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block"
                  >
                    Tablets
                  </Link>
                  <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                    Phones
                  </span>
                  <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                    Ipads
                  </span>
                  <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                    Laptops
                  </span>
                  <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                    Accessories
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full overflow-x-auto whitespace-nowrap flex md:justify-start space-x-2  md:space-x-6 scrollbar-hide">
                <Link
                  to="/list-view"
                  className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block"
                >
                  All Category
                </Link>
                <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                  Hot Offers
                </span>
                <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                  Gift Boxes
                </span>
                <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                  Projects
                </span>
                <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
                  Menu Item
                </span>
              </div>
            )}
          </div>

{/* for desktop view */}
          <div className="w-full overflow-x-auto whitespace-nowrap hidden md:flex md:justify-start space-x-2   md:space-x-6 scrollbar-hide">
            <Link
              to="/list-view"
              className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block"
            >
              All Category
            </Link>
            <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
              Hot Offers
            </span>
            <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
              Gift Boxes
            </span>
            <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
              Projects
            </span>
            <span className="text-sm bg-gray-100 text-blue-500 md:text-black px-2 py-1 rounded-md md:bg-white md:p-0 md:rounded-none cursor-pointer inline-block">
              Menu Item
            </span>
          </div>

          {/* Help dropdown */}
          <select className="text-sm hidden md:block  focus:outline-none">
            <option>Help</option>
            <option>FAQ</option>
          </select>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4">
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
