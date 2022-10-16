import { __decorate } from "tslib";
import { set } from './../../../../state/total-price/total-price-actions';
import { addAll } from './../../../../state/cart/cart-actions';
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(cartService, store) {
        this.cartService = cartService;
        this.store = store;
        // in case of close we emit an event to the parent component
        this.close = new EventEmitter();
        this.cartItems = [];
        this.totalPrice = 0;
    }
    async ngOnInit() {
        try {
            // get cartItems from server  
            this.cartItems = await this.cartService.getCartItems();
            // calculate total price
            this.cartItems.forEach(item => {
                this.totalPrice += item.product.price * item.quantity;
            });
            // dispatch action to store and set totalPrice state
            // and save to local storage to initiate state on refresh
            this.store.dispatch(set({ payload: this.totalPrice }));
            // add all cartItems to store
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
            this.store.dispatch(addAll({ payload: this.cartItems }));
            // subscribe to store to get the data to the cart component
            this.store.subscribe(state => {
                this.cartItems = state?.cart;
                this.totalPrice = state?.totalPrice?.toFixed(2);
            });
        }
        catch (error) {
        }
    }
    closeCart() {
        try {
            this.close.emit();
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    Input()
], CartComponent.prototype, "cartClass", void 0);
__decorate([
    Output()
], CartComponent.prototype, "close", void 0);
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map