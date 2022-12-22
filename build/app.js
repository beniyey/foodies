"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./2-utils/config"));
var catch_all_1 = __importDefault(require("./3-middleware/catch-all"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var dal_1 = __importDefault(require("./2-utils/dal"));
var auth_controllers_1 = __importDefault(require("./6-controllers/auth-controllers"));
var products_controllers_1 = __importDefault(require("./6-controllers/products-controllers"));
var cart_controllers_1 = __importDefault(require("./6-controllers/cart-controllers"));
var order_controllers_1 = __importDefault(require("./6-controllers/order-controllers"));
var special_products_controllers_1 = __importDefault(require("./6-controllers/special-products-controllers"));
var socket_logic_1 = __importDefault(require("./5-logic/socket-logic"));
var path_1 = __importDefault(require("path"));
var error_models_1 = require("./4-models/error-models");
var server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: '*'
}));
server.use(express_1.default.json());
server.use("/api/", express_1.default.static(path_1.default.join(__dirname, "public")));
// make frontend files accessible from dist folder
server.use(express_1.default.static(path_1.default.join(__dirname + "/dist")));
server.use((0, express_fileupload_1.default)());
server.use("/api", products_controllers_1.default);
server.use("/api", auth_controllers_1.default);
server.use("/api", cart_controllers_1.default);
server.use("/api", order_controllers_1.default);
server.use("/api", special_products_controllers_1.default);
// provide the frontend files
server.use("*", function (req, res, next) {
    if (config_1.default.isDevelopment) {
        var err = new error_models_1.RouteNotFoundError(req.method, req.originalUrl);
        next(err);
    }
    else {
        res.sendFile(path_1.default.join(__dirname + "/dist/index.html"));
    }
});
// catch all api errors and send them to the client
server.use(catch_all_1.default);
// configure an http instance for socket io to use
var httpServerInstance = server.listen(config_1.default.port, function () {
    dal_1.default.connect();
});
socket_logic_1.default.init(httpServerInstance);
