"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.CategorySchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.CategorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.CategoryModel = mongoose_1.default.model("CategoryModel", exports.CategorySchema, "product-category");
