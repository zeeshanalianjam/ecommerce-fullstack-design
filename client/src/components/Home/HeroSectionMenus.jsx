import React from "react";
import { NavLink } from "react-router-dom";

const HeroSectionMenus = () => {
 
  return (
    <div>
      <div className="text-sm gap-2 hidden md:grid">
        <NavLink
          to={"/user-layouts/automobiles"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Automobiles
        </NavLink>

        <NavLink
          to={"/user-layouts/clothes-and-wear"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Clothes and wear
        </NavLink>

        <NavLink
          to={"/user-layouts/home-interiors"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Home interiors
        </NavLink>

        <NavLink
          to={"/user-layouts/computer-and-tech"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Computer and tech
        </NavLink>

        <NavLink
          to={"/user-layouts/tools-and-equipments"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Tools, equipments
        </NavLink>

        <NavLink
          to={"/user-layouts/sports-and-outdoor"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Sports and outdoor
        </NavLink>

        <NavLink
          to={"/user-layouts/animal-and-pets"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          Animal and pets
        </NavLink>

        <NavLink
          to={"/user-layouts/more-category"}
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#E5F1FF] text-black font-medium" : "text-gray-600"
            } px-2 hover:bg-[#E5F1FF] py-2 rounded-md`
          }
        >
          More category
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSectionMenus;
