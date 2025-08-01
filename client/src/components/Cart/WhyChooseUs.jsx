import React from "react";
import { IoMdLock } from "react-icons/io";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <IoMdLock size={20} />,
      title: "Secure payment",
      description: "Have you ever finally just",
    },
    {
      icon: <IoMdLock size={20} />,
      title: "Secure payment",
      description: "Have you ever finally just",
    },
    {
      icon: <IoMdLock size={20} />,
      title: "Secure payment",
      description: "Have you ever finally just",
    },
  ];
  return (
    <section className="container mx-auto px-4">
      <div className="container   my-4  rounded-md bg-white">
        <div className="flex space-x-14 items-center ">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <div className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center">
              <IoMdLock size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 ">
                Secure payment
              </p>
              <p className="text-sm text-gray-400">
                Have you ever finally just
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
