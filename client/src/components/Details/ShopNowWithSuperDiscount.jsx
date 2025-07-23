import React from "react";

const ShopNowWithSuperDiscount = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="container border px-4 my-4 py-4 rounded-md bg-[#237CFF]">
        <div className="flex items-center  text-white justify-between pb-8 pt-[9px] md:py-4 container mx-auto  relative">
          <div>
            <p className="text-2xl font-semibold">
              Super discount on more than 100 USD
            </p>
            <p className=" text-sm text-white/80">
              Have you ever finally just write dummy info
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#FF9017] px-5 font-medium py-2 rounded shadow hover:scale-105 transition-all duration-300">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNowWithSuperDiscount;
