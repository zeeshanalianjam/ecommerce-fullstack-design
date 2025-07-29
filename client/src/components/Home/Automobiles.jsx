import React from "react";
import banner from "../../assets/backgrounds/banner.png";
import avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";

const Automobiles = () => {
  return (
    <div className="flex flex-col md:flex-row w-full  font-sans">
      {/* Left Section */}
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex-1 bg-no-repeat bg-cover  flex flex-col  items-start p-10"
      >
        <h2 className="text-xl text-gray-700 mb-2">Latest trending</h2>
        <h1 className="text-3xl font-bold text-black mb-4">Electronic items</h1>
        <button className="bg-white text-black px-5 font-medium py-2 rounded shadow hover:scale-105 transition-all duration-300">
          Learn more
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-[250px] flex flex-col space-y-4 pl-4 bg-white">
        <div className="bg-[#E3F0FF] p-2 rounded shadow ">
          <div className="flex items-center pb-2">
            <img src={avatar} alt="" className="w-12  mr-2" />
            <p className=" text-gray-700 ">
              Hi, user
              <br />
              let’s get stated
            </p>
          </div>
          <div className="flex flex-col justify-center text-center">

          <Link to="/register" className="bg-blue-500  text-white px-4 py-1 rounded-md mb-2 hover:bg-blue-600 w-full">
            Join now
          </Link>
          <Link to="/login" className="bg-white border  text-blue-500 px-4 py-1 rounded-md hover:bg-blue-50 w-full">
            Log in
          </Link>
          </div>
        </div>

        <div className="bg-orange-400 text-white p-3 rounded shadow text-sm">
          Get US $10 off
          <br />
          with a new
          <br />
          supplier
        </div>

        <div className="bg-[#55BDC3] text-white p-3 rounded shadow text-sm">
          Send quotes with <br /> supplier <br /> preferences
        </div>
      </div>
    </div>
  );
};

export default Automobiles;
