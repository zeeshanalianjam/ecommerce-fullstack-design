import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCheckBrands } from "../../../redux/productSlice";

const Brands = () => {
  const [isOpen, setIsOpen] = useState(true); // default open
  const products = useSelector((state) => state.product.products);
  const filterData = useSelector((state) => state.product.filterProducts);
  const brands = filterData.brands?.map((brand) => brand.name);

  // let uniqueBrandsAllArray = [...new Set(products.products?.map((product) => product.brand?.map((brand) => brand.name)))];
  // const uniqueBrands = [...new Set(uniqueBrandsAllArray?.map((brand) => brand[0]))]

  const [checkedBrands, setCheckedBrands] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheckBrands(checkedBrands));
  }, [checkedBrands]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-gray-800 border-t my-4">
      <div
        className="cursor-pointer flex justify-between items-center  py-2  rounded-md font-semibold transition-all  "
        onClick={toggleDropdown}
      >
        <span>Brands</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className=" ">
          {brands?.map((category, index) => (
            <div
              key={index}
              className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
            >
              <input
                type="checkbox"
                id="samsung"
                className="w-4 h-4 accent-blue-600"
                checked={checkedBrands.includes(category)}
                onChange={() => {
                  if (checkedBrands.includes(category)) {
                    setCheckedBrands(
                      checkedBrands.filter((c) => c !== category)
                    );
                  } else {
                    setCheckedBrands([...checkedBrands, category]);
                  }
                }}
              />
              <label htmlFor>{category}</label>
            </div>
          ))}

          <NavLink
            to="/list-view/mobile-accessories"
            className={({ isActive }) =>
              `${
                isActive ? " text-black font-medium" : "text-[#0D6EFD]"
              } block  py-2 hover:text-blue-700`
            }
          >
            Sell All
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Brands;
