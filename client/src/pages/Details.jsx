import React, { useEffect } from "react";
import {
  ProductDetailsCard,
  RelatedProducts,
  ShopNowWithSuperDiscount,
  Tabs,
} from "../components/export";
import ProductDetailsInTabsLayout from "../layouts/Details/ProductDetailsInTabsLayout";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(
      "/details/category-name/category-id/catgory-name/product-name/product-id/description"
    );
  }, []);
  return (
    <section>
      <div>
        <Tabs />
        <ProductDetailsCard />
        <ProductDetailsInTabsLayout />
        <RelatedProducts />
        <ShopNowWithSuperDiscount />
      </div>
    </section>
  );
};

export default Details;
