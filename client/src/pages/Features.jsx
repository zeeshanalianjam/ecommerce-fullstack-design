
import React, { useEffect, useState } from 'react'
import NoData from '../components/Category/NoData'
import { handleApiError } from '../utils/handleApiError'
import { Axios } from '../utils/axios'
import { summaryApi } from '../common/summaryApi'
import { DeleteConfirmBox, EditBrandModel, EditFeatureModel, UploadBrandModel, UploadFeatureModel } from '../components/export'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import toast from 'react-hot-toast'

const Features = () => {
    const [brandData, setBrandData] = useState([])
    const [loading, setLoading] = useState(false)
    const [openBrandModel, setOpenBrandModel] = useState(false)
    const [openEditCategoryModel, setOpenEditCategoryModel] = useState(false)
    const [editCategoryData, setEditCategoryData] = useState('')
    const [openDeleteConfirmBox, setOpenDeleteConfirmBox] = useState(false)
    const [deleteBrand, setDeleteBrand] = useState('')

    const fetchBrands = async () => {
      try {
        setLoading(true)
        const response = await Axios({
          ...summaryApi.fetchAllFeatures
        })

        if(response.data.success) {
          setBrandData(response.data.data)
        }

      } catch (error) {
        handleApiError(error)
      } finally {
        setLoading(false)
      }
      
    }

    useEffect(() => {
      fetchBrands()
    }, [])


    const handleDeleteBrands = async () => {
      try {
        setLoading(true)
        const response = await Axios({
          ...summaryApi.deleteFeature,
          data: {
            _id: deleteBrand._id
          }
        })

        if(response.data.success){
          toast.success(response.data.message)
          fetchBrands()
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
        <h2 className="font-semibold">Features</h2>
        <button
          onClick={() => setOpenBrandModel(true)}
          className="text-sm border border-primary-200 hover:bg-primary-200 px-3 py-1 rounded"
        >
          Add Feature
        </button>
      </div>

      {!brandData[0] && !loading && <NoData />}

      <div className="p-4 space-y-2">
  {brandData.map((category) => (
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
            setDeleteBrand(category);
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

      {openBrandModel && (
        <UploadFeatureModel
          fetchData={fetchBrands}
          close={() => setOpenBrandModel(false)}
        />
      )}

      {openEditCategoryModel && (
        <EditFeatureModel
          editData={editCategoryData}
          fetchData={fetchBrands}
          close={() => setOpenEditCategoryModel(false)}
        />
      )}

      {openDeleteConfirmBox && (
        <DeleteConfirmBox
          loading={loading}
          cancel={() => setOpenDeleteConfirmBox(false)}
          confirm={handleDeleteBrands}
          close={() => setOpenDeleteConfirmBox(false)}
        />
      )}
    </section>
  )
}

export default Features