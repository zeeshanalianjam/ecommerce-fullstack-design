import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.middleware.js";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.controller.js";


const categoryRouter = Router();

categoryRouter.route('/add-category').post(jwtVerify, addCategory);
categoryRouter.route('/get-categories').get(getCategories);
categoryRouter.route('/update-category').put(jwtVerify, updateCategory);
categoryRouter.route('/delete-category').delete(jwtVerify, deleteCategory);

export { categoryRouter };