import { fileUploadOnCloudinary } from '../services/cloudinary.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asynchandler } from '../utils/asyncHandler.js';

const uploadImage = asynchandler(async (req, res) => {
  try {
    const file = req.file?.path;
    if (!file) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Image file is required',
            false,
            'No image file provided'
          )
        );
    }

    const fileUploadToCloudinary = await fileUploadOnCloudinary(file);

    if (!fileUploadToCloudinary.url) {
      return res
        .status(500)
        .json(
          new apiError(
            500,
            'Image upload failed',
            false,
            'Failed to upload image to Cloudinary'
          )
        );
    }

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          'Image uploaded successfully',
          { imageUrl: fileUploadToCloudinary.secure_url },
          true
        )
      );
  } catch (error) {
    console.error('Error uploading image:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

export { uploadImage };
