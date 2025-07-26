import { User } from '../models/user.models.js';
import { fileUploadOnCloudinary } from '../services/cloudinary.js';
import { verifyEmail } from '../services/verifyEmail.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asynchandler } from '../utils/asyncHandler.js';
import { verifyEmailTemplate } from '../utils/verifyEmailTemplate.js';

const generateAccessAndRefreshTokens = async userId => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error generating tokens:', error);
    throw new Error('Token generation failed');
  }
};

const register = asynchandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Please provide all fields',
            false,
            'Validation Error'
          )
        );
    }

    // Check if user already exists
    const existingUser = await User.find({ email });

    if (existingUser.length > 0) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'User already exists',
            false,
            'This email is already registered'
          )
        );
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    const user = await User.findById(newUser._id).select(
      '-password -refreshToken'
    );

    const verifyEmailUser = await verifyEmail({
      sendTo: user.email,
      subject: 'Verify your email address',
      html: verifyEmailTemplate({
        name: user.name,
        url: process.env.CORS_ORIGIN,
        id: user._id,
      }),
    });

    if (!verifyEmailUser) {
      return res
        .status(500)
        .json(
          new apiError(
            500,
            'Failed to send verification email',
            false,
            'Email Service Error'
          )
        );
    }

    return res
      .status(201)
      .json(
        new apiResponse(201, 'You have registered successfully', true, user)
      );
  } catch (error) {
    console.error('Error during registration:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const verifyEmailHandler = asynchandler(async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Verification code is required',
            false,
            'Validation Error'
          )
        );
    }

    const user = await User.findOne({ _id: code });

    if (!user) {
      return res
        .status(404)
        .json(new apiError(404, 'User not found', false, 'User not found'));
    }

    await User.findByIdAndUpdate(
      user._id,
      { verifyEmail: true },
      { new: true }
    );

    return res.status(200).json(
      new apiResponse(
        200,
        'Email verified successfully',
        {
          userId: user._id,
          email: user.email,
        },
        true
      )
    );
  } catch (error) {
    console.error('Error verifying email:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const login = asynchandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Please enter email and password',
            false,
            'Validation Error'
          )
        );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(404)
        .json(
          new apiError(
            404,
            'User not found',
            false,
            'This email is not registered'
          )
        );
    }

    if (existingUser.status !== 'Active') {
      return res
        .status(403)
        .json(
          new apiError(
            403,
            'Your account is not Active. Please contact our support team. or admin to activate your account.',
            false,
            'Please contact support'
          )
        );
    }

    if (existingUser.verifyEmail === false) {
      return res
        .status(403)
        .json(
          new apiError(
            403,
            'Please verify your email address before logging in',
            false,
            'Email Not Verified'
          )
        );
    }

    if (existingUser.status === 'Suspended') {
      return res
        .status(403)
        .json(
          new apiError(
            403,
            'Your account has been suspended. Please contact support team for more details.',
            false,
            'Account Suspended'
          )
        );
    }

    // Check password
    const isPasswordValid = await existingUser.comparePassword(password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json(
          new apiError(
            401,
            'Your password is incorrect. Please try again.',
            false,
            'Authentication Error'
          )
        );
    }

    // Generate tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      existingUser._id
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    const loginUser = await User.findById(existingUser._id).select(
      '-password -refreshToken'
    );

    return res
      .status(200)
      .cookie('refreshToken', refreshToken, cookieOptions)
      .cookie('accessToken', accessToken, cookieOptions)
      .json(
        new apiResponse(
          200,
          'Login successful',
          {
            user: loginUser,
            accessToken,
            refreshToken,
          },
          true
        )
      );
  } catch (error) {
    console.error('Error during login:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const logout = asynchandler(async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'User ID is required for logout',
            false,
            'Validation Error'
          )
        );
    }

    await User.findByIdAndUpdate(
      userId,
      { $unset: { refreshToken: '' } },
      { new: true, runValidators: true }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
    .status(200)
    .clearCookie('accessToken', cookieOptions)
    .clearCookie('refreshToken', cookieOptions)
    .json(
      new apiResponse(200, 'Logout successful', true, 'You have been logged out')
    );
  } catch (error) {
    console.error('Error during logout:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
  }
});

const imageUpload = asynchandler(async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'User ID is required for image upload',
            false,
            'Validation Error'
          )
        );
    }

    const file = req.file?.path;

    if (!file) {
      return res
        .status(400)
        .json(
          new apiError(
            400,
            'Please upload an image',
            false,
            'Validation Error'
          )
        );
    }

    const uploadImageToCloudinary = await fileUploadOnCloudinary(file);

    if (!uploadImageToCloudinary?.url) {
      return res
        .status(500)
        .json(
          new apiError(
            500,
            'Failed to upload image',
            false,
            'Image Upload Error'
          )
        );
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId, 
      {
        $set: { avatar: uploadImageToCloudinary.secure_url },
      },
      { new: true, runValidators: true }
    ).select('-password -refreshToken');

    return res
      .status(200)
      .json(
        new apiResponse(200, 'Image uploaded successfully', updatedUser, true)
      );
  } catch (error) {
    console.error('Error during image upload:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
    
  }
});

const updateUserDetails = asynchandler(async (req, res) => {
  try {
    const {name, email, phone} = req.body;

   const user = await User.findById(req.user._id);

   if (!user) {
    return res
      .status(404)
      .json(
        new apiError(
          404,
          'User not found',
          false,
          'User not found'
        )
      );
   }

   const updatedUser = await User.findByIdAndUpdate(
     req.user._id,
     {
       $set: {name, email, phone}
     },

     { new: true, runValidators: true}
    ).select('-password -refreshToken');

    return res
      .status(200)
      .json(
        new apiResponse(200, 'User details updated successfully', updatedUser, true)
      );

  } catch (error) {
    console.error('Error updating user details:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
    
  }
});

const getUserDetails = asynchandler(async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select('-password -refreshToken');

    if (!user) {
      return res
        .status(404)
        .json(
          new apiError(
            404,
            'User not found',
            false,
            'User not found'
          )
        );
    }

    return res
      .status(200)
      .json
        (new apiResponse(200, 'User details fetched successfully', user, true));
  } catch (error) {
    console.error('Error fetching user details:', error);
    return res
      .status(500)
      .json(new apiError(500, 'Internal Server Error', false, error.message));
    
  }
})

export { register, verifyEmailHandler, generateAccessAndRefreshTokens, login, logout, imageUpload, updateUserDetails, getUserDetails };
