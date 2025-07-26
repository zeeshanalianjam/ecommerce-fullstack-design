import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.middleware.js";
import { uploadImage } from "../controllers/uploadImage.controller.js";
import { upload } from "../middlewares/multer.middelware.js";

const uploadImageRouter = Router();

uploadImageRouter.route('/upload-image-file').post(jwtVerify,upload.single('file'), uploadImage);

export { uploadImageRouter };