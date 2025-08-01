import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { handleApiError } from "../../utils/handleApiError";
import { Axios } from "../../utils/axios";
import { summaryApi } from "../../common/summaryApi";
import { logout } from "../../redux/userSlice";
import toast from "react-hot-toast";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...summaryApi.logout,
        data: {
          userId: user._id,
        },
      });
      if (response.data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        toast.success(response.data.message);
        dispatch(logout());
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

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
         
          className="hover:text-primary-200"
        >
          <HiOutlineExternalLink size={15} />
        </Link>
      </div>

      <div className="p-[0.5px] bg-slate-200 my-2"></div>

      <div className="text-sm grid gap-1">
        {user.role === "Admin" && (
          <Link
           
            to={"/dashboard/category"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Category
          </Link>
        )}
        {user.role === "Admin" && (
          <Link
           
            to={"/dashboard/brands"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Brands
          </Link>
        )}
        {user.role === "Admin" && (
          <Link
           
            to={"/dashboard/features"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Features
          </Link>
        )}

        {user.role === "Admin" && (
          <Link
           
            to={"/dashboard/upload-product"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Upload Prodcut
          </Link>
        )}

        {user.role === "Admin" && (
          <Link
           
            to={"/dashboard/products"}
            className="px-2 hover:bg-orange-200 py-1"
          >
            Products
          </Link>
        )}
        <Link
         
          to={"/dashboard/myorders"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          My Orders
        </Link>

        <Link
         
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Save Address
        </Link>

        <button
          onClick={handleLogout}
          className="text-left px-2 hover:bg-orange-200 py-1"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
