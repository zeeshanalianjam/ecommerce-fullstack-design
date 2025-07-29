import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { handleApiError } from "../../utils/handleApiError";
import { Axios } from "../../utils/axios";
import { summaryApi } from "../../common/summaryApi";
import toast from "react-hot-toast";

const EditCategoryModel = ({close, editData, fetchData}) => {
    const [data, setData] = useState({
        id: editData._id,
        name: editData.name,
    })
    const [loading, setLoading] = useState(false)
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await Axios({
                ...summaryApi.updateCategory,
                data: data
            })

            if(response.data.success){
                toast.success(response.data.message)
                fetchData()
                close()
            } 
            
        } catch (error) {
            handleApiError(error)
        } finally {
            setLoading(false)
        }
    }
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 p-4 bg-neutral-800 bg-opacity-60 flex items-center justify-center">
      <div className="bg-white max-w-4xl w-full p-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Edit Category</h1>
          <button onClick={close} className="w-fit block ml-auto">
            <IoClose size={25} />
          </button>
        </div>

        <form className="my-3 grid gap-2" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label id="categoryName">Name</label>
            <input
              type="text"
              id="categoryName"
              placeholder="Enter category name"
              value={data.name}
              name="name"
              onChange={handleOnChange}
              className="bg-blue-50 p-2 border border-blue-100 focus-within:border-primary-200 outline-none rounded"
            />
          </div>
         

          <button
          disabled={!data.name}
            className={`
                    ${
                      data.name 
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-300 "
                    }
                    py-2    
                    font-semibold 
                    text-white
                    `}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditCategoryModel;
