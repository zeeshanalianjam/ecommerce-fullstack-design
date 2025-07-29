import { Router } from "express";
import { addBrand, deleteBrand, getAllBrands, updateBrand } from "../controllers/brand.controller.js";
import {jwtVerify} from "../middlewares/auth.middleware.js"

const brandRouter = Router();

brandRouter.route('/add-brand').post(jwtVerify,addBrand);
brandRouter.route('/get-all-brands').get(jwtVerify, getAllBrands);
brandRouter.route('/update-brand').put(jwtVerify, updateBrand);
brandRouter.route('/delete-brand').delete(jwtVerify, deleteBrand);

export { brandRouter };