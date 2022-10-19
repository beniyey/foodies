import { environment } from './../../environments/environment';
import { addProducts, updateProducts } from './../../state/products/products-actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private store: Store
  ) { }

  // provide initial socket connection to the backend
  socket = io(environment.socketUrl);

  // connect and listen to socket events
  public connect(): void {
    this.socket.connect();
    console.log("connected to socket", environment.socketUrl);
    this.listen();
  }

  // listen to socket events
  public listen(): void {

    // listen to new products
    this.socket.on("admin-added-product", (product) => {
      this.store.dispatch(addProducts({ payload: product }));
      console.log("added product")
    })

    // listen to updated products
    this.socket.on("admin-updated-product", (product) => {
      this.store.dispatch(updateProducts({ payload: product }));
      console.log("product is updated");
    })

  }

  // disconnect from socket
  disconnect() {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  }

}
