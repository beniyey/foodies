import { IProductsModel } from '../4-models/products-model';
import { Server as HttpServer } from 'http'
import { Server as SocketServer, Socket } from 'socket.io'

let socketServer: SocketServer;

function init(httpServer: HttpServer) {

    socketServer = new SocketServer(httpServer, {
        cors: {
            origin: "http://localhost:4200",
        }
    })

    socketServer.sockets.on("connection", (socket: Socket) => {
        console.log("client is connected...")
    })

}

function reportAddedProduct(product: IProductsModel) {
    socketServer.sockets.emit("admin-added-product", product);
}

function reportUpdatedProduct(product: IProductsModel) {
    socketServer.sockets.emit("admin-updated-product", product);
}

export default {
    init,
    reportAddedProduct,
    reportUpdatedProduct,
}