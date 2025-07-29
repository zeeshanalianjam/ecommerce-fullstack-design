import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi";

const UserMenu = () => {
    const user = useSelector(state => state.user)
    const close = () => {}

    const handleLogout = () => {}

  return (
    <div>
      <div className="font-semibold">My Account</div>
      <div className="text-sm flex items-center gap-2">
        <span className="max-w-52 text-ellipsis line-clamp-1 capitalize">
          {user.name || user.mobile}
          <span className="text-medium text-red-600">
            {user.role === "Admin" ? "(Admin)" : ""}
          </span>
        </span>
        <Link
          to={"/dashboard/profile"}
          onClick={close}
          className="hover:text-primary-200"
        >
          <HiOutlineExternalLink size={15} />
        </Link>
      </div>

      <div className='p-[0.5px] bg-slate-200 my-2'></div>


      <div className="text-sm grid gap-1">
        {user.role === "Admin" && (
          <Link
            onClick={close}
            to={"/dashboard/category"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Category
          </Link>
        )}
        {user.role === "Admin" && (
          <Link
            onClick={close}
            to={"/dashboard/brands"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Brands
          </Link>
        )}
        {user.role === "Admin" && (
          <Link
            onClick={close}
            to={"/dashboard/features"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Features
          </Link>
        )}

        {user.role === "Admin" && (
          <Link
            onClick={close}
            to={"/dashboard/upload-product"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Upload Prodcut
          </Link>
        )}

        {user.role === "Admin" && (
          <Link
            onClick={close}
            to={"/dashboard/products"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Products
          </Link>
        )}
        <Link
          onClick={close}
          to={"/dashboard/myorders"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          My Orders
        </Link>

        <Link
          onClick={close}
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Save Address
        </Link>

        <button
          onClick={handleLogout}
          className="text-left px-2 hover:bg-orange-200 py-1"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default UserMenu