import React, { useEffect, useState } from 'react'
import NoData from '../components/Category/NoData'
import { handleApiError } from '../utils/handleApiError'
import { Axios } from '../utils/axios'
import { summaryApi } from '../common/summaryApi'
import { DeleteConfirmBox, EditCategoryModel, UploadCategoryModel } from '../components/export'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import toast from 'react-hot-toast'

const Category = () => {
    const [categoriesData, setCategoriesData] = useState([])
    const [loading, setLoading] = useState(false)
    const [openCategoryModel, setOpenCategoryModel] = useState(false)
    const [openEditCategoryModel, setOpenEditCategoryModel] = useState(false)
    const [editCategoryData, setEditCategoryData] = useState('')
    const [openDeleteConfirmBox, setOpenDeleteConfirmBox] = useState(false)
    const [deleteCategory, setDeleteCategory] = useState('')

    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await Axios({
          ...summaryApi.fetchCetegories
        })

        if(response.data.success) {
          setCategoriesData(response.data.data)
        }

      } catch (error) {
        handleApiError(error)
      } finally {
        setLoading(false)
      }
      
    }

    useEffect(() => {
      fetchCategories()
    }, [])


    const handleDeleteCategory = async () => {
      try {
        setLoading(true)
        const response = await Axios({
          ...summaryApi.deleteCategory,
          data: {
            _id: deleteCategory._id
          }
        })

        if(response.data.success){
          toast.success(response.data.message)
          fetchCategories()
          setOpenDeleteConfirmBox(false)
        }
        
      } catch (error) {
        handleApiError(error)
      } finally {
        setLoading(false)
      }

    }
    



  return (
      <section className="">
      <div className="p-2   bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Category</h2>
        <button
          onClick={() => setOpenCategoryModel(true)}
          className="text-sm border border-primary-200 hover:bg-primary-200 px-3 py-1 rounded"
        >
          Add Category
        </button>
      </div>

      {!categoriesData[0] && !loading && <NoData />}

      <div className="p-4 space-y-2">
  {categoriesData.map((category) => (
    <div
      key={category._id}
      className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded px-4 py-2 shadow-sm"
    >
      {/* Category Name (Left Side) */}
      <h3 className="text-gray-800 font-medium">{category.name}</h3>

      {/* Edit + Delete Icons (Right Side) */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setOpenEditCategoryModel(true);
            setEditCategoryData(category);
          }}
          className="text-green-600 hover:text-green-800"
          title="Edit"
        >
          <FiEdit2 size={18} />
        </button>
        <button
          onClick={() => {
            setOpenDeleteConfirmBox(true);
            setDeleteCategory(category);
          }}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  ))}
</div>

      {loading && <><div className="flex justify-center items-center min-h-[75vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-gray-600">Loading...</p>
      </div></>}

      {openCategoryModel && (
        <UploadCategoryModel
          fetchData={fetchCategories}
          close={() => setOpenCategoryModel(false)}
        />
      )}

      {openEditCategoryModel && (
        <EditCategoryModel
          editData={editCategoryData}
          fetchData={fetchCategories}
          close={() => setOpenEditCategoryModel(false)}
        />
      )}

      {openDeleteConfirmBox && (
        <DeleteConfirmBox
          loading={loading}
          cancel={() => setOpenDeleteConfirmBox(false)}
          confirm={handleDeleteCategory}
          close={() => setOpenDeleteConfirmBox(false)}
        />
      )}
    </section>
  )
}

export default Category