import { Router } from 'express';
import { getUserDetails, imageUpload, login, logout, register, updateUserDetails, verifyEmailHandler } from '../controllers/user.controller.js';
import { jwtVerify } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middelware.js';

const userRouter = Router();

userRouter.route('/register').post(register);
userRouter.route('/verify-email').post(verifyEmailHandler)
userRouter.route('/login').post(login);

// secure routes
userRouter.route('/logout').post(jwtVerify, logout);
userRouter.route('/avatar-upload').post(jwtVerify, upload.single('avatar'), imageUpload)
userRouter.route('/update-user-details').put(jwtVerify, updateUserDetails)
userRouter.route('/get-user-details').get(jwtVerify, getUserDetails)

export { userRouter };
