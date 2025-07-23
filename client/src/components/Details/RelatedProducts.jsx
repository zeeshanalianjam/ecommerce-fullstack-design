import React from "react";
import { RelatedProductCard } from "../export";
import bag from "../../assets/relatedProducts/bag.png";
import smartWatche from "../../assets/relatedProducts/smartWatch.png";
import headphones from "../../assets/relatedProducts/headphones.png";

const RelatedProducts = () => {
  const products = [
    {
      name: "Xiaomi Redmi 8",
      priceRange: "$32.00 - $40.00",
      quality: "Original",
      url: bag,
    },
    {
      name: "Smart Watch",
      priceRange: "$50.00 - $70.00",
      quality: "Original",
      url: smartWatche,
    },
    {
      name: "Headphones",
      priceRange: "$20.00 - $30.00",
      quality: "Original",
      url: headphones,
    },
    {
      name: "Smart Watch",
      priceRange: "$50.00 - $70.00",
      quality: "Original",
      url: smartWatche,
    },
    {
      name: "Headphones",
      priceRange: "$20.00 - $30.00",
      quality: "Original",
      url: headphones,
    },
    {
      name: "Smart Watch",
      priceRange: "$50.00 - $70.00",
      quality: "Original",
      url: smartWatche,
    },
  ];
  return (
    <section className="container mx-auto px-4 ">
      <div className="container border px-4 my-4  rounded-md bg-white">
         <div className=" py-4">
        <h1 className="font-semibold text-xl">Related products</h1>
      </div>
        <div className="flex justify-center items-center space-x-8 ">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-2 mb-4 pb-2 ">
              <RelatedProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
