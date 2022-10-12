"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_model_1 = require("./../4-models/order-model");
var cyber_1 = __importDefault(require("../2-utils/cyber"));
var cart_item_model_1 = require("../4-models/cart-item-model");
var cart_model_1 = require("../4-models/cart-model");
function addToCart(item) {
    return __awaiter(this, void 0, void 0, function () {
        var dbItem, quantity, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cart_item_model_1.CartItemModel.find({ productId: item.productId, cartId: item.cartId }).exec()];
                case 1:
                    dbItem = _a.sent();
                    if (!dbItem[0]) return [3 /*break*/, 4];
                    quantity = dbItem[0].quantity + item.quantity;
                    return [4 /*yield*/, cart_item_model_1.CartItemModel.updateOne({ productId: item.productId, cartId: item.cartId }, { $set: { quantity: quantity } }).exec()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, cart_item_model_1.CartItemModel.find({ productId: item.productId, cartId: item.cartId }).exec()];
                case 3:
                    product = _a.sent();
                    return [2 /*return*/, product[0]];
                case 4: return [2 /*return*/, item.save()];
            }
        });
    });
}
function removeItem(itemId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cart_item_model_1.CartItemModel.findByIdAndDelete(itemId).exec()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function returnCartItems(cartId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, cart_item_model_1.CartItemModel.find({ cartId: cartId }).populate("product").exec()];
        });
    });
}
function returnCart(request) {
    return __awaiter(this, void 0, void 0, function () {
        var user, dbCarts, userOrders, available, cart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = cyber_1.default.extractUser(request);
                    return [4 /*yield*/, cart_model_1.CartModel.find({ userId: user._id }).exec()];
                case 1:
                    dbCarts = _a.sent();
                    return [4 /*yield*/, order_model_1.OrderModel.find({ userId: user._id }).exec()];
                case 2:
                    userOrders = _a.sent();
                    if (dbCarts.length > 0) {
                        available = dbCarts.find(function (cart) {
                            return !userOrders.find(function (order) { return order.cartId.toString() === cart._id.toString(); });
                        });
                        if (available) {
                            return [2 /*return*/, available];
                        }
                    }
                    cart = new cart_model_1.CartModel({ userId: user._id });
                    cart.dateCreated = new Date();
                    return [2 /*return*/, cart.save()];
            }
        });
    });
}
exports.default = {
    addToCart: addToCart,
    removeItem: removeItem,
    returnCart: returnCart,
    returnCartItems: returnCartItems
};
