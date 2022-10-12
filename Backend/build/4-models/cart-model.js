"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.CartSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var user_model_1 = require("./user-model");
exports.CartSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
exports.CartSchema.virtual("user", {
    ref: user_model_1.UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
});
exports.CartModel = mongoose_1.default.model("CartModel", exports.CartSchema, "carts");
