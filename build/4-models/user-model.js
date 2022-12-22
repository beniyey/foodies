"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var role_model_1 = require("./role-model");
var mongoose_1 = __importDefault(require("mongoose"));
exports.UserSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 20
    },
    id: {
        type: Number,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 128
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25
    },
    roleId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
});
exports.UserSchema.virtual("role", {
    ref: role_model_1.RoleModel,
    localField: "roleId",
    foreignField: "_id",
    justOne: true
});
exports.UserModel = mongoose_1.default.model('UserModel', exports.UserSchema, "user");
// לקוח : שם, שם משפחה, שם משתמש-אימייל, תעודת זהות(PK), סיסמא, עיר, רחוב
