"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var socketServer;
function init(httpServer) {
    socketServer = new socket_io_1.Server(httpServer, { cors: { origin: "*" } });
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
// import { IProductsModel } from '../4-models/products-model';
// import { Server as SocketServer, Socket } from "socket.io";
// import { Server as HttpServer } from "http";
// let socketServer: SocketServer;
// function init(httpServer: HttpServer) {
//     socketServer = new SocketServer(httpServer, { cors: { origin: "*" } })
//     socketServer.sockets.on("connection", (socket: Socket) => {
//         console.log("client is connected...")
//     })
// }
// function reportAddedProduct(product: IProductsModel) {
//     socketServer.sockets.emit("admin-added-product", product);
// }
// function reportUpdatedProduct(product: IProductsModel) {
//     socketServer.sockets.emit("admin-updated-product", product);
// }
// export default {
//     init,
//     reportAddedProduct,
//     reportUpdatedProduct,
// }
