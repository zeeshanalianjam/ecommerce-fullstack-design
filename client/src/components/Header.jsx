import React, { useEffect } from "react";
import logo from "../assets/logo-colored.png";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar } from "./export";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const myCart = useSelector((state) => state.product.myCart);
  const [addToCart, setAddToCart] = React.useState([]);

  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

  useEffect(() => {
    if (cartProducts) {
      setAddToCart(cartProducts);
    }
  }, [myCart]);

  return (
    <>
      <div className="w-full">
        <nav className="container px-4 mx-auto relative  py-2 flex justify-between items-center bg-white   ">
          <div className="md:hidden flex">
            {location.pathname.startsWith("/list-view") || location.pathname.startsWith("/details") || location.pathname.startsWith("/cart") ? (
              <>
                {" "}
                <Link to={location.pathname.startsWith("/list-view") ? "/" : "/list-view"} className="flex items-center bg-white text-black  py-2  ">
                 {location.pathname.startsWith("/cart") ? <></> : <AiOutlineArrowLeft className="h-5 w-5" />}
                  {location.pathname.startsWith("/details") ? <></> : <> {location.pathname.startsWith("/cart") ? <></> : <span className="ml-4 font-medium">Mobile accessory</span> }</>}
                </Link>
                {location.pathname.startsWith("/cart") &&  <>
                <Link to="/list-view/category/mobile-accessories" className="flex items-center bg-white text-black  py-2  ">
                <AiOutlineArrowLeft className="h-5 w-5" /> <span className="ml-4 font-medium">Shoping Cart</span>
                </Link>
                </> }
              </>
            ) : (
              <>
              {location.pathname.startsWith("/cart") ?  <></> : <Link to="/" className=" font-bold ml-10 md:ml-0">
                <img src={logo} alt="" className="w-28 md:w-40" />
              </Link>}
              </>
            )}
          </div>
          <Link to="/" className="hidden md:block font-bold ml-10 md:ml-0">
            <img src={logo} alt="" className="w-28 md:w-40" />
          </Link>
          {/* mobile view */}
          <div className="md:hidden flex space-x-4">
            <Link
              to="/cart"
              className="relative md:hidden flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5 cursor-pointer text-center"
            >
              {/* Badge */}
              {addToCart.length > 0 ? (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                  {addToCart.length}
                </span>
              ) : (
                <span className="absolute top-0 -right-2 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                  0
                </span>
              )}

              {/* Icon */}
              <FaShoppingCart size={20} />

              {/* Text */}
            </Link>

            <Link
              to="/dashboard/profile"
              className=" md:hidden flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5  cursor-pointer text-center"
            >
              <FaUser size={20} />
            </Link>
          </div>
          {location.pathname.startsWith("/list-view") || location.pathname.startsWith("/details") || location.pathname.startsWith("/cart") ? (
            <></>
          ) : (
            <>
              {" "}
              <div className="md:hidden absolute top-1/2 left-9 transform -translate-y-1/2 -translate-x-[70%]">
                <button
                  className="navbar-burger flex items-center text-violet-600 dark:text-gray-100 p-1"
                  id="navbar_burger"
                >
                  <svg
                    className="block h-6 w-6 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Hamberger menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </>
          )}

          {/* desktop view */}
          <ul className="hidden absolute top-1/2 left-1/2    transform -translate-y-1/2 -translate-x-[70%] lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <div className=" relative mx-auto text-gray-600 ">
                <input
                  className="border border-[#0D6EFD] placeholder-current h-10 w-[550px] px-2 pr-16  rounded-lg text-sm focus:outline-none "
                  type="search"
                  name="search"
                  placeholder="Search"
                />

                <select
                  className=" top-0 right-0 h-10 appearance-none  absolute border border-[#0D6EFD] bg-white text-[#1C1C1C]  px-2 pr-8 outline-none"
                  name="search"
                  id=""
                >
                  <option value="all">All category</option>
                  <option value="book">Book</option>
                  <option value="author">Author</option>
                  <option value="publisher">Publisher</option>
                </select>
                {/* Custom Arrow */}
                <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1C1C1C] ">
                  <MdKeyboardArrowDown size={22} />
                </div>

                <button
                  type="submit"
                  className="absolute h-10 top-0 border border-[#0D6EFD] bg-[#0D6EFD] text-white rounded-tr-md rounded-br-md px-4 "
                >
                  Search
                </button>
              </div>
            </li>
          </ul>
          <div className="hidden lg:flex items-center justify-center space-x-8">
            <Link
              to="/dashboard/profile"
              className=" hidden lg:flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5  cursor-pointer text-center"
            >
              <FaUser size={20} />
              <span className="text-sm mt-1">Profile</span>
            </Link>
            <Link className=" hidden lg:flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5  cursor-pointer text-center">
              <MdMessage size={20} />
              <span className="text-sm mt-1">Message</span>
            </Link>
            <Link className=" hidden lg:flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5  cursor-pointer text-center">
              <FaHeart size={20} />
              <span className="text-sm mt-1">Orders</span>
            </Link>
            <Link
              to="/cart"
              className="relative hidden lg:flex items-center text-gray-500 flex-col justify-center lg:mx-auto py-1.5 cursor-pointer text-center"
            >
              {/* Badge */}
              {addToCart.length > 0 ? (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                  {addToCart.length}
                </span>
              ) : (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                  0
                </span>
              )}

              {/* Icon */}
              <FaShoppingCart size={20} />

              {/* Text */}
              <span className="text-sm mt-1">My Cart</span>
            </Link>
          </div>
        </nav>

        {/* mobile navbar */}
        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
          <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-2xl font-bold text-black text-violet-600 dark:text-gray-100"
                href="https://tailwindflex.com/"
              >
                TailwindFlex
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className=" relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:placeholder-gray-200 dark:bg-gray-500 dark:border-gray-50"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <button
                  id="theme-toggle-2"
                  type="button"
                  className=" py-2.5 w-[97.6%] mb-3 rounded-xl flex justify-center align-middle py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    id="theme-toggle-dark-icon-2"
                    className="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <svg
                    id="theme-toggle-light-icon-2"
                    className="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <a
                  className="block py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 px-4 py-3 mb-3 text-sm text-center font-semibold rounded-xl"
                  href="/login"
                >
                  Sign in
                </a>
                <a
                  className="block py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-violet-600 hover:bg-violet-700  rounded-xl"
                  href="https://tailwindflex.com/playground"
                >
                  Tailwind Playground
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>TailwindFlex Copyright © 2023</span>
              </p>
            </div>
          </nav>
        </div>
      </div>

      {location.pathname === "/cart" ? (
        <> </>
      ) : (
        <>
          {location.pathname.startsWith("/details") ? <></> : <div className="">
            <Navbar />
          </div>}

          
          
        </>
      )}
    </>
  );
};

export default Header;
