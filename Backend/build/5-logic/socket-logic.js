"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var socketServer;
function init(httpServer) {
    socketServer = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "http://localhost:4200",
        }
    });
    socketServer.sockets.on("connection", function (socket) {
        console.log("client is connected...");
    });
}
function reportAddedProduct(product) {
    socketServer.sockets.emit("admin-added-product", product);
}
function reportUpdatedProduct(product) {
    socketServer.sockets.emit("admin-updated-product", product);
}
exports.default = {
    init: init,
    reportAddedProduct: reportAddedProduct,
    reportUpdatedProduct: reportUpdatedProduct,
};
