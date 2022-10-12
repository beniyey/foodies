import { ProductsModel } from './products-model';
import mongoose from "mongoose";

export interface ISpecialProductsModel extends mongoose.Document {
    productId: mongoose.Schema.Types.ObjectId;
}

export const ProductsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

ProductsSchema.virtual("product", {
    ref: ProductsModel,
    localField: "productId",
    foreignField: "_id",
    justOne: true
});

export const specialProductsModel = mongoose.model<ISpecialProductsModel>("specialProductsModel", ProductsSchema, "special-products");

