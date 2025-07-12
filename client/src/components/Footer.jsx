import React from "react";
import logo from "../assets/logo-colored.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-28 bg-[#FFFFFF] pt-9">
      <div className="mx-auto w-full  px-4 xl:px-4">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <p className="text-[18px] font-medium "></p>
            <h1 className=" font-extrabold">
              <img src={logo} alt="" className="w-40" />
            </h1>
            <p />
            <p className="mt-[18px] text-[15px] font-normal /[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio
              facere officiis enim animi placeat eaque nesciunt alias beatae id,
              at dicta.
            </p>
            <div className="mt-[18px] text-white flex gap-4">
              <a className="hover:scale-110 " target="_blank" href="#">
                <FaFacebookF className="w-6 h-6  bg-gray-400 rounded-full p-1" />
              </a>
              <a className="hover:scale-110 " target="_blank" href="#">
                <FaYoutube className="w-6 h-6  bg-gray-400 rounded-full p-1" />
              </a>
              <a className="hover:scale-110 " target="_blank" href="#">
                <FaTwitter className="w-6 h-6  bg-gray-400 rounded-full p-1" />
              </a>
              <a className="hover:scale-110 " target="_blank" href="#">
                <FaLinkedinIn className="w-6 h-6  bg-gray-400 rounded-full p-1" />
              </a>
              <a className="hover:scale-110 " target="_blank" href="#">
                <FaInstagram className="w-6 h-6  bg-gray-400 rounded-full p-1" />
              </a>
            </div>
          </div>

          <div className="mt-6 ml-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[150px]">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                About
              </p>
              <ul className="text-gray-500">
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    Find Store
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    Categories
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[150px]">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                Partnership
              </p>
              <ul className="text-gray-500">
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    Find Store
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    Categories
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[150px]">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                Information
              </p>
              <ul className="text-gray-500">
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    Money Refund
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    Shipping
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[350px]">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                For Users
              </p>
              <ul className="text-gray-500">
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    Login
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    Register
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    Settings
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    My Orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-deutziawhite font-inter text-[18px] font-medium">
                Get app
              </p>
              <div className="flex gap-4 sm:flex-col">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.example.app"
                >
                  <img
                    alt="Get it on Google Play"
                    loading="lazy"
                    width={168}
                    height={50}
                    decoding="async"
                    style={{ color: "transparent" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/us/app/example-app/id1234567890"
                >
                  <img
                    alt="Download on the App Store"
                    loading="lazy"
                    width={168}
                    height={50}
                    decoding="async"
                    style={{ color: "transparent" }}
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr className="mt-[30px] " />
        <div className="bg-gray-300">

       
        <div className="flex items-center  text-gray-500 justify-between pb-8 pt-[9px] md:py-4 container mx-auto px-4 relative">
          <p className="text-[10px] font-medium  md:text-[12px]">
            © 2025 Ecommerce
          </p>
          <div className="flex items-center gap-4">

          <select className="text-sm appearance-none px-4 bg-transparent  focus:outline-none">
            <option>English</option>
            <option>Urdu</option>
          </select>
          {/* cusstom arrow up */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
           <IoIosArrowUp />
          </div>
          </div>
        </div>
         </div>
      
    </div>
  );
};

export default Footer;
