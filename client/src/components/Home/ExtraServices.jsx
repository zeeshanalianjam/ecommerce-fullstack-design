import React from "react";
import cottons from "../../assets/backgrounds/cottons.png";
import customPro from "../../assets/backgrounds/customPro.png";
import monitoring from "../../assets/backgrounds/monitoring.png";
import shipping from "../../assets/backgrounds/shipping.png";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineSend } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

const ExtraServices = () => {
  const products = [
    {
      image: cottons,
      icon: <IoMdSearch  />,
      name: "Source from",
      brand: "Industry Hubs",
    },
    {
      image: customPro,
      icon: <MdOutlineInventory2  />,
      name: "Customize Your",
      brand: " Products",
    },
    {
      image: shipping,
      icon: <MdOutlineSend  />,
      name: "Fast, reliable shipping",
      brand: " by ocean or air",
    },
    {
      image: monitoring,
      icon: <MdOutlineSecurity  />,
      name: "Product monitoring",
      brand: " and inspection",
    },
  ];
  return (
    <section className="container mx-auto px-4 my-4 ">
      <div className=" ">
        <h1 className="font-bold md:text-2xl mb-4">Our extra services</h1>
      </div>
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section id="Projects" className=" flex space-x-4 md:space-x-11 mt-4 mb-5 overflow-x-auto  ">
        {products.map((item, index) => (
          <div
            key={index}
            className="w-[280px]    bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl border relative"
          >
            <a href="#">
              <div className="bg-black rounded-tr-md rounded-tl-md relative">
                <img
                  src={item.image}
                  alt="Product"
                  className="rouded-tr-md rounded-tl-md"
                />
                <span className="border md:text-2xl  border-white bg-[#D1E7FF] h-10 md:h-14 w-10 md:w-14 absolute -bottom-[15px] md:-bottom-[30px] right-5  rounded-full flex items-center justify-center ">
                  {item.icon}
                </span>
              </div>
              <div className="px-4 py-4  bottom-4">
                <p className="  truncate block capitalize">{item.name}</p>
                <p className="     truncate block capitalize">{item.brand}</p>
              </div>
            </a>
          </div>
        ))}
      </section>
      {/* 🛑 Grid Section - Ends Here */}
    </section>
  );
};

export default ExtraServices;
