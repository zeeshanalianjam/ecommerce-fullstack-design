import React, { useEffect } from "react";
import canon from "../../assets/tech/1.jpg";
import camera from "../../assets/tech/2.jpg";
import laptop from "../../assets/tech/3.jpg";
import watch from "../../assets/tech/4.jpg";
import headphone from "../../assets/tech/5.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom

const AsideItems = () => {
  const allProducts = useSelector((state) => state.product.products);
  const navigate = useNavigate();

   const handleViewProductDetails = (product) => {
    navigate(`/details/${product?._id}/description`, { state: { product } });
    window.scrollTo(0, 0);

  }
 
 
  return (
    <>
      <div>
        <h3 className=" font-semibold">You may like</h3>
      </div>
      {allProducts?.products?.map((product, index) => (
        <div key={index} className="flex items-center gap-2 mb-4  pb-2 my-4">
          <div className="border  rounded-md w-fit">
            <img className="w-20 cursor-pointer" src={product.image?.[0]} alt="" onClick={() => handleViewProductDetails(product)} />
          </div>
          <div>
            <h3 className="text-gray-900">{product?.name}</h3>
            <div className="flex items-center text-sm">
              <p className="text-gray-500">{product?.price?.currentPrice} PKR - &nbsp; </p>
              <p className="text-gray-500"> {product?.price?.originalPrice} PKR</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AsideItems;
