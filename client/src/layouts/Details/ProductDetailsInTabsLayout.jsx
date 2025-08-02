import React from "react";
import { AsideItems, ProductsTabsMenus } from "../../components/export";
import { Outlet } from "react-router-dom";

const ProductDetailsInTabsLayout = () => {
  return (
    <section className="hidden md:block container mx-auto px-4">
      <div className="container mx-auto my-4  grid grid-cols-[1fr_350px] space-x-6   ">
        <div className="container mx-auto border rounded-md bg-white">
          {/**left for menu */}
          <div className="py-[10px] max-h-fit border-b  hidden lg:block  ">
            <ProductsTabsMenus />
          </div>

          {/**right for content */}
          <div className="bg-white  py-4">
            <Outlet />
          </div>
        </div>

        <div className="border h-fit bg-white rounded-md p-4">
          <AsideItems />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsInTabsLayout;
