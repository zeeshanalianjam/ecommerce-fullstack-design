import React from "react";
import ProductCard from "./Card/ProductCard";
import camon from "../../assets/tech/1.jpg";
import { useSelector } from "react-redux";
import { ProductCardGrid } from "../export";

function MobileAccessories() {
  const products = [
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
    {
      image: camon,
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      currentPrice: "$998.00",
      originalPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      shipping: "Free shipping",
    },
   
  ];

  const viewMode = useSelector((state) => state.productLayout);

  console.log(viewMode.productLayout);

  return (
    <>
      {viewMode.productLayout === "list" ? (
        <>
          <div>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className={`${viewMode.productLayout} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4`}
          >
            {products.map((product, index) => (
              <ProductCardGrid key={index} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MobileAccessories;
