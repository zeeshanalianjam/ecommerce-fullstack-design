import React from "react";

const RelatedProductCard = ({ product }) => {
  return (
    <div className="w-44 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#EEEEEE] p-2 flex justify-center">
        <img src={product.url} alt="Xiaomi Redmi 8" className=" object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="leading-none">
          <h3 className=" text-gray-800">{product.name}</h3>
          <p className=" text-gray-800 ">{product.quality}</p>
        </div>
        <p className=" text-gray-500">{product.priceRange}</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
