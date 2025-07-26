import { Router } from "express";
import { addBrand, getAllBrands } from "../controllers/brand.controller.js";
import {jwtVerify} from "../middlewares/auth.middleware.js"

const brandRouter = Router();

brandRouter.route('/add-brand').post(jwtVerify,addBrand);
brandRouter.route('/get-all-brands').get(jwtVerify, getAllBrands);

export { brandRouter };