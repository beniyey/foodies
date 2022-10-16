import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { addProducts, updateProducts } from './../../state/products/products-actions';
import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
let SocketService = class SocketService {
    constructor(store) {
        this.store = store;
        // provide initial socket connection to the backend
        this.socket = io(environment.socketUrl);
    }
    // connect and listen to socket events
    connect() {
        this.socket.connect();
        console.log("connected to socket", environment.socketUrl);
        this.listen();
    }
    // listen to socket events
    listen() {
        // listen to new products
        this.socket.on("admin-added-product", (product) => {
            this.store.dispatch(addProducts({ payload: product }));
        });
        // listen to updated products
        this.socket.on("admin-updated-product", (product) => {
            this.store.dispatch(updateProducts({ payload: product }));
            console.log("product is updated");
        });
    }
    // disconnect from socket
    disconnect() {
        if (this.socket.connected) {
            this.socket.disconnect();
        }
    }
};
SocketService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SocketService);
export { SocketService };
//# sourceMappingURL=socket.service.js.map