import React, { useEffect } from "react";
import {
  ProductDetailsCard,
  RelatedProducts,
  ShopNowWithSuperDiscount,
  Tabs,
} from "../components/export";
import ProductDetailsInTabsLayout from "../layouts/Details/ProductDetailsInTabsLayout";

const Details = () => {

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
