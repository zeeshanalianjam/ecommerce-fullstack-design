import React from "react";

export const ProductCardAdmin = ({ data }) => {
  return (
    <div className="w-36 p-4 bg-white rounded-md shadow-md flex flex-col items-center border border-slate-200 hover:border-primary-200 transition-all duration-300">
      <div>
        <img
          src={data?.image[0]}
          alt={data?.name}
          className="w-full h-full object-scale-down"
        />
      </div>
      <p className="text-ellipsis line-clamp-2 font-medium">{data?.name}</p>
      <p className="text-slate-400">{data?.unit}</p>
    </div>
  );
};