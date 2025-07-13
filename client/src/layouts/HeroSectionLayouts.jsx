import React from "react";
import { Outlet } from "react-router-dom";
import { HeroSectionMenus } from "../components/export";

const HeroSectionLayouts = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="container mx-auto my-4 rounded-md bg-white shadow-lg border ">

      
      <div className="container mx-auto p-3 grid lg:grid-cols-[250px,1fr]  ">
        {/**left for menu */}
        <div className="py-4 max-h-fit overflow-y-auto hidden lg:block mr-4 ">
          <HeroSectionMenus />
        </div>

        {/**right for content */}
        <div className="bg-white  py-4    ">
          <Outlet />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSectionLayouts;
