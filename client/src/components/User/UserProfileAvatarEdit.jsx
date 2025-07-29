import React from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleApiError } from "../../utils/handleApiError";
import { Axios } from "../../utils/axios";
import { summaryApi } from "../../common/summaryApi";
import toast from "react-hot-toast";
import { updateUserAvatar } from "../../redux/userSlice";

const UserProfileAvatarEdit = ({close}) => {
    const user = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleUploadAvatar = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("avatar", file);

      try {
        setLoading(true);
        const response = await Axios({
          ...summaryApi.avatarUpload,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

        if (response.data.success) {
          toast.success(response.data.message);
          dispatch(updateUserAvatar(response.data.data.avatar));
          close();
        }
        
      } catch (error) {
        handleApiError(error)
      } finally {
        setLoading(false);
      }
    }
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-60 p-4 flex items-center justify-center">
      <div className="bg-white max-w-sm w-full rounded p-4 flex flex-col items-center justify-center">
        <button
          onClick={close}
          className="text-neutral-800 w-fit block ml-auto"
        >
          <IoClose size={20} />
        </button>
        <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm">
          {user.avatar ? (
            <img alt={user.name} src={user.avatar} className="w-full h-full" />
          ) : (
            <FaRegUserCircle size={65} />
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="uploadProfile">
            <div className="border border-primary-200 cursor-pointer hover:bg-primary-200 px-4 py-1 rounded text-sm my-3">
              {loading ? "Uploading..." : "Upload"}
            </div>
            <input
              onChange={handleUploadAvatar}
              type="file"
              id="uploadProfile"
              accept="image/*"
              className="hidden"
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default UserProfileAvatarEdit;
