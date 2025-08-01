import React from "react";
import arabEmirates from "../../assets/flags/AE.png";
import australia from "../../assets/flags/Aus.png";
import unitedStates from "../../assets/flags/US.png";
import russia from "../../assets/flags/RU.png";
import italy from "../../assets/flags/IT.png";
import denmark from "../../assets/flags/DK.png";
import france from "../../assets/flags/FR.png";
import china from "../../assets/flags/CN.png";
import greatBritian from "../../assets/flags/GB.png";

const Regions = () => {
  const products = [
    {
      image: arabEmirates,
      name: "Arabic Emirates",
      brand: "shopname.ae",
    },
    {
      image: australia,
      name: "Australia",
      brand: "shopname.ae",
    },
    {
      image: unitedStates,
      name: "United States",
      brand: "shopname.ae",
    },
    {
      image: russia,
      name: "Russia",
      brand: "shopname.ae",
    },
    {
      image: italy,
      name: "Italy",
      brand: "shopname.ae",
    },
    {
      image: denmark,
      name: "Denmark",
      brand: "shopname.ae",
    },
    {
      image: france,
      name: "France",
      brand: "shopname.ae",
    },
    {
      image: arabEmirates,
      name: "Arabic Emirates",
      brand: "shopname.ae",
    },
    {
      image: china,
      name: "China",
      brand: "shopname.ae",
    },
    {
      image: greatBritian,
      name: "Great Britain",
      brand: "shopname.ae",
    },
  ];
  return (
    <section className="container mx-auto px-4 my-4 ">
      <div className=" ">
        <h1 className="font-bold md:text-2xl mb-4">Suppliers by region</h1>
      </div>
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section
        id="Projects"
        className="w-fit  grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2    md:gap-x-16  mt-4 mb-5  "
      >
        {products.map((item, index) => (
          <div key={index} className="duration-200 hover:scale-105 ">
            <a href="#" className="flex items-center">
              <img src={item.image} className="w-10 object-scale-down" alt="" />
              <div className="px-2 py-2 leading-none bottom-4">
                <p className="  truncate block capitalize">{item.name}</p>
                <p className=" text-xs  text-gray-500  truncate block ">
                  {item.brand}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
      {/* 🛑 Grid Section - Ends Here */}
    </section>
  );
};

export default Regions;
