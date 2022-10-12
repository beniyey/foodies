import mongoose from "mongoose";

export interface ICategoryModel extends mongoose.Document {
    name: string;
}

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export const CategoryModel = mongoose.model<ICategoryModel>("CategoryModel", CategorySchema, "product-category");