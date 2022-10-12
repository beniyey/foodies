import mongoose from "mongoose";
import { UserModel } from "./user-model";

export interface ICartModel extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId;
    dateCreated: Date;
    isOrdered: boolean;
}

export const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
CartSchema.virtual("user", {
    ref: UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
});

export const CartModel = mongoose.model<ICartModel>("CartModel", CartSchema, "carts");