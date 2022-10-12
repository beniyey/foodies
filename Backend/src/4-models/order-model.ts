import mongoose from "mongoose";
import { UserModel } from "./user-model";

export interface IOrderModel extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId;
    cartId: mongoose.Schema.Types.ObjectId;
    totalPrice: number;
    city: string;
    street: string;
    deliveryDate: Date;
    orderDate: Date;
    cardNumber: string;
}

export const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    city: {
        type: String,
        required: true,
        minlength: 2,
    },
    street: {
        type: String,
        required: true,
        minlength: 2,
    },
    deliveryDate: {
        type: Date,
        required: true,
        min: Date.now()
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    cardNumber: {
        type: String,
        required: true,
        minlength: 16,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

OrderSchema.virtual("user", {
    ref: UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
})

OrderSchema.virtual("cart", {
    ref: "CartModel",
    localField: "cartId",
    foreignField: "_id",
    justOne: true
})

export const OrderModel = mongoose.model<IOrderModel>("OrderModel", OrderSchema, "orders");

