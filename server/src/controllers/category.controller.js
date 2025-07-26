import { Category } from '../models/category.models.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asynchandler } from '../utils/asyncHandler.js';

const addCategory = asynchandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Name is required',
            false,
            'Missing required fields'
          )
        );
    }

    const newCategory = await Category.create({
      name
    });

    return res
      .status(201)
      .json(
        new apiResponse(201, 'Category added successfully', newCategory, true)
      );
  } catch (error) {
    console.error('Error adding category:', error);
    return apiError(res, 500, 'Internal Server Error', error.message);
  }
});

const getCategories = asynchandler(async (req, res) => {
  try {
    const categories = await Category.find()

    if (!categories || categories.length === 0) {
      return res
        .status(404)
        .json(
          new apiError(
            404,
            'No categories found',
            false,
            'Categories not found'
          )
        );
    }

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Categories fetched successfully',
          categories,
          true
        )
      );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return apiError(res, 500, 'Internal Server Error', error.message);
  }
});

const updateCategory = asynchandler(async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Category ID is required',
            false,
            'Missing category ID'
          )
        );
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        $set: {
          name
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res
        .status(404)
        .json(
          new apiError(404, 'Category not found', false, 'Category not found')
        );
    }

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Category updated successfully',
          updatedCategory,
          true
        )
      );
  } catch (error) {
    console.error('Error updating category:', error);
    return apiError(res, 500, 'Internal Server Error', error.message);
  }
});

const deleteCategory = asynchandler(async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Category ID is required',
            false,
            'Missing category ID'
          )
        );
    }

    const deletedCategory = await Category.findByIdAndDelete(_id);

    if (!deletedCategory) {
      return res
        .status(404)
        .json(
          new apiError(404, 'Category not found', false, 'Category not found')
        );
    }

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Category deleted successfully',
          deletedCategory,
          true
        )
      );
  } catch (error) {
    console.error('Error deleting category:', error);
    return apiError(res, 500, 'Internal Server Error', error.message);
  }
});

export { addCategory, getCategories, updateCategory, deleteCategory };
