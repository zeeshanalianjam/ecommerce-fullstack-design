import { Router } from 'express';
import { jwtVerify } from '../middlewares/auth.middleware.js';
import { addFeature, deleteFeature, getAllFeatures, updateFeature } from '../controllers/feature.controller.js';

const featureRouter = Router();

featureRouter.route('/add-feature').post(jwtVerify, addFeature);
featureRouter.route('/get-all-features').get(jwtVerify, getAllFeatures);
featureRouter.route('/update-feature').put(jwtVerify, updateFeature);
featureRouter.route('/delete-feature').delete(jwtVerify, deleteFeature);

export { featureRouter };
