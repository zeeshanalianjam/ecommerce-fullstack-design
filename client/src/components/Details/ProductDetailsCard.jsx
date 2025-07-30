import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import tshirt from "../../assets/cloth/tshirt-gray.png";
import avatar from "../../assets/Avatar.png";
import DE from "../../assets/flags/DE.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { useLocation, useParams } from "react-router-dom";
import { ViewImage } from "../export";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMyCart } from "../../redux/productSlice";

const ProductDetailsCard = () => {
  const params = useParams();
  const [viewImageURL, setViewImageURL] = useState("");
  const localStorageCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  const [cartProducts, setCartProducts] = useState(localStorageCartProducts || []);
  const dispatch = useDispatch();
  console.log("cartProducts", cartProducts);


  const addToCart = (product) => {
    const existingProduct = cartProducts.find((item) => item._id === product._id);
    if (existingProduct) {
      setCartProducts(
        cartProducts.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(
          cartProducts.map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          )
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      localStorage.setItem("cartProducts", JSON.stringify([...cartProducts, { ...product, quantity: 1 }]));
    }
  }

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (storedCartProducts) {
      dispatch(setMyCart(storedCartProducts));
    }
  }, [cartProducts]);

  

  const location = useLocation();
  const product = location?.state?.product;

  const randomNumbers = Array.from({ length: 3 }, () =>
  Math.floor(Math.random() * 900) + 100 // generates number between 100–999
);
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto p-4 rounded-md bg-white shadow-lg border">
        <div className="grid grid-cols-[380px_1fr_300px] ">
          {/* Product Images */}
          <div className=" mb-8">
            <img
              src={product?.image?.[0]}
              alt="Product"
              className="w-96 p-10 h-auto rounded-md  border mb-4"
              id="mainImage"
              
            />
            <div className="flex space-x-2 py-4 justify-center overflow-x-auto">
              {product?.image?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Product"
                  className="size-16 sm:size-14 border p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => {
                    setViewImageURL(image);
                  }}
                />
              ))}
            </div>
             {viewImageURL && (
                    <ViewImage url={viewImageURL} close={() => setViewImageURL("")} />
                  )}
          </div>
          {/* Product Details */}
          <div className=" px-6">
            {
              product?.stock > 0 ? (
                <div className="flex items-center space-x-2 mb-2 text-[#00B517]">
              <IoMdCheckmark size={20} />
              <span> In Stock</span>
            </div>
              ) : (
                <div className="flex items-center space-x-2 mb-2 text-[#FF0000]">
              <IoCloseOutline size={20} />
              <span> Out of Stock</span>
            </div>
              )
            }
            <div className="flex items-center justify-between ">
              <h2 className="text-xl font-semibold mb-2">
              {product?.name}
            </h2>
            {cartProducts.find((item) => item._id === product._id) ? (
              <div className="flex items-center space-x-2 text-[#00B517]">
              <IoMdCheckmark size={20} />
              <span> In Cart</span>
            </div>
            ) : (
              <div className="flex items-center space-x-2 text-[#FF0000]">
              <IoCloseOutline size={20} />
              <span> Not in Cart</span>
            </div>  
            
            )
            }
            {/* cart quantity */}
              
            <button onClick={() => addToCart(product)} className="bg-[#0D6EFD] text-white px-4 py-2 rounded-md mb-2">{product?.stock > 0 ? "Add to Cart" : "Out of Stock"}</button>
            </div>
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

              <span className="ml-2 text-[#FF9017]">{product?.ratings}.5 </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="ml-2 text-gray-600 flex items-center space-x-2">
                <MdOutlineMessage className="relative top-0.5" />{" "}
                <span>{product?.reviews.length > 0 ? product?.reviews.length : "0"} Reviews</span>{" "}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="mx-2 text-gray-600 flex items-center space-x-2">
                <MdOutlineShoppingBasket /> <span>{randomNumbers?.[0]} Sold</span>
              </span>
            </div>
            <div className="mb-4 bg-[#FFF0DF] p-4 rounded-md flex space-x-8 items-center">
              <div className="flex flex-col  ">
                <span className="text-[17px] font-bold text-[#FA3434] mr-2">
                  {product?.price?.currentPrice} PKR
                </span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-[#BDC1C8]  border-l-2 px-2">
                <span className="text-[17px] font-bold  mr-2">{product?.price?.originalPrice} PKR</span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-[#BDC1C8]   border-l-2 px-2 ">
                <span className="text-[17px] font-bold  mr-2">{product?.price?.originalPrice} PKR</span>
                <span className="text-gray-500 text-xs ">50-100 pcs</span>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex items-center space-x-24 ">
                <p className="text-gray-500 ">Price :</p>
                {product?.price?.negotiable ? (
                  <p className="text-gray-700">Negotiable</p>
                ) : (
                  <div className="text-red-500 flex space-x-4">
                  <p className="">Non-Negotiable</p>
                  <p className="">{product?.price?.currentPrice} PKR</p>
                  </div>
                )}
              </div>
              <div className="border-t border-[#E0E0E0]"></div>
              <div className="flex items-center space-x-24 ">
                <p className="text-gray-500 ">Type :</p>
                <p className="text-gray-700">{product?.type}</p>
              </div>
              <div className="flex items-center space-x-[72px] ">
                <p className="text-gray-500 ">Material :</p>
                <p className="text-gray-700">Plastic material</p>
              </div>
              <div className="flex items-center space-x-20 ">
                <p className="text-gray-500 ">Design :</p>
                <p className="text-gray-700">{product?.design}</p>
              </div>
              <div className="border-t border-[#E0E0E0]"></div>
              <div className="flex  space-x-6 ">
                <p className="text-gray-500 ">Customization :</p>
                <p className="text-gray-700">
                  {product?.customization}
                </p>
              </div>
              <div className="flex items-center space-x-14 ">
                <p className="text-gray-500 ">Protection :</p>
                <p className="text-gray-700">{product?.protection}</p>
              </div>
              <div className="flex items-center space-x-16 ">
                <p className="text-gray-500 ">Warranty :</p>
                <p className="text-gray-700">{product?.warranty}</p>
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
              <IoIosHeartEmpty size={20} /> <span>Save for later</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
