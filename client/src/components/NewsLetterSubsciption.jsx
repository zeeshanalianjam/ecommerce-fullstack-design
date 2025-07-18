import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const NewsLetterSubsciption = () => {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-[#EFF2F4] px-6 py-10   ">
        <h2 className="mx-auto max-w-2xl text-center text-xl font-bold tracking-tight ">
         Subscribe on our newsletter
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center  text-[#606060]">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <form className="mx-auto mt-4 flex max-w-md gap-x-2 relative">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required=""
            className="min-w-0 flex-auto rounded-md border bg-white pl-8 pr-3 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 outline-none focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 "
            placeholder="Enter your email"
          />
          <MdOutlineEmail size={20} className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" />
          <button
            type="submit"
            className="flex-none rounded-md bg-[#0D6EFD] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSubsciption;
