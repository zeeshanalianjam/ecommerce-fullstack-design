import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import tshirt from "../../assets/cloth/tshirt-gray.png";
import avatar from "../../assets/Avatar.png";
import DE from "../../assets/flags/DE.png";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductDetailsCard = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto p-4 rounded-md bg-white shadow-lg border">
        <div className="grid grid-cols-[380px_1fr_300px] ">
          {/* Product Images */}
          <div className=" mb-8">
            <img
              src={tshirt}
              alt="Product"
              className="w-96 p-10 h-auto rounded-md  border mb-4"
              id="mainImage"
            />
            <div className="flex space-x-2 py-4 justify-center overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 2"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 3"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 4"
                className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
            </div>
          </div>
          {/* Product Details */}
          <div className=" px-6">
            <div className="flex items-center space-x-2 mb-2 text-[#00B517]">
              <IoMdCheckmark size={20} />
              <span> In Stock</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle
            </h2>
            <div className="flex items-center mb-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div key={i} className="text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 text-[#FF9017]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}

              <span className="ml-2 text-[#FF9017]">4.5 </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="ml-2 text-gray-600 flex items-center space-x-2">
                <MdOutlineMessage className="relative top-0.5" />{" "}
                <span>32 Reviews</span>{" "}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="mx-2 text-gray-600 flex items-center space-x-2">
                <MdOutlineShoppingBasket /> <span>154 Sold</span>
              </span>
            </div>
            <div className="mb-4 bg-[#FFF0DF] p-4 rounded-md flex space-x-8 items-center">
              <div className="flex flex-col  ">
                <span className="text-[18px] font-bold text-[#FA3434] mr-2">
                  $98.00
                </span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-[#BDC1C8]  border-l-2 px-2">
                <span className="text-[18px] font-bold  mr-2">
                  $98.00
                </span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-[#BDC1C8]   border-l-2 px-2 ">
                <span className="text-[18px] font-bold  mr-2">
                  $98.00
                </span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex items-center space-x-24 ">
                <p className="text-gray-500 ">Price :</p>
                <p className="text-gray-700">Negotiable</p>
              </div>
              <div className="border-t border-[#E0E0E0]"></div>
              <div className="flex items-center space-x-24 ">
                <p className="text-gray-500 ">Type :</p>
                <p className="text-gray-700">Classic shoes</p>
              </div>
              <div className="flex items-center space-x-[72px] ">
                <p className="text-gray-500 ">Material :</p>
                <p className="text-gray-700">Plastic material</p>
              </div>
              <div className="flex items-center space-x-20 ">
                <p className="text-gray-500 ">Design :</p>
                <p className="text-gray-700">Modern nice</p>
              </div>
              <div className="border-t border-[#E0E0E0]"></div>
              <div className="flex  space-x-6 ">
                <p className="text-gray-500 ">Customization :</p>
                <p className="text-gray-700">
                  Customized logo and <br /> design custom packages
                </p>
              </div>
              <div className="flex items-center space-x-14 ">
                <p className="text-gray-500 ">Protection :</p>
                <p className="text-gray-700">Refund Policy</p>
              </div>
              <div className="flex items-center space-x-16 ">
                <p className="text-gray-500 ">Warranty :</p>
                <p className="text-gray-700">2 years full warranty </p>
              </div>
              <div className="border-t border-[#E0E0E0]"></div>
            </div>
          </div>
          {/* card */}
          <div className="">
            <div className="bg-white p-4 border rounded  ">
              <div className="flex items-center pb-2">
                <img src={avatar} alt="" className="w-12  mr-2" />
                <p className="text-sm text-gray-600 ">
                  Supplier
                  <br />
                  Guanjoi Trading LLC
                </p>
              </div>
              <div className="border-t my-2 border-gray-200"></div>
              <div className="space-y-3 my-5">
                <span className=" text-gray-400 flex items-center space-x-4">
                  <img src={DE} /> <span>Germany, Berlin</span>
                </span>
                <span className=" text-gray-400 flex items-center space-x-4">
                  <img src={DE} /> <span>Germany, Berlin</span>
                </span>
                <span className=" text-gray-400 flex items-center space-x-4">
                  <img src={DE} /> <span>Germany, Berlin</span>
                </span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md mb-2 hover:bg-blue-600 w-full">
                Send inquiry
              </button>
              <button className="bg-white border  text-blue-500 px-4 py-1 rounded-md hover:bg-blue-50 w-full">
                Seller's profile
              </button>
            </div>
            <div className="flex items-center mt-8 w-fit mx-auto space-x-2 text-blue-500 cursor-pointer ">
              <IoIosHeartEmpty  size={20}  />  <span>Save for later</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
