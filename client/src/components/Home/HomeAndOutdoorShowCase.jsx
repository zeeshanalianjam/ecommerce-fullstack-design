// HomeAndOutdoor.jsx
import React from "react";
import softChair from "../../assets/interior/1.png";
import smartWathches from "../../assets/interior/2.png";
import sofaChair from "../../assets/interior/3.png";
import homeAppliance from "../../assets/interior/4.png";
import blenders from "../../assets/interior/5.png";
import kichtenMixer from "../../assets/interior/6.png";
import coffeMaker from "../../assets/interior/7.png";
import kitchenDishes from "../../assets/interior/8.png";
import outdoor from "../../assets/backgrounds/outdoor.png";

const products = [
  { title: "Soft Chair", price: "USD 19", img: softChair },
  { title: "Sofa & Chair", price: "USD 29", img: sofaChair },
  { title: "Kitchen dishes", price: "USD 39", img: kitchenDishes },
  { title: "Smart watches", price: "USD 24", img: smartWathches },
  { title: "Kitchen mixer", price: "USD 49", img: kichtenMixer },
  { title: "Blenders", price: "USD 35", img: blenders },
  { title: "Home appliance", price: "USD 15", img: homeAppliance },
  { title: "Coffee maker", price: "USD 45", img: coffeMaker },
];

const HomeAndOutdoorShowCase = () => {
  return (
    <section className="container mx-auto px-4 my-4">
      <div className="grid grid-cols-[250px_1fr]  border-t  rounded-md">
        {/* Left Fixed Column */}
        <div
          style={{
            backgroundImage: `url(${outdoor})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-white p-4 shadow rounded-tl rounded-bl border"
        >
          <h2 className="text-xl font-bold">
            Home & <br /> Outdoor
          </h2>
          <button className="bg-white text-black px-5 font-medium py-2 rounded shadow hover:scale-105 transition-all duration-300 mt-4">
            Source now
          </button>
        </div>

        {/* Right Side - 2 Rows x 4 Columns = 8 Cards */}
        <div className="grid grid-cols-4 grid-rows-2 ">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 h-[120px] rounded-tr rounded-br  shadow flex flex-col justify-between relative border-r border-b "
            >
              <div>
                <h3 className="text-md font-normal">{item.title}</h3>
                <p className="text-sm text-gray-400">From</p>
                <p className="text-sm text-gray-400">{item.price}</p>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover absolute bottom-1 right-2 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAndOutdoorShowCase;
