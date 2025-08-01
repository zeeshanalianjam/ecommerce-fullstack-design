import React from "react";
import smartWathches from "../../assets/tech/8.jpg";
import cameras from "../../assets/tech/6.jpg";
import headphones from "../../assets/tech/9.jpg";
import catle from "../../assets/tech/10.jpg";
import gamingSet from "../../assets/tech/5.jpg";
import laptops from "../../assets/tech/7.jpg";
import smartPhones from "../../assets/tech/2.jpg";
import electricKattle from "../../assets/tech/1.jpg";
import outdoor from "../../assets/backgrounds/gadgets.png";

const products = [
  { title: "Smart watches", price: "USD 19", img: smartWathches },
  { title: "Cameras", price: "USD 29", img: cameras },
  { title: "Headphones", price: "USD 39", img: headphones },
  { title: "Smart watches", price: "USD 24", img: catle },
  { title: "Gaming set", price: "USD 49", img: gamingSet },
  { title: "Laptops & PC", price: "USD 35", img: laptops },
  { title: "Smartphones", price: "USD 15", img: smartPhones },
  { title: "Electric kattle", price: "USD 45", img: electricKattle },
];

const ConsumerElectronicsAndGadgetsShowCase = () => {
  return (
    <section className="md:container md:mx-auto md:px-4 md:my-4">
      <div className="md:grid grid-cols-[250px_1fr]  border-t  rounded-md">
        {/* Left Fixed Column */}
        <div
          style={{
            backgroundImage: `url(${outdoor})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-white p-4 shadow rounded-tl rounded-bl border hidden md:block"
        >
          <h2 className="text-xl font-bold">
            Consumer <br /> electronics and gadgets
          </h2>
          <button className="bg-white text-black px-5 font-medium py-2 rounded shadow hover:scale-105 transition-all duration-300 mt-4">
            Source now
          </button>
        </div>

        {/* for mobile view left side */}
        <div className="bg-white p-4 shadow rounded-tl rounded-bl border-b md:border-b-0 md:border md:hidden">
          <h2 className=" font-bold">Consumer electronics</h2>
        </div>

        {/* Right Side - 2 Rows x 4 Columns = 8 Cards */}
        <div className="flex overflow-x-auto overflow-hidden whitespace-nowrap w-full md:grid grid-cols-4 grid-rows-2  ">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:h-[120px] rounded-tr rounded-br shadow flex flex-col-reverse md:flex-col justify-between md:relative border-r border-b "
            >
              <div className="">
                <h3 className="text-md font-normal">{item.title}</h3>

                <div className="flex md:block items-center space-x-2 md:space-x-0">
                  <p className="text-sm text-gray-400">From</p>
                  <p className="text-sm text-gray-400">{item.price}</p>
                </div>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="w-20 mx-auto h-20 object-cover md:absolute bottom-1 right-2 rounded"
              />
            </div>
          ))}
        </div>
        <a
          href="#"
          className="md:hidden text-blue-500 px-5 md:font-medium py-2 rounded shadow hover:scale-105 transition-all duration-300 md:mt-4 flex items-center  space-x-2"
        >
          <span>Source now</span>
          <span className="text-xl font-medium">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default ConsumerElectronicsAndGadgetsShowCase;
