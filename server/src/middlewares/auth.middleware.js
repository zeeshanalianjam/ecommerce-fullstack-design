import { User } from '../models/user.models.js';
import { apiError } from '../utils/apiError.js';
import { asynchandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const jwtVerify = asynchandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res
        .status(401)
        .json(
          new apiError(401, 'Unauthorized Access', false, 'Token not found')
        );
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json(new apiError(401, 'Unauthorized Access', false, 'Invalid token'));
    }

    const user = await User.findById(decoded._id).select(
      '-password -refreshToken'
    );

    req.user = user;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    return res
      .status(401)
      .json(
        new apiError(
          401,
          'Unauthorized Access',
          false,
          'Token verification failed'
        )
      );
  }
});

export { jwtVerify };
