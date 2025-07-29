import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleApiError } from "../utils/handleApiError";
import { Axios } from "../utils/axios";
import { summaryApi } from "../common/summaryApi";
import { uploadImage } from "../utils/uploadImage";
import toast from "react-hot-toast";
import Spinner from "../utils/Spinner";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { ViewImage } from "../components/export";

const UploadProduct = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: {
      currentPrice: "",
      originalPrice: "",
      priceNegotiable: false,
    },
    type: "",
    design: "",
    customization: "",
    protection: "",
    warranty: "",
    category: [],
    brand: [],
    features: [],
    image: [],
    stock: "",
    ratings: "",
    orders: "",
    shipping: "",
    reviews: [],
    sold: "",
  });
  const typeOptions = [
    "Electronics",
    "Fashion",
    "Home",
    "Kitchen",
    "Sports",
    "Beauty",
    "Plastic Material",
  ];
  const designOptions = ["Modern Nice", "Old Fashion", "Vintage"];
  const customizationOptions = [
    "Customized logo and design custom packages",
    "Customized logo and design custom packages",
    "Customized logo and design custom packages",
  ];
  const [viewImageURL, setViewImageURL] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [selectFeature, setSelectFeature] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadImageLoading, setUploadImageLoading] = useState(false);

  const allCategory = useSelector((state) => state.product.allCategories);
  const allBrands = useSelector((state) => state.product.allBrands);
  const allFeatures = useSelector((state) => state.product.allFeatures);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    try {
      setUploadImageLoading(true);
      const response = await uploadImage({ file });

      if (response) {
        setData((prev) => ({
          ...prev,
          image: [...(prev.image || []), response],
        }));
        setViewImageURL(response);
      }
      setViewImageURL("");
    } catch (error) {
      handleApiError(error);
    } finally {
      setUploadImageLoading(false);
    }
  };

  const handleDeleteImage = (index) => {
    data.image.splice(index, 1);
    setData((prev) => ({
      ...prev,
    }));
  };

  const handleRemoveCategory = (index) => {
    data.category.splice(index, 1);
    setData((prev) => ({
      ...prev,
    }));
  };

  const handleRemoveBrand = (index) => {
    data.brand.splice(index, 1);
    setData((prev) => ({
      ...prev,
    }));
  };

  const handleRemoveFeature = (index) => {
    data.features.splice(index, 1);
    setData((prev) => ({
      ...prev,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await Axios({
        ...summaryApi.addProduct,
        data,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          description: "",
          price: {
            currentPrice: "",
            originalPrice: "",
            priceNegotiable: false,
          },
          type: "",
          design: "",
          customization: "",
          protection: "",
          warranty: "",
          category: [],
          brand: [],
          features: [],
          image: [],
          stock: "",
          ratings: "",
          orders: "",
          shipping: "",
          reviews: [],
          sold: "",
        })
      }


    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="">
      <div className="p-2   bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Upload Product</h2>
      </div>
      <div className="grid p-3">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="grid gap-1">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/* Product Description */}
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              id="description"
              type="text"
              placeholder="Enter product description"
              name="description"
              value={data.description}
              onChange={handleChange}
              required
              multiple
              rows={3}
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded resize-none"
            />
          </div>
          {/* Product Image */}
          <div>
            <p className="font-medium">Image</p>
            <div>
              <label
                htmlFor="productImage"
                className="bg-blue-50 h-24 border rounded flex justify-center items-center cursor-pointer"
              >
                <div className="text-center flex justify-center items-center flex-col">
                  {uploadImageLoading ? (
                    <>
                      <Spinner /> Loading...
                    </>
                  ) : (
                    <>
                      <FaCloudUploadAlt size={35} />
                      <p>Upload Image</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="productImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </label>
              {/**display uploded image*/}
              <div className="flex flex-wrap gap-4">
                {data.image.map((img, index) => {
                  const isLastImage = index === data.image.length - 1;

                  return (
                    <div
                      key={img + index}
                      className="h-20 mt-1 w-20 min-w-20 bg-blue-50 border relative group"
                    >
                      <img
                        src={img}
                        alt={img}
                        className="w-full h-full object-scale-down cursor-pointer"
                        onClick={() => setViewImageURL(img)}
                      />

                      {uploadImageLoading && isLastImage && (
                        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                          <span className="loader" />
                        </div>
                      )}
                      <div
                        onClick={() => handleDeleteImage(index)}
                        className="absolute bottom-0 right-0 p-1 bg-red-600 hover:bg-red-600 rounded text-white hidden group-hover:block cursor-pointer"
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* category */}
          <div className="grid gap-1">
            <label className="font-medium">Category</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={selectCategory}
                onChange={(e) => {
                  const value = e.target.value;
                  const category = allCategory.find((el) => el._id === value);

                  setData((preve) => {
                    return {
                      ...preve,
                      category: [...preve.category, category],
                    };
                  });
                  setSelectCategory("");
                }}
              >
                <option value={""}>Select Category</option>
                {allCategory.map((c, index) => {
                  return (
                    <option
                      key={c._id + index + "selectcategory"}
                      value={c?._id}
                    >
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <div className="flex flex-wrap gap-3">
                {data.category.map((c, index) => {
                  return (
                    <div
                      key={c._id + index + "productsection"}
                      className="text-sm flex items-center gap-1 bg-blue-50 mt-2"
                    >
                      <p>{c.name}</p>
                      <div
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleRemoveCategory(index)}
                      >
                        <IoClose size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Brand */}
          <div className="grid gap-1">
            <label className="font-medium">Brands</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={selectBrand}
                onChange={(e) => {
                  const value = e.target.value;
                  const brand = allBrands.find((el) => el._id === value);

                  setData((preve) => {
                    return {
                      ...preve,
                      brand: [...preve.brand, brand],
                    };
                  });
                  setSelectBrand("");
                }}
              >
                <option value={""}>Select Brand</option>
                {allBrands.map((c, index) => {
                  return (
                    <option
                      key={c._id + index + "selectcategory"}
                      value={c?._id}
                    >
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <div className="flex flex-wrap gap-3">
                {data.brand.map((c, index) => {
                  return (
                    <div
                      key={c._id + index + "productsection"}
                      className="text-sm flex items-center gap-1 bg-blue-50 mt-2"
                    >
                      <p>{c.name}</p>
                      <div
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleRemoveBrand(index)}
                      >
                        <IoClose size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* features */}
          <div className="grid gap-1">
            <label className="font-medium">Features</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={selectFeature}
                onChange={(e) => {
                  const value = e.target.value;
                  const feature = allFeatures.find((el) => el._id === value);

                  setData((preve) => {
                    return {
                      ...preve,
                      features: [...preve.features, feature],
                    };
                  });
                  setSelectFeature("");
                }}
              >
                <option value={""}>Select Feature</option>
                {allFeatures.map((c, index) => {
                  return (
                    <option
                      key={c._id + index + "selectcategory"}
                      value={c?._id}
                    >
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <div className="flex flex-wrap gap-3">
                {data.features.map((c, index) => {
                  return (
                    <div
                      key={c._id + index + "productsection"}
                      className="text-sm flex items-center gap-1 bg-blue-50 mt-2"
                    >
                      <p>{c.name}</p>
                      <div
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        <IoClose size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* type */}
          <div className="grid gap-1">
            <label className="font-medium">Type</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={data.type}
                onChange={(e) => {
                  setData((preve) => {
                    return {
                      ...preve,
                      type: e.target.value,
                    };
                  });
                }}
              >
                <option value={""}>Select Type</option>
                {typeOptions.map((option, index) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/*          design */}
          <div className="grid gap-1">
            <label className="font-medium">Design</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={data.design}
                onChange={(e) => {
                  setData((preve) => {
                    return {
                      ...preve,
                      design: e.target.value,
                    };
                  });
                }}
              >
                <option value={""}>Select Design</option>
                {designOptions.map((option, index) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/*          customization */}
          <div className="grid gap-1">
            <label className="font-medium">Customization</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={data.customization}
                onChange={(e) => {
                  setData((preve) => {
                    return {
                      ...preve,
                      customization: e.target.value,
                    };
                  });
                }}
              >
                <option value={""}>Select Customization</option>
                {customizationOptions.map((option, index) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/*          protection */}
          <div className="grid gap-1">
            <label htmlFor="protection" className="font-medium">
              Protection
            </label>
            <input
              id="protection"
              type="text"
              placeholder="Enter product protection"
              name="protection"
              value={data.protection}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/*          warranty */}
          <div className="grid gap-1">
            <label htmlFor="warranty" className="font-medium">
              Warranty
            </label>
            <input
              id="warranty"
              type="text"
              placeholder="Enter product warranty"
              name="warranty"
              value={data.warranty}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/*          price */}
          <div className="grid gap-1">
            <label className="font-medium">PriceNegotiable</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                value={data.price.priceNegotiable.toString()}
                onChange={(e) => {
                  setData({
                    ...data,
                    price: { ...data.price, priceNegotiable: e.target.value },
                  });
                }}
              >
                <option value={""} disabled>
                  Select PriceNegotiable
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          {/*          price */}
          <div className="grid gap-1">
            <label htmlFor="currentPrice" className="font-medium">
              CurrentPrice
            </label>
            <input
              id="currentPrice"
              type="number"
              placeholder="Enter product currentPrice"
              name="currentPrice"
              value={data.price.currentPrice}
              onChange={(e) =>
                setData((preve) => {
                  return {
                    ...preve,
                    price: {
                      ...preve.price,
                      currentPrice: e.target.value,
                    },
                  };
                })
              }
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/* originalPrice */}
          <div className="grid gap-1">
            <label htmlFor="originalPrice" className="font-medium">
              OriginalPrice
            </label>
            <input
              id="originalPrice"
              type="number"
              placeholder="Enter product originalPrice"
              name="originalPrice"
              value={data.price.originalPrice}
              onChange={(e) =>
                setData((preve) => {
                  return {
                    ...preve,
                    price: {
                      ...preve.price,
                      originalPrice: e.target.value,
                    },
                  };
                })
              }
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/*          stock */}
          <div className="grid gap-1">
            <label htmlFor="stock" className="font-medium">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder="Enter product stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/*          ratings */}
          <div className="grid gap-1">
            <label htmlFor="ratings" className="font-medium">
              Rattings
            </label>
            <input
              id="ratings"
              type="number"
              placeholder="Enter product ratings"
              name="ratings"
              value={data.ratings}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/* orders */}
          <div className="grid gap-1">
            <label htmlFor="orders" className="font-medium">
              Orders
            </label>
            <input
              id="orders"
              type="number"
              placeholder="Enter product orders"
              name="orders"
              value={data.orders}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>
          {/* shipping */}
          <div className="grid gap-1">
            <label htmlFor="shipping" className="font-medium">
              Shipping
            </label>
            <input
              id="shipping"
              type="text"
              placeholder="Enter product shipping"
              name="shipping"
              value={data.shipping}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 py-2 text-white rounded font-semibold">
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>

      {viewImageURL && (
        <ViewImage url={viewImageURL} close={() => setViewImageURL("")} />
      )}

    </section>
  );
};

export default UploadProduct;
