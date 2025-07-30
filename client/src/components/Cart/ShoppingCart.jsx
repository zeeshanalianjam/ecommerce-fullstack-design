import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import tshirt from "../../assets/cloth/tshirt.png";
import american from "../../assets/paymentMethods/american.png";
import visa from "../../assets/paymentMethods/visa.png";
import razor from "../../assets/paymentMethods/razor.png";
import paypal from "../../assets/paymentMethods/paypal.png";
import pay from "../../assets/paymentMethods/pay.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyCart } from "../../redux/productSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.product.myCart);
  const cartProdcts = JSON.parse(localStorage.getItem("cartProducts"));
  const [data, setData] = useState(cartProdcts);
  const dispatch = useDispatch();
  console.log("data", data);

  const paymentMethods = [
    { url: american, alt: "American Express" },
    { url: visa, alt: "Visa" },
    { url: razor, alt: "Razorpay" },
    { url: paypal, alt: "Paypal" },
    { url: pay, alt: "Payoneer" },
  ];

  const handleRemove = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    dispatch(setMyCart(newData));
    localStorage.setItem("cartProducts", JSON.stringify(newData));
  }

  const handleRemoveAll = () => {
    setData([]);
    dispatch(setMyCart([]));
    localStorage.setItem("cartProducts", JSON.stringify([]));
  }
  return (
    <section className="container mx-auto px-4">
      <div className="flex space-x-2 border-b py-4">
        <h1 className="font-semibold text-2xl">My Cart</h1>
        <h2 className="font-semibold text-2xl">({data?.length > 0 ? data?.length : 0}) </h2>
      </div>
      <div className="container grid grid-cols-[1fr_280px]  gap-6 my-4  bg-white">
        {/* shopping cart items */}
        <div className=" border px-4 py-6 rounded-md">
          {data.length === 0 && (
            <h1 className="text-center text-2xl font-semibold">
              Your Cart is Empty
            </h1>
          )}
            {/* cart item */}
            {data?.map((item, index) => (
            <div className="md:flex justify-between border-b pb-6 mb-2">
              <div className="flex   space-x-3">
              <div className="w-20 h-20 px-2 py-1 border shadow-md rounded-md">
                <img
                  src={item?.image?.[0]}
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover "
                />
              </div>
              <div className="space-y-1">
                <p className=" font-medium">
                  {item?.name}
                </p>

                <div className="text-gray-500">
                  <p className=" ">
                    Size: medium, Color: blue, Material: Plastic
                  </p>
                  <p className="">Seller: Artel Market</p>
                </div>

                <div className="flex itemms-center">
                  <button onClick={() => handleRemove(index)} className="text-xs text-red-500 cursor-pointer border  px-2 py-1 rounded-md ">
                    Remove
                  </button>
                  <button className="text-xs text-[#0D6EFD] cursor-pointer border px-2 py-1 rounded-md ml-2">
                    Save for later
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex justify-end ">
                <p className="font-medium">{item?.price?.currentPrice} PKR</p>
              </div>
              <div className="flex items-center justify-between w-full relative">
                <select
                  aria-label="Select quantity"
                  className="py-2 px-2 w-32 border rounded-md border-gray-200 focus:outline-none appearance-none "
                >
                  <option value={item?.quantity}>Qty: {item?.quantity}</option>
                </select>
                {/* Custom Arrow */}
                <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1C1C1C] ">
                  <MdKeyboardArrowDown size={22} />
                </div>
              </div>
            </div>
              </div>
            ))}
            
          
          {/* buttons */}
          <div className="md:flex justify-between items-center">
            <Link 
              to="/list-view"
              className="bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white px-5 py-2 rounded-md flex items-center space-x-2 mt-4 mb-4 transition-all duration-300"
            >
              <FaArrowLeft size={18} /> <span>Back to shop</span>
            </Link>

            <button onClick={handleRemoveAll} className="flex items-center space-x-2 bg-transparent text-[#0D6EFD] px-5  py-2 rounded-md border shadow hover:scale-105 transition-all duration-300">
              Remove all
            </button>
          </div>
        </div>

        {/* order summary */}
        <div className="space-y-6">
          <div className="border px-4 py-6 rounded-md">
            <div className="space-y-2">
              <label htmlFor="promo" className=" ">
                Have a coupon?
              </label>
              <div className="flex items-center relative">
                <input
                  type="text"
                  id="promo"
                  placeholder="Add a coupon"
                  className="p-2 text-sm w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1"
                />
                <button className="bg-transparent border-l absolute right-0  px-5 py-2 text-sm text-blue-600 ">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="border px-4 py-6 rounded-md">
            <div className="space-y-2 py-4">
              <div className="flex justify-between">
                <span className="">Subtotal:</span>
                <span className="">$1403.97</span>
              </div>
              <div className="flex justify-between">
                <span className="">Discount:</span>
                <span className="text-[#FA3434]">- $60.00</span>
              </div>
              <div className="flex justify-between">
                <span className="">Tax:</span>
                <span className="text-[#00B517]">+ $14.00</span>
              </div>
            </div>
            <div className="border-t ">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost :</span>
                <span>$600</span>
              </div>
              <button className="bg-[#00B517] font-medium hover:bg-[#57c065] duration-300 transition-all hover:scale-105 rounded-md px-5 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
              <div className="mt-2 flex items-center justify-center">
                {paymentMethods.map((method, index) => (
                  <img
                    key={index}
                    src={method.url}
                    alt={method.alt}
                    className="w-10 h-10 mr-2 mt-2  rounded-md object-scale-down"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
