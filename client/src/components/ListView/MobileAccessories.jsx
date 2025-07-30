import React, { useEffect, useState } from "react";
import ProductCard from "./Card/ProductCard";
import camon from "../../assets/tech/1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardGrid } from "../export";
import axios from "axios";
import { setProducts } from "../../redux/productSlice";

function MobileAccessories() {
  const checkBrandsArray = useSelector((state) => state.product.checkBrands);
  const checkFeaturesArray = useSelector((state) => state.product.checkFeatures);
  const allProducts = useSelector((state) => state.product.products);
  console.log("allProducts", allProducts);

  const viewMode = useSelector((state) => state.productLayout);
  
  return (
    <>
      {viewMode.productLayout === "list" ? (
        <>
          <div className="" >
            {allProducts?.products?.map((product, index) => (
              <div key={index} >
              {checkBrandsArray.length == 0 || checkFeaturesArray.length == 0 ? <ProductCard  product={product} /> : <>{checkBrandsArray.includes(product.brand?.[0]?.name) && checkFeaturesArray.includes(product.features?.[0]?.name) && <ProductCard  product={product} />}</>}
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
              <div key={index} >
              {checkBrandsArray.length == 0 ? <ProductCardGrid  product={product} /> : <>{checkBrandsArray.includes(product.brand?.[0]?.name) && <ProductCardGrid  product={product} />}</>}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MobileAccessories;
