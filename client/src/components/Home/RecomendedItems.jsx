import React from "react";
import tshirt from "../../assets/cloth/tshirt.png";
import jeans from "../../assets/cloth/jeans.png"
import coat from "../../assets/cloth/coat.png"
import bag from "../../assets/cloth/bag.png"
import half from "../../assets/cloth/half.png"
import wallet from "../../assets/cloth/wallet.png"
import matka from "../../assets/interior/2.png"
import headPhones from "../../assets/tech/9.jpg"
import cattle from "../../assets/tech/10.jpg"



const RecomendedItems = () => {
   const products = [
    {
      image: tshirt,
      price : '$10.30',
      name: 'T-shirts with multiple',
      brand: 'colors, for men'
    },{
      image: jeans,
      price : '$10.30',
      name: 'Jeans shorts for men',
      brand: 'blue color'
    },
    {
      image: coat,
      price : '$12.50',
      name: 'Brown winter coat',
      brand: 'medium size'
    },
    {
      image: bag,
      price : '$34.00',
      name: 'Jeans bag for travel',
      brand: 'for men'
    },
    {
      image: wallet,
      price : '$99.00',
      name: 'Leather wallet',
      brand: 'colors, for men'
    },
    {
      image: half,
      price : '$9.99',
      name: 'Canon camera ',
      brand: 'black, 100x zoom'
    },
    {
      image: headPhones,
      price : '$8.99',
      name: 'Headset for gaming',
      brand: 'with mic'
    },
    {
      image: wallet,
      price : '$10.30',
      name: 'Smartwatch ',
      brand: 'silver color modern'
    },
    {
      image: matka,
      price : '$10.30',
      name: 'Blue wallet for men',
      brand: 'leather metarfial'
    },
    {
      image: cattle,
      price : '$80.95',
      name: 'Jeans bag for travel',
      brand: 'for men'
    },
    
  ]
  return (
    <section className="container mx-auto px-4 my-4">
      <div className=" ">
        <h1 className="font-bold md:text-2xl">Recomended Items</h1>
      </div>
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-4 md:gap-y-8 gap-x-10 md:gap-x-8 mt-4 md:mb-5 "
      >
        {products.map((item, index) => (
        <div key={index} className="w-44 md:w-56 h-[260px] md:h-[300px] bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl border py-5 relative">
          <a href="#">
            <img src={item.image} alt="Product" className="w-32 md:w-36 mx-auto" />
            <div className="px-4 mt-6 absolute bottom-4">
              <p className=" font-medium text-[#1C1C1C] cursor-auto ">
                {item.price}
              </p>
              <p className="text-sm md:text-base text-gray-400 truncate block capitalize">
                {item.name}
              </p>
              <p className="text-sm md:text-base text-gray-400 truncate block capitalize">
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

export default RecomendedItems;
