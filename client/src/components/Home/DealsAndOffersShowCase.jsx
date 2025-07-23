// EcommerceShowcase.jsx
import React from 'react';
import watch from '../../assets/tech/8.jpg'
import laptop from '../../assets/tech/7.jpg'
import camera from '../../assets/tech/6.jpg'
import headphone from '../../assets/tech/5.jpg'
import canon from '../../assets/tech/4.jpg'

const products = [
  { category: 'Smart watches', discount: '-20%', url : watch },
  { category: 'Laptops', discount: '-30%', url : laptop },
  { category: 'GoPro cameras', discount: '-15%', url : camera },
  { category: 'Headphones', discount: '-25%', url : headphone },
  { category: 'Canon camreras', discount: '-10%', url : canon },
];

const DealsAndOffersShowCase = () => {
  return (
    <section className='container mx-auto px-4 my-4' >
    <div className="container mx-auto grid grid-cols-[250px_repeat(5,1fr)]   border-t border-b rounded-md ">
      
      {/* Left Deals Column */}
      <div className="bg-white p-4 shadow rounded border-r border-l">
        <h2 className="text-xl font-bold ">Deals & Offers</h2>
        <p className="text-sm text-gray-500 mb-2">Hygine equipments</p>
        <div className="flex space-x-2 mt-2">
  {/* Days */}
  <div className="w-10 h-12 bg-[#606060] rounded flex flex-col items-center justify-center">
    <span className="text-lg font-medium text-white leading-none">04</span>
    <span className="text-xs text-white">Days</span>
  </div>
  {/* Hours */}
  <div className="w-10 h-12 bg-[#606060] rounded flex flex-col items-center justify-center">
    <span className="text-lg font-medium text-white leading-none">13</span>
    <span className="text-xs text-white">Hour</span>
  </div>
  {/* Mins */}
  <div className="w-10 h-12 bg-[#606060] rounded flex flex-col items-center justify-center">
    <span className="text-lg font-medium text-white leading-none">34</span>
    <span className="text-xs text-white">Min</span>
  </div>
  {/* Sec */}
  <div className="w-10 h-12 bg-[#606060] rounded flex flex-col items-center justify-center">
    <span className="text-lg font-medium text-white leading-none">56</span>
    <span className="text-xs text-white">Sec</span>
  </div>


</div>
      </div>

      {/* Product Columns */}
      {products.map((item, index) => (
        <div key={index} className="bg-white p-3 shadow rounded flex flex-col items-center space-y-2 border-r">
          <img
            src={item.url}
            alt={item.category}
            className="w-24 h-24 object-cover rounded"
          />
          <p className=" ">{item.category}</p>
          <span className="text-red-600 font-medium bg-[#FFE3E3] py-1 px-2 rounded-full">{item.discount}</span>
        </div>
      ))}
    </div>
    </section>
  );
};

export default DealsAndOffersShowCase;
