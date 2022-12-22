"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.RoleSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.RoleSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.RoleModel = mongoose_1.default.model('RoleModel', exports.RoleSchema, "role");
