import React from "react";
import { Outlet } from "react-router-dom";
import { FilterHeader, ListViewMenus, Paginiation } from "../../components/export";


const ListViewLayout = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="container mx-auto  rounded-md bg-white ">
        <div className="container mx-auto  grid lg:grid-cols-[250px,1fr]  ">
          {/**left for menu */}
          <div className=" max-h-fit overflow-y-auto hidden lg:block mr-8 ">
            <ListViewMenus />
          </div>

          {/**right for content */}
          <div className="bg-white">
            <FilterHeader />
            <Outlet />
            <Paginiation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListViewLayout;
