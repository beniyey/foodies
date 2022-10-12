"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemModel = exports.CartItemSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var products_model_1 = require("./products-model");
exports.CartItemSchema = new mongoose_1.default.Schema({
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    cartId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 1
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.CartItemSchema.virtual("product", {
    ref: products_model_1.ProductsModel,
    localField: "productId",
    foreignField: "_id",
    justOne: true
});
exports.CartItemModel = mongoose_1.default.model("CartItemModel", exports.CartItemSchema, "cart-items");
