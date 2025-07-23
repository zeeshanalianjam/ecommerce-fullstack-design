import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Ratings = () => {
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
        <span>Ratings</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className=" ">
          <div
            className="
                  font-medium text-gray-600
                  flex py-2 hover:text-black space-x-3 items-center"
          >
            <input
              type="checkbox"
              id="fivestar"
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="fivestar">
              <div className="flex items-center text-yellow-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
              </div>
            </label>
          </div>
          <div
            className="
                  font-medium text-gray-600
                  flex py-2 hover:text-black space-x-3 items-center"
          >
            <input
              type="checkbox"
              id="fourstar"
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="fourstar">
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <AiFillStar key={i}  className={i < 4 ? "text-yellow-500" : "text-gray-300"}/>
                  ))}
              </div>
               </label>
          </div>
          <div
            className="
                  font-medium text-gray-600
                  flex py-2 hover:text-black space-x-3 items-center"
          >
            <input
              type="checkbox"
              id="threestar"
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="threestar">
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <AiFillStar key={i}  className={i < 3 ? "text-yellow-500" : "text-gray-300"} />
                  ))}
              </div>
            </label>
          </div>
          <div
            className="
                  font-medium text-gray-600
                  flex py-2 hover:text-black space-x-3 items-center"
          >
            <input
              type="checkbox"
              id="twostar"
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="twostar">
              <div className="flex items-center">
                {Array(5
                )
                  .fill()
                  .map((_, i) => (
                    <AiFillStar key={i}  className={i < 2 ? "text-yellow-500" : "text-gray-300"} />
                  ))}
              </div>
            </label>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Ratings;
