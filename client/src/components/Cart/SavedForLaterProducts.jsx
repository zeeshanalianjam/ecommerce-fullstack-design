import React from "react";
import { SavedForLaterProductCard } from "../export";
import ipad from "../../assets/savedForLaterProduct/ipad.png";
import laptop from "../../assets/savedForLaterProduct/laptop.png";
import phone from "../../assets/savedForLaterProduct/phone.png";
import smartWatch from "../../assets/savedForLaterProduct/smartWatch.png";

const SavedForLaterProducts = () => {
  const products = [
    {
      name: "GoPro HERO6 4K Action ",
      price: "$99.50",
      quality: "Camera - Black",
      url: ipad,
    },
    {
      name: "GoPro HERO6 4K Action ",
      price: "$99.50",
      quality: "Camera - Black",
      url: laptop,
    },
    {
      name: "GoPro HERO6 4K Action ",
      price: "$99.50",
      quality: "Camera - Black",
      url: phone,
    },
    {
      name: "GoPro HERO6 4K Action ",
      price: "$99.50",
      quality: "Camera - Black",
      url: smartWatch,
    },
  ];
  return (
    <section className="container mx-auto md:px-4 ">
      <div className="md:container border px-4 my-4  rounded-md bg-white">
        <div className=" py-4">
          <h1 className="font-semibold text-xl">Saved for later</h1>
        </div>
        <div className="flex overflow-x-auto justify-center items-center space-x-2 md:space-x-8 ">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-2 mb-4 pb-2 ">
              <SavedForLaterProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedForLaterProducts;
