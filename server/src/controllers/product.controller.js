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
      sold,
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
      !shipping
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
        );
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
      sold,
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

const getAllProducts = asynchandler(async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', category, brand, features } = req.body;

    const query = {};
    
    if(search){
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if(category) query.category = category;
    if(brand) query.brand = brand;
    if(features) query.features = features;

    const skip = (page - 1) * limit;


    const totalProduts = await Product.countDocuments(query);

    if (totalProduts === 0) {
      return res
        .status(404)
        .json(
          new apiError(404, 'No products found', false, 'No products found')
        );
    }

    const totalPages = Math.ceil(totalProduts / limit);

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .populate('category')
      .populate('brand')
      .populate('features');

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Products fetched successfully',
          { products, totalPages, totalProduts, currentPage: page },
          true
        )
      );
  } catch (error) {
    console.error('Error adding product:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const getAllProductsByFilter = asynchandler(async (req, res) => {
  try {
    const brands = await Product.distinct('brand');
    const categories = await Product.distinct('category');
    const features = await Product.distinct('features');

    // populate names
    const populateBrands = await Brand.find({ _id: { $in: brands } });
    const populateCategories = await Category.find({ _id: { $in: categories } });
    const populateFeatures = await Feature.find({ _id: { $in: features } });

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Products fetched by filter successfully',
          {
            brands: populateBrands,
            categories: populateCategories,
            features: populateFeatures,
          },
          true
        )
      )
  } catch (error) {
    console.error('Error filtering product:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
})

export { addProduct, getFilterProducts, getAllProducts, getAllProductsByFilter };
