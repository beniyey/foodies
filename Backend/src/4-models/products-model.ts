import { UploadedFile } from 'express-fileupload';
import { CategoryModel } from './category-model';
import mongoose, { Schema } from "mongoose";

export interface IProductsModel extends mongoose.Document {
    name: string;
    price: number;
    categoryId: mongoose.Schema.Types.ObjectId;
    image: UploadedFile;
    imageName: string;
}

export const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength:3,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: Schema.Types.Mixed,
    },
    imageName: {
        type: String,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

ProductsSchema.virtual("category", {
    ref: CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});

export const ProductsModel = mongoose.model<IProductsModel>("ProductsModel", ProductsSchema, "products");

