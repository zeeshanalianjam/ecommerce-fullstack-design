import React from "react";
import { IoCartOutline } from "react-icons/io5";

const SavedForLaterProductCard = ({ product }) => {
  return (
    <div className="w-[180px] md:w-[280px] bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#EEEEEE] p-2 flex justify-center">
        <img src={product.url} alt="Xiaomi Redmi 8" className="  object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <p className="font-medium md:text-xl ">{product.price}</p>
        <div className="text-gray-500 text-sm">
          <h3>{product.name}</h3>
          <p>{product.quality}</p>
        </div>
        <button className="hidden md:flex items-center space-x-2 bg-transparent text-[#0D6EFD] px-5  py-2 rounded-md border shadow hover:scale-105 transition-all duration-300">
          <IoCartOutline size={20} /> <span>Move to cart</span>
        </button>
      </div>
    </div>
  );
};

export default SavedForLaterProductCard;
