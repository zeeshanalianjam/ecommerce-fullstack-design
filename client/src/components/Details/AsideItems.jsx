import React from "react";
import canon from "../../assets/tech/1.jpg";
import camera from "../../assets/tech/2.jpg";
import laptop from "../../assets/tech/3.jpg";
import watch from "../../assets/tech/4.jpg";
import headphone from "../../assets/tech/5.jpg";
// import { Link } from "react-router-dom

const AsideItems = () => {
  const products = [
    {
      category: "Men Blazers Sets Elegant Formal",
      priceRange: "$7.00 - $99.50",
      url: watch,
    },
    {
      category: "Men Shirt Sleeve Polo Contrast",
      priceRange: "$7.00 - $99.50",
      url: laptop,
    },
    {
      category: "Men Shirt Sleeve Polo Contrast",
      priceRange: "$7.00 - $99.50",
      url: camera,
    },
    {
      category: "Men Shirt Sleeve Polo Contrast",
      priceRange: "$7.00 - $99.50",
      url: canon,
    },
  ];
  return (
    <>
      <div>
        <h3 className=" font-semibold">You may like</h3>
      </div>
      {products.map((product, index) => (
        <div key={index} className="flex items-center gap-2 mb-4  pb-2 my-4">
          <div className="border p-2 rounded-md w-fit">
            <img className="w-20" src={product.url} alt="" />
          </div>
          <div>
            <h3 className="text-gray-800">{product.category}</h3>
            <p className="text-gray-500">{product.priceRange}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AsideItems;
