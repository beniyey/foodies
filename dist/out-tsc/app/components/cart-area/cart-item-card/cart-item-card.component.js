import { __decorate } from "tslib";
import { remove } from './../../../../state/cart/cart-actions';
import { environment } from './../../../../environments/environment';
import { Component, Input } from '@angular/core';
import { decrement } from 'src/state/total-price/total-price-actions';
let CartItemCardComponent = class CartItemCardComponent {
    constructor(cartService, store) {
        this.cartService = cartService;
        this.store = store;
    }
    ngOnInit() {
        // get image url
        try {
            this.imageSrc = environment.imagesUrl + this.cartItem.product.imageName;
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeItem() {
        try {
            this.store.dispatch(remove({ payload: this.cartItem }));
            this.store.dispatch(decrement({ payload: (this.cartItem.totalPrice * this.cartItem.quantity) }));
            await this.cartService.removeFromCart(this.cartItem._id);
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    Input()
], CartItemCardComponent.prototype, "cartItem", void 0);
CartItemCardComponent = __decorate([
    Component({
        selector: 'app-cart-item-card',
        templateUrl: './cart-item-card.component.html',
        styleUrls: ['./cart-item-card.component.scss']
    })
], CartItemCardComponent);
export { CartItemCardComponent };
//# sourceMappingURL=cart-item-card.component.js.map