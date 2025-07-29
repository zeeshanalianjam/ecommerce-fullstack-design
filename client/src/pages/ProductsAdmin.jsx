import React, { useEffect, useState } from "react";
import { handleApiError } from "../utils/handleApiError";
import { Axios } from "../utils/axios";
import { summaryApi } from "../common/summaryApi";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import { ProductCardAdmin } from "../components/export";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
        setLoading(true);
      const response = await Axios({
        ...summaryApi.fetchAllProdutcs,
        data: {
          page: page,
          limit: limit,
          search: search.trim(),
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setData(response.data.data);
      }
    } catch (error) {
      handleApiError(error);
    } finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  console.log("all products", data);

    const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

   const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    } else {
      toast.error("No more pages available");
    }
  };

   const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

    useEffect(() => {
    let flag = true;

    const timer = setTimeout(() => {
      if (flag) {
        fetchProducts();
        flag = false;
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      flag = false;
    };
  }, [search]);
  return (
    <section className="">
      <div className="p-2   bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Products</h2>
        <div className="h-full min-w-24 max-w-56 w-full ml-auto bg-blue-50 px-4 flex items-center gap-3 py-2 rounded  border focus-within:border-primary-200">
          <IoSearchOutline size={25} />
          <input
            type="text"
            placeholder="Search product here ..."
            className="h-full w-full  outline-none bg-transparent"
            value={search}
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className="p-4 bg-blue-50">
        <div className="min-h-[55vh]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 rounded ">
            {data.products?.map((p, index) => {
              return (
                <div className="flex justify-center items-center" key={index}>
                  <ProductCardAdmin data={p} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between my-4">
          <button
            onClick={handlePrevious}
            className="border border-primary-200 px-4 py-1 hover:bg-primary-200"
          >
            Previous
          </button>
          <button className="w-full bg-slate-100">
            {page}/{totalPages}
          </button>
          <button
            onClick={handleNext}
            className="border border-primary-200 px-4 py-1 hover:bg-primary-200"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
