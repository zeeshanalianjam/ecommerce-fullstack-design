import React from "react";
import banner from "../../assets/backgrounds/banner.png";
import avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Automobiles = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <div className="flex flex-col md:flex-row w-full  font-sans">
      {/* Left Section */}
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex-1 bg-no-repeat bg-cover  flex flex-col  items-start p-20 md:p-10 relative"
      >
        <div className="absolute md:static top-6 left-4">
        <h2 className="md:text-xl text-gray-800 md:mb-2 leading-none">Latest trending</h2>
        <h1 className="md:text-3xl font-bold text-black leading-none mb-5">Electronic items</h1>
        <Link to="/list-view"  className="bg-white text-black px-2 md:px-5 font-medium py-1 text-sm md:text-base md:py-2 rounded shadow hover:scale-105 transition-all duration-300">
          Learn more
        </Link>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-[250px] hidden md:flex flex-col space-y-4 pl-4 bg-white">
        <div className="bg-[#E3F0FF] p-2 rounded shadow ">
          <div className="flex items-center pb-2">
            {user?.avatar ? (
              <img src={user?.avatar} alt="" className="w-12  mr-2" />
            ): (
              <img src={avatar} alt="" className="w-12  mr-2" />
            )}
            <p className=" text-gray-700 ">
              Hi, {user?.name}
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
