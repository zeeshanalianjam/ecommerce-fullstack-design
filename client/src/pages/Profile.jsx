import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileAvatarEdit } from "../components/export";
import { handleApiError } from "../utils/handleApiError";
import { Axios } from "../utils/axios";
import { summaryApi } from "../common/summaryApi";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate("/login");
    }
  }, [user])
  const [showUserProfileEdit, setShowUserProfileEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUserDetails = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({
        ...summaryApi.updateUserDetails,
        data: userData,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setUserData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    })
    
  }, [user])
  return (
    <div className="p-4">
      {/**profile upload and display image */}
      <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm">
        {user.avatar ? (
          <img alt={user.name} src={user.avatar} className="w-full h-full" />
        ) : (
          <FaRegUserCircle size={65} />
        )}
      </div>
      <button
        onClick={() => setShowUserProfileEdit(true)}
        className="text-sm min-w-20 border border-primary-100 hover:border-primary-200 hover:bg-primary-200 px-3 py-1 rounded-full mt-3"
      >
        Edit
      </button>

      {showUserProfileEdit && (
        <UserProfileAvatarEdit close={() => setShowUserProfileEdit(false)} />
      )}

      {/**name, phone , email, change password */}
      <form className="my-4 grid gap-4" onSubmit={handleUserDetails}>
        <div className="grid">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 bg-blue-50 outline-none border focus-within:border-primary-200 rounded"
            value={userData.name}
            name="name"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 bg-blue-50 outline-none border focus-within:border-primary-200 rounded"
            value={userData.email}
            name="email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            className="p-2 bg-blue-50 outline-none border focus-within:border-primary-200 rounded"
            value={userData.phone}
            name="phone"
            onChange={handleOnChange}
            required
          />
        </div>

        <button
          type="submit"
          className="border px-4 py-2 font-semibold hover:bg-primary-100 border-primary-100 text-primary-200 hover:text-neutral-800 rounded"
        >
          {loading ? "Updating..." : "Update "}
        </button>
      </form>
    </div>
  );
};

export default Profile;
