import React, { useEffect, useState } from "react";
import { FaThLarge, FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setProductLayout } from "../../redux/prodcutLayoutSlice";

const FilterHeader = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [sortOption, setSortOption] = useState("Featured");
  const [viewMode, setViewMode] = useState("list");
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product.products);



useEffect(() => {
  dispatch(setProductLayout(viewMode))
}, [viewMode, dispatch])


  return (
    <div className="bg-white border p-4 rounded-lg flex flex-wrap items-center justify-between gap-4">
      {/* Left: Items Count */}
      <div className=" font-medium text-gray-800">
        Showing {products.totalProduts} items in <span className="font-semibold">Mobile accessory</span>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Verified Checkbox */}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isVerified}
            onChange={() => setIsVerified(!isVerified)}
            className="form-checkbox h-4 w-4 accent-blue-600  border-gray-300 rounded"
          />
          <span className=" font-medium text-gray-700">Verified only</span>
        </label>

        <div className="relative">
          {/* Dropdown Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300  text-gray-700 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
          >
            <option value="Featured">Featured</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
          {/* Custom Arrow */}
          <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1C1C1C] ">
            <MdKeyboardArrowDown size={22} />
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-2 py-1 ${
              viewMode === "grid" ? "bg-gray-200" : "bg-white"
            }`}
          >
            <FaThLarge className="text-gray-600" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-2 py-1 ${
              viewMode === "list" ? "bg-gray-200" : "bg-white"
            }`}
          >
            <FaBars className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
