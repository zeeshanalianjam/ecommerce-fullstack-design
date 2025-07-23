import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductsTabsMenus = () => {
  return (
     <div>
      <div className=" text-sm px-2 space-x-4">
        <NavLink
          to={"/details/category-name/category-id/catgory-name/product-name/product-id/description"}
          className={({ isActive }) =>
            `${
              isActive ? " text-blue-500 font-medium border-b border-blue-500" : "text-gray-600"
            } px-2 hover:text-blue-600 hover:border-b border-blue-500  py-3`
          }
        >
            Description
        </NavLink>
        <NavLink
          to={"/user-layouts/automobiles"}
          className={({ isActive }) =>
            `${
              isActive ? " text-blue-500 font-medium border-b border-blue-500" : "text-gray-600"
            } px-2 hover:text-blue-600 hover:border-b border-blue-500  py-3`
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to={"/user-layouts/automobiles"}
          className={({ isActive }) =>
            `${
               isActive ? " text-blue-500 font-medium border-b border-blue-500" : "text-gray-600"
            } px-2 hover:text-blue-600 hover:border-b border-blue-500  py-3`
          }
        >
          Shipping
        </NavLink>
        <NavLink
          to={"/user-layouts/automobiles"}
          className={({ isActive }) =>
            `${
              isActive ? " text-blue-500 font-medium border-b border-blue-500" : "text-gray-600"
            } px-2 hover:text-blue-600 hover:border-b border-blue-500  py-3`
          }
        >
         About seller
        </NavLink>

     
      </div>
    </div>
  )
}

export default ProductsTabsMenus