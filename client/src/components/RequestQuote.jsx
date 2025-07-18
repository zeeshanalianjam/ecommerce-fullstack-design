import React from 'react';
import requestBG from '../assets/backgrounds/requestBG.png'

const RequestQuote = () => {
  return (
    <section className='container mx-auto px-4 my-4'>
    <div className="w-full bg-cover bg-center rounded-md relative" style={{ backgroundImage: `url(${requestBG})`, backgroundSize: "cover" }}>
      <div className=" w-full h-full p-10 flex justify-between  text-white">
        {/* Left Side Text */}
        <div className="max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">An easy way to send<br />requests to all suppliers</h2>
          <p className="mt-4 text-sm text-blue-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
            sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-sm">
          <h3 className="font-semibold text-sm mb-4">Send quote to suppliers</h3>

          <input
            type="text"
            placeholder="What item you need?"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-3 focus:outline-none"
            value={"What item you need?"}
          />
          <textarea
            placeholder="Type more details"
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-3 focus:outline-none resize-none"
          ></textarea>

          <div className="flex gap-2 mb-3">
            <input
              type="number"
              placeholder="Quantity"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
            />
            <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Liters</option>
            </select>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
            Send inquiry
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default RequestQuote;
