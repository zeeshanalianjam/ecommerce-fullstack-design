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

const updateFeature = asynchandler(async (req, res) => {
    try {
        const {_id, name} = req.body;

        if (!_id) {
            return res
                .status(400)
                .json(new apiError(400, 'Feature ID is required', false, 'Missing feature ID'));
        }

        const updatedFeature = await Feature.findByIdAndUpdate(
            _id,
            {
                $set: {
                    name
                },
            },
            { new: true, runValidators: true }
        );

        if (!updatedFeature) {
            return res
                .status(404)
                .json(new apiError(404, 'Feature not found', false, 'Feature not found'));
        }

        return res
            .status(200)
            .json(new apiResponse(200, 'Feature updated successfully', updatedFeature, true));

    } catch (error) {
        console.error('Error updating feature:', error);
        return res
            .status(500)
            .json(new apiError(500, 'Internal Server Error', false, error.message));
        
    }
});

const deleteFeature = asynchandler(async (req, res) => {
    try {
        const {_id} = req.body;

        if (!_id) {
            return res
                .status(400)
                .json(new apiError(400, 'Feature ID is required', false, 'Missing feature ID'));
        }

        const deletedFeature = await Feature.findByIdAndDelete(_id);

        if (!deletedFeature) {
            return res
                .status(404)
                .json(new apiError(404, 'Feature Already Deleted', false, 'Feature not found'));
        }

        return res
            .status(200)
            .json(new apiResponse(200, 'Feature deleted successfully', deletedFeature, true));

    } catch (error) {
        console.error('Error deleting feature:', error);
        return res
            .status(500)
            .json(new apiError(500, 'Internal Server Error', false, error.message));
        
    }
});

export { addFeature, getAllFeatures, updateFeature, deleteFeature };