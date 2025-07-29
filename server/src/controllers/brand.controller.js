import { asynchandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { Brand } from '../models/brand.mdoels.js';

const addBrand = asynchandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Brand name is required',
            false,
            'Missing brand name'
          )
        );
    }

    const newBrand = await Brand.create({ name });

    if (!newBrand) {
      return res
        .status(500)
        .json(
          new apiError(500, 'Error adding brand', false, 'Error adding brand')
        );
    }

    return res
      .status(201)
      .json(new apiResponse(201, 'Brand added successfully', newBrand, true));
  } catch (error) {
    console.error('Error adding brand:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const getAllBrands = asynchandler(async (req, res) => {
  try {
    const brands = await Brand.find();

    if (!brands) {
      return res
        .status(404)
        .json(new apiError(404, 'No brands found', false, 'No brands found'));
    }

    return res
      .status(200)
      .json(new apiResponse(200, 'Brands fetched successfully', brands, true));
  } catch (error) {
    console.error('Error getting brands:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const updateBrand = asynchandler(async (req, res) => {
  try {
    const {_id, name} = req.body;

    if (!_id) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Brand ID is required',
            false,
            'Missing brand ID'
          )
        );
    }

    const updatedBrand = await Brand.findByIdAndUpdate(
      _id,
      {
        $set: {
          name
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedBrand) {
      return res
        .status(404)
        .json(new apiError(404, 'Brand not found', false, 'Brand not found'));
    }

    return res
      .status(200)
      .json(
        new apiResponse(200, 'Brand updated successfully', updatedBrand, true)
    )
    
  } catch (error) {
    console.error('Error updating brand:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
})

const deleteBrand = asynchandler(async (req, res) => {
  try {
    const {_id} = req.body;

    if (!_id) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Brand ID is required',
            false,
            'Missing brand ID'
          )
        );
    }

    const brand = await Brand.findByIdAndDelete(_id);

    if (!brand) {
      return res
        .status(404)
        .json(
          new apiError(
            404,
            'Brand Already Deleted',
            false,
            'Brand not found'
          )
        );
    }

    return res
      .status(200)
      .json(new apiResponse(200, 'Brand deleted successfully', brand, true));
    
  } catch (error) {
    console.error('Error deleting brand:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
})

export { addBrand, getAllBrands, updateBrand, deleteBrand };
