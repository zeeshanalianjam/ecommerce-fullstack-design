import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    addressLine: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true, 
    }
},{
    timestamps: true,
})

export const Address = mongoose.model("Address", addressSchema);