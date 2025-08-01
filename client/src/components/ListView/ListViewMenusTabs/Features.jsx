import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCheckFeatures } from "../../../redux/productSlice";

const Features = () => {
  const [isOpen, setIsOpen] = useState(true); // default open
  const filterData = useSelector((state) => state.product.filterProducts);
  const features = filterData.features?.map((features) => features.name);
 

  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheckFeatures(checkedFeatures));
  }, [checkedFeatures]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full text-gray-800 border-t my-4">
      <div
        className="cursor-pointer flex justify-between items-center  py-2  rounded-md font-semibold transition-all  "
        onClick={toggleDropdown}
      >
        <span>Features</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className=" ">
          {features?.map((category, index) => (
            <div
              key={index}
              className="
               font-medium text-gray-600
               flex py-2 hover:text-black space-x-3 items-center"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                checked={checkedFeatures.includes(category)}
                onChange={() => {
                  if (checkedFeatures.includes(category)) {
                    setCheckedFeatures(
                      checkedFeatures.filter((c) => c !== category)
                    );
                  } else {
                    setCheckedFeatures([...checkedFeatures, category]);
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

export default Features;
