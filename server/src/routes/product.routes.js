import { Router } from "express";
import { addProduct, getAllProducts, getFilterProducts } from "../controllers/product.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.route('/add-product').post(jwtVerify,addProduct);
productRouter.route('/get-products-filters').get(jwtVerify, getFilterProducts);
productRouter.route('/get-all-products').post(jwtVerify, getAllProducts);

export { productRouter };