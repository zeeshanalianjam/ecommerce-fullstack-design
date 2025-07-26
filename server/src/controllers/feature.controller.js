import { Feature } from "../models/feature.models.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asynchandler } from "../utils/asyncHandler.js";

const addFeature = asynchandler(async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res
                .status(400)
                .json(new apiError(400, 'Feature name is required', false, 'Missing feature name'));
        }

        const newFeature = await Feature.create({ name });

        if (!newFeature) {
            return res
                .status(500)
                .json(new apiError(500, 'Error adding feature', false, 'Error adding feature'));
        }

        return res
            .status(201)
            .json(new apiResponse(201, 'Feature added successfully', newFeature, true));
        
    } catch (error) {
        console.error('Error adding feature:', error);
        return res
            .status(500)
            .json(new apiError(500, 'Internal Server Error', false, error.message));
        
    }
})

const getAllFeatures = asynchandler(async (req, res) => {
    try {
        const features = await Feature.find();

        if (!features) {
            return res
                .status(404)
                .json(new apiError(404, 'No features found', false, 'No features found'));
        }

        return res
            .status(200)
            .json(new apiResponse(200, 'Features fetched successfully', features, true));
    } catch (error) {
        console.error('Error getting features:', error);
        return res
            .status(500)
            .json(new apiError(500, 'Internal Server Error', false, error.message));
    }
});

export { addFeature, getAllFeatures };