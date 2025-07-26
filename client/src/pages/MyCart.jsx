import React from "react";
import { SavedForLaterProducts, ShopNowWithSuperDiscount, ShoppingCart, WhyChooseUs } from "../components/export";

const MyCart = () => {
  return (
    <section>
      <div>
        <ShoppingCart />
        <WhyChooseUs />
        <SavedForLaterProducts />
        <ShopNowWithSuperDiscount />
      </div>
    </section>
  );
};

export default MyCart;
