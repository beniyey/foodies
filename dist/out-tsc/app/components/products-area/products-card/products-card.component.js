import { __decorate } from "tslib";
import { increment } from './../../../../state/total-price/total-price-actions';
import { add } from 'src/state/cart/cart-actions';
import { environment } from './../../../../environments/environment';
import { Component, Input } from '@angular/core';
let ProductsCardComponent = class ProductsCardComponent {
    constructor(cartService, store) {
        this.cartService = cartService;
        this.store = store;
        this.quantity = 1;
        this.popUp = false;
        this.dimmed = "bright";
    }
    ngOnInit() {
        this.imageSrc = environment.imagesUrl + this.product.imageName;
        this.totalPrice = this.product.price * this.quantity;
    }
    async addToCart() {
        const cartItem = await this.cartService.addToCart(this.product, this.quantity);
        cartItem.product = this.product;
        this.store.dispatch(add({ payload: cartItem }));
        this.store.dispatch(increment({ payload: this.totalPrice }));
        this.dimmed = "bright";
        this.popUp = false;
        this.quantity = 1;
        this.totalPrice = this.product.price * this.quantity;
        alert(`added to cart`);
    }
    quantityPlus() {
        if (this.quantity >= 1 && this.quantity < 20) {
            this.quantity++;
            this.totalPrice = this.product.price * this.quantity;
        }
        else {
            alert(`quantity must be between 1 and 20`);
        }
    }
    quantityMinus() {
        if (this.quantity > 1 && this.quantity <= 20) {
            this.quantity--;
            this.totalPrice = this.product.price * this.quantity;
        }
        else {
            alert(`quantity must be between 1 and 20`);
        }
    }
    openPopup() {
        this.dimmed = "dimmed";
        this.popUp = true;
    }
    closePopup() {
        this.dimmed = "bright";
        this.popUp = false;
        this.quantity = 1;
        this.totalPrice = this.product.price * this.quantity;
    }
};
__decorate([
    Input()
], ProductsCardComponent.prototype, "product", void 0);
ProductsCardComponent = __decorate([
    Component({
        selector: 'app-products-card',
        templateUrl: './products-card.component.html',
        styleUrls: ['./products-card.component.scss']
    })
], ProductsCardComponent);
export { ProductsCardComponent };
//# sourceMappingURL=products-card.component.js.map