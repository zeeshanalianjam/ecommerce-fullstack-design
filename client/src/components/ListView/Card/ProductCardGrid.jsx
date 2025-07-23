import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCardGrid = ({ product }) => {
  return (
    <div className="max-w- mx-auto bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Main Row */}
      <div className="flex flex-col  relative">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt="Product"
            className=" object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 border-t mt-3 relative">
          {/* Price */}
          <div className="flex items-center space-x-2 mt-3">
            <span className="text-xl font-bold text-black">
              {product.currentPrice}
            </span>
            <span className="line-through text-gray-400 text-sm">
              {product.originalPrice}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center text-sm mt-1">
            <div className="flex items-center text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <AiFillStar key={i} />
                ))}
            </div>
            <span className="ml-2 text-yellow-400">{product.rating}</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-3 max-w-xl">
            GoPro HERO6 4K Action <br /> Camera - Black
          </p>
        </div>

        {/* Wishlist Icon */}
        <div className="flex items-start absolute right-0 bottom-16">
          <button className="p-2 rounded-md border shadow-sm hover:bg-gray-100">
            <IoIosHeartEmpty className="text-[#0D6EFD]" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
