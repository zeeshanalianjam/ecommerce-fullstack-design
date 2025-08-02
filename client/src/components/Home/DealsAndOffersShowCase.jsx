// EcommerceShowcase.jsx
import React, { useEffect, useState } from "react";
import watch from "../../assets/tech/8.jpg";
import laptop from "../../assets/tech/7.jpg";
import camera from "../../assets/tech/6.jpg";
import headphone from "../../assets/tech/5.jpg";
import canon from "../../assets/tech/4.jpg";

const products = [
  { category: "Smart watches", discount: "-20%", url: watch },
  { category: "Laptops brand", discount: "-30%", url: laptop },
  { category: "GoPro cameras", discount: "-15%", url: camera },
  { category: "Headphones", discount: "-25%", url: headphone },
  { category: "Canon camreras", discount: "-10%", url: canon },
];


const DealsAndOffersShowCase = () => {
  const targetDate = new Date('2025-08-05T11:59:59');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft  ()  {
    const currentDate = new Date();
    const defference = targetDate - currentDate;
  
       const seconds = Math.floor((defference / 1000) % 60);
    const minutes = Math.floor((defference / 1000 / 60) % 60);
    const hours = Math.floor((defference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(defference / (1000 * 60 * 60 * 24));

    return {
      defference,
      days,
      hours,
      minutes,
      seconds
    }
  }

  useEffect(()=> {
    const interval = setInterval(() => {
      const remaingTime = calculateTimeLeft();
      setTimeLeft(remaingTime);

      if(remaingTime.defference <= 0){
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])



  return (
    <section className="md:container mx-auto md:px-4 md:my-4">
      <div className="container mx-auto grid md:grid-cols-[250px_repeat(5,1fr)]   border-t border-b rounded-md ">
        {/* Left Deals Column */}
        <div className="bg-white p-4 flex justify-between items-center md:block shadow rounded border-r border-l">
          <div>

          <h2 className="md:text-xl font-bold ">Deals & Offers</h2>
          <p className="text-sm text-gray-500 md:mb-2">Hygine equipments</p>
          </div>
          <div className="flex space-x-2 mt-2">
            {/* Days */}
            <div className="w-10 h-12 bg-gray-100 md:bg-[#606060] rounded hidden md:flex flex-col items-center justify-center">
              <span className="md:text-lg text-gray-600 font-medium md:text-white leading-none">
                {timeLeft.days}
              </span>
              <span className="text-xs text-gray-600 md:text-white">Days</span>
            </div>
            {/* Hours */}
            <div className="w-10 h-12 bg-gray-100 md:bg-[#606060] rounded flex flex-col items-center justify-center">
              <span className="md:text-lg text-gray-600 font-medium md:text-white leading-none">
                {timeLeft.hours}
              </span>
              <span className="text-xs text-gray-600 md:text-white">Hour</span>
            </div>
            {/* Mins */}
            <div className="w-10 h-12 bg-gray-100 md:bg-[#606060] rounded flex flex-col items-center justify-center">
              <span className="md:text-lg text-gray-600 font-medium md:text-white leading-none">
                {timeLeft.minutes}
              </span>
              <span className="text-xs text-gray-600 md:text-white">Min</span>
            </div>
            {/* Sec */}
            <div className="w-10 h-12 bg-gray-100 md:bg-[#606060] rounded flex flex-col items-center justify-center">
              <span className="md:text-lg text-gray-600 font-medium md:text-white leading-none">
                {timeLeft.seconds}
              </span>
              <span className="text-xs text-gray-600 md:text-white">Sec</span>
            </div>
          </div>
        </div>

        {/* Product Columns */}
      {/* desktop */}
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 hidden shadow rounded md:flex md:flex-col items-center space-y-2 border-r"
          >
            <img
              src={item.url}
              alt={item.category}
              className="w-24 h-24 object-cover rounded"
            />
            <p className=" ">{item.category}</p>
            <span className="text-red-600 font-medium bg-[#FFE3E3] py-1 px-2 rounded-full">
              {item.discount}
            </span>
          </div>
        ))}
       
       {/* for mobile */}
        <div className="flex md:hidden w-full overflow-hidden overflow-x-auto  whitespace-nowrap">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 px-4 w-full  shadow rounded flex  flex-col items-center space-y-2 border-r"
          >
            <img
              src={item.url}
              alt={item.category}
              className="w-24 h-24 object-cover rounded"
            />
            <p className=" ">{item.category}</p>
            <span className="text-red-600 font-medium bg-[#FFE3E3] py-1 px-2 rounded-full">
              {item.discount}
            </span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default DealsAndOffersShowCase;
