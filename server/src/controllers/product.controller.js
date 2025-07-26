import { Brand } from '../models/brand.mdoels.js';
import { Category } from '../models/category.models.js';
import { Feature } from '../models/feature.models.js';
import { Product } from '../models/product.models.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asynchandler } from '../utils/asyncHandler.js';

const addProduct = asynchandler(async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      type,
      design,
      customization,
      protection,
      warranty,
      category,
      brand,
      features,
      image,
      stock,
      ratings,
      orders,
      shipping,
      reviews,
      sold
    } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !type ||
      !design ||
      !customization ||
      !protection ||
      !warranty ||
      !category ||
      !brand ||
      !features ||
      !image ||
      !stock ||
      !ratings ||
      !orders ||
      !shipping ||
      !reviews ||
      !sold
    ) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'All fields are required',
            false,
            'Missing required fields'
          )
        )
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      type,
      design,
      customization,
      protection,
      warranty,
      category,
      brand,
      features,
      image,
      stock,
      ratings,
      orders,
      shipping,
      reviews,
      sold
    });

    if (!newProduct) {
      return res
        .status(500)
        .json(
          new apiError(
            500,
            'Product creation failed',
            false,
            'Product creation failed'
          )
        );
    }

    return res
      .status(201)
      .json(
        new apiResponse(201, 'Product added successfully', newProduct, true)
      );
  } catch (error) {
    console.error('Error adding product:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const getFilterProducts = asynchandler(async (req, res) => {
  try {
    const { category, brand, features } = req.query;

    const filters = {};

    if (category) {
      const cat = await Category.findOne({ name: category });

      if (cat) filters.category = cat._id;
    }

    if (brand) {
      const brandId = await Brand.findOne({ name: brand });

      if (brandId) filters.brand = brandId._id;
    }

    if (features) {
      const featureArray = features.split(',');
      const featuresIds = await Feature.find({ name: { $in: featureArray } });

      if (featuresIds.length > 0)
        filters.features = { $all: featuresIds.map(feature => feature._id) };
    }

    const products = await Product.find(filters)
      .populate('category')
      .populate('brand')
      .populate('features');

    return res
      .status(200)
      .json(
        new apiResponse(200, 'Products fetched successfully', products, true)
      );
  } catch (error) {
    console.error('Error adding product:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

export { addProduct, getFilterProducts };
