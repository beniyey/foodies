import mongoose from "mongoose";
import { ProductsModel } from "./products-model";

export interface ICartItemModel extends mongoose.Document {
    productId: mongoose.Schema.Types.ObjectId;
    cartId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    totalPrice: number;
}

export const CartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min:0
    },
    totalPrice: {
        type: Number,
        required: true,
        min:1
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

CartItemSchema.virtual("product", {
    ref: ProductsModel,
    localField: "productId",
    foreignField: "_id",
    justOne: true
});

export const CartItemModel = mongoose.model<ICartItemModel>("CartItemModel", CartItemSchema, "cart-items");