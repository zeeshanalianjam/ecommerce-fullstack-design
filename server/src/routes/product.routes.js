import { Router } from "express";
import { addProduct, getAllProducts, getAllProductsByFilter, getFilterProducts } from "../controllers/product.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.route('/add-product').post(jwtVerify,addProduct);
productRouter.route('/get-products-filters').get(jwtVerify, getFilterProducts);
productRouter.route('/get-all-products').post(jwtVerify, getAllProducts);
productRouter.route('/get-products-by-filter').get(jwtVerify, getAllProductsByFilter);

export { productRouter };