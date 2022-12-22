"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialProductsModel = exports.ProductsSchema = void 0;
var products_model_1 = require("./products-model");
var mongoose_1 = __importDefault(require("mongoose"));
exports.ProductsSchema = new mongoose_1.default.Schema({
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.ProductsSchema.virtual("product", {
    ref: products_model_1.ProductsModel,
    localField: "productId",
    foreignField: "_id",
    justOne: true
});
exports.specialProductsModel = mongoose_1.default.model("specialProductsModel", exports.ProductsSchema, "special-products");
