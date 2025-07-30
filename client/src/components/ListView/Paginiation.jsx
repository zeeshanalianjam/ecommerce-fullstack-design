import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setShowFix } from "../../redux/productSlice";

const Paginiation = () => {
  const products = useSelector((state) => state.product.products);
  const limit = useSelector((state) => state.product.limit);
  const dispatch = useDispatch();

  const [show, setShow] = useState(5);
  const { currentPage, totalPages } = products;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    dispatch(setShowFix(show));
  }, [show]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    if (page < 1 || page > totalPages) return;
    
  };

  return (
    <div className=" flex justify-center items-center dark:bg-gray-800">
      <div className="py-2 border-t dark:border-gray-700  w-full">
        <nav
          role="navigation"
          aria-label="Pagination Navigation"
          className="flex items-center justify-between"
        >
          {/* mobile view */}
          <div className="flex justify-between items-center flex-1 lg:hidden">
            <div className="w-10">
              <button
                title="Previous"
                type="button"
                className=" flex items-center justify-center rounded-full relative outline-none hover:bg-gray-500/5 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none text-yellow-500 focus:bg-yellow-500/10 dark:hover:bg-gray-300/5 w-10 h-10"
                rel="prev"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 rtl:space-x-reverse">
              <select className="h-8 text-sm px-2 leading-none transition duration-75 border-gray-300 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-inset focus:ring-yellow-500 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-yellow-500">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={-1}>All</option>
              </select>
              <span className="text-sm font-medium dark:text-white">
                per page
              </span>
            </div>
            <div className="w-10">
              <button
                title="Next"
                type="button"
                className="flex items-center justify-center rounded-full relative outline-none hover:bg-gray-500/5 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none text-yellow-500 focus:bg-yellow-500/10 dark:hover:bg-gray-300/5 w-10 h-10"
                rel="next"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* desktop view */}
          <div className="hidden flex-1 items-center lg:grid grid-cols-3">
            <div className="flex items-center">
              <div className="pl-2 text-sm font-medium dark:text-white">
                Showing {(products.currentPage - 1) * limit + 1} to {limit * currentPage} of{" "}
                {products.totalProduts} results
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 filament-tables-pagination-records-per-page-selector rtl:space-x-reverse relative">
                <label>
                  <select
                    value={show}
                    onChange={(e) => setShow(e.target.value)}
                    className="h-8 text-sm pr-8 px-2 leading-none transition duration-75 border appearance-none rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-inset focus:ring-yellow-500 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-yellow-500"
                  >
                    <option value={5}>Show 5</option>
                    <option value={10}>Show 10</option>
                    <option value={15}>Show 15</option>
                  </select>
                </label>
                {/* Custom Arrow */}
                <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1C1C1C] ">
                  <MdKeyboardArrowDown size={22} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="py-3 border rounded-lg dark:border-gray-600">
                <ol className="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      type="button"
                      className="relative disabled:opacity-50 flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                      aria-label="Previous"
                      rel="prev"
                    >
                      <svg
                        className="w-5 h-5 rtl:scale-x-[-1]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  {pages.map((page) => (
                    <li key={page}>
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        type="button"
                        className={`relative ${
                          currentPage === page
                            ? "text-yellow-600 focus:ring-yellow-500 ring-yellow-500 ring-2 filament-tables-pagination-item-active focus:underline bg-yellow-500/10"
                            : "text-gray-500"
                        } flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2  dark:hover:bg-gray-400/5  transition`}
                      >
                        <span>{page}</span>
                      </button>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      type="button"
                      className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                      aria-label="Next"
                      rel="next"
                    >
                      <svg
                        className="w-5 h-5 rtl:scale-x-[-1]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Paginiation;
