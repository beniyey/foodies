import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import CartItemModel from '../models/cart-item-model';
import jwtDecode from 'jwt-decode';
let CartService = class CartService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    async getCart(token) {
        const cart = await firstValueFrom(this.http.post(environment.cartUrl, null));
        return cart;
    }
    async getCartItems() {
        const cartId = JSON.parse(localStorage.getItem('cart'))._id;
        const cartItems = await firstValueFrom(this.http.get(environment.cartItemsUrl + cartId));
        return cartItems;
    }
    async addToCart(product, quantity) {
        const cartItem = new CartItemModel();
        cartItem.productId = product._id;
        cartItem.quantity = quantity;
        cartItem.totalPrice = product.price;
        cartItem.cartId = JSON.parse(localStorage.getItem('cart'))._id;
        const addedItem = firstValueFrom(this.http.post(environment.cartItemsUrl, cartItem));
        return addedItem;
    }
    async removeFromCart(itemId) {
        await firstValueFrom(this.http.delete(environment.cartItemsUrl + itemId));
    }
    async sendOrder(order) {
        const addedOrder = await firstValueFrom(this.http.post(environment.ordersUrl, order));
        return addedOrder;
    }
    async getUserOrders() {
        const userId = jwtDecode(this.store.source._value.token).user._id;
        const orders = await firstValueFrom(this.http.get(environment.userOrdersUrl + userId));
        return orders;
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map