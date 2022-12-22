"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var user_model_1 = require("./user-model");
exports.OrderSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    cartId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
exports.OrderSchema.virtual("user", {
    ref: user_model_1.UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
});
exports.OrderSchema.virtual("cart", {
    ref: "CartModel",
    localField: "cartId",
    foreignField: "_id",
    justOne: true
});
exports.OrderModel = mongoose_1.default.model("OrderModel", exports.OrderSchema, "orders");
