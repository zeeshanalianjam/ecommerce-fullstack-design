import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleViewProductDetails = () => {
    navigate(`/details/${product._id}/description`, { state: { product } });
  }
  return (
    <div className="max-w- mx-auto bg-white border border-gray-200 rounded-lg p-4 my-4 shadow-sm">
      {/* Main Row */}
      <div className="flex space-x-2 items-center relative">
        {/* Product Image */}
        <div>
          <img
            src={product.image?.[0]}
            alt="Product"
            className="w-48 object-scale-down rounded cursor-pointer"
            onClick={handleViewProductDetails}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-gray-800 font-semibold text-lg">
            {product.name}
            {/* {product.title} */}
          </h2>

          {/* Price */}
          <div className="flex items-center space-x-2 mt-3">
            <span className="text-xl font-bold text-black">
              {product.price.currentPrice} PKR
              {/* {product.price} */}
            </span>
            <span className="line-through text-gray-400 text-sm">
              {product.price.originalPrice} PKR
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
            <span className="ml-2 text-gray-600">{product.ratings}</span>
            {/* <span className="ml-2 text-gray-600">{product.rating.rate}</span> */}
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600">{product.orders} orders</span>
            {/* <span className="text-gray-600">{product.category} orders</span> */}
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-green-600 font-medium">
              {product.shipping}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-3 max-w-xl">
            {product.description}
          </p>

          {/* View details link */}
          <div className="mt-2">
            <button className="text-blue-600 hover:underline text-sm font-medium">
              View details
            </button>
          </div>
        </div>

        {/* Wishlist Icon */}
        <div className="flex items-start absolute right-0 top-0">
          <button className="p-2 rounded-md border shadow-sm hover:bg-gray-100">
            <IoIosHeartEmpty className="text-[#0D6EFD]" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
