import { Router } from "express";
import { addProduct, getFilterProducts } from "../controllers/product.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.route('/add-product').post(jwtVerify,addProduct);
productRouter.route('/get-products-filters').get(jwtVerify, getFilterProducts);

export { productRouter };