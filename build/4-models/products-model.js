"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModel = exports.ProductsSchema = void 0;
var category_model_1 = require("./category-model");
var mongoose_1 = __importStar(require("mongoose"));
exports.ProductsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    imageName: {
        type: String,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.ProductsSchema.virtual("category", {
    ref: category_model_1.CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});
exports.ProductsModel = mongoose_1.default.model("ProductsModel", exports.ProductsSchema, "products");
