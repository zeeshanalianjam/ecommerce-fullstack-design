import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileUploadOnCloudinary = async localfilepath => {
  try {
    if (!localfilepath) {
      throw new Error('File path is required for upload');
    }

    const result = await cloudinary.uploader.upload(localfilepath, {
      folder: 'ecommerce-fullstack-design',
      resource_type: 'auto',
    });

    fs.unlinkSync(localfilepath); // Delete the file after upload

    return result;
  } catch (error) {
    fs.unlinkSync(localfilepath); // Ensure the file is deleted even if upload fails
    console.error('Error uploading file to Cloudinary:', error);
    throw new Error('File upload failed');
  }
};

export { fileUploadOnCloudinary };
