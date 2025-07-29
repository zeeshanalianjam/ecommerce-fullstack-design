import React, { useEffect, useState } from "react";
import ProductCard from "./Card/ProductCard";
import camon from "../../assets/tech/1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardGrid } from "../export";
import axios from "axios";
import { setProducts } from "../../redux/productSlice";

function MobileAccessories() {
  const checkBrandsArray = useSelector((state) => state.product.checkBrands);
  console.log("checkBrands Array: ", checkBrandsArray);
  const allProducts = useSelector((state) => state.product.products);

  const viewMode = useSelector((state) => state.productLayout);
  
  return (
    <>
      {viewMode.productLayout === "list" ? (
        <>
          <div>
            {allProducts?.products?.map((product, index) => (
              <div key={index}>
              {checkBrandsArray.length == 0 ? <ProductCard  product={product} /> : <>{checkBrandsArray.includes(product.brand?.[0]?.name) && <ProductCard  product={product} />}</>}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className={`${viewMode.productLayout} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4`}
          >
            {allProducts?.products?.map((product, index) => (
              <ProductCardGrid key={index} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MobileAccessories;
