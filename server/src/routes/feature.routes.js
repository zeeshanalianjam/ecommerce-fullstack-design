import { Router } from 'express';
import { jwtVerify } from '../middlewares/auth.middleware.js';
import { addFeature, getAllFeatures } from '../controllers/feature.controller.js';

const featureRouter = Router();

featureRouter.route('/add-feature').post(jwtVerify, addFeature);
featureRouter.route('/get-all-features').get(jwtVerify, getAllFeatures);

export { featureRouter };
