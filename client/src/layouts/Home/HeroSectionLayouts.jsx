import React from "react";
import { Outlet } from "react-router-dom";
import HeroSectionMenus from "../../components/Home/HeroSectionMenus";

const HeroSectionLayouts = () => {
  return (
    <section className="md:container mx-auto md:px-4">
      <div className="md:container mx-auto md:my-4 rounded-md bg-white shadow-lg md:border ">
        <div className="md:container mx-auto md:p-3 grid lg:grid-cols-[250px,1fr]  ">
          {/**left for menu */}
          <div className="py-4 max-h-fit overflow-y-auto hidden lg:block mr-4 ">
            <HeroSectionMenus />
          </div>

          {/**right for content */}
          <div className="bg-white  md:py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionLayouts;
