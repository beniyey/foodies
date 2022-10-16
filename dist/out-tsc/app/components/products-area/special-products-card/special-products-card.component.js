import { __decorate } from "tslib";
import { increment } from './../../../../state/total-price/total-price-actions';
import { add } from './../../../../state/cart/cart-actions';
import { environment } from './../../../../environments/environment';
import { Component, Input } from '@angular/core';
let SpecialProductsCardComponent = class SpecialProductsCardComponent {
    constructor(cartService, store) {
        this.cartService = cartService;
        this.store = store;
        this.quantity = 1;
        this.popUp = false;
        this.dimmed = '';
    }
    ngOnInit() {
        this.imgSrc = environment.imagesUrl + this.specialProduct.product.imageName;
        this.totalPrice = this.specialProduct.product.price * this.quantity;
    }
    async addToCart() {
        const product = await this.cartService.addToCart(this.specialProduct.product, this.quantity);
        product.product = this.specialProduct.product;
        this.store.dispatch(add({ payload: product }));
        this.store.dispatch(increment({ payload: this.totalPrice }));
        this.dimmed = "";
        this.popUp = false;
        this.quantity = 1;
        this.totalPrice = this.specialProduct.product.price * this.quantity;
        alert(`added to cart`);
    }
    quantityPlus() {
        if (this.quantity >= 1 && this.quantity < 20) {
            this.quantity++;
            this.totalPrice = this.specialProduct.product.price * this.quantity;
        }
        else {
            alert(`quantity must be between 1 and 20`);
        }
    }
    quantityMinus() {
        if (this.quantity > 1 && this.quantity <= 20) {
            this.quantity--;
            this.totalPrice = this.specialProduct.product.price * this.quantity;
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
        this.dimmed = "";
        this.popUp = false;
        this.quantity = 1;
        this.totalPrice = this.specialProduct.product.price * this.quantity;
    }
};
__decorate([
    Input()
], SpecialProductsCardComponent.prototype, "specialProduct", void 0);
SpecialProductsCardComponent = __decorate([
    Component({
        selector: 'app-special-products-card',
        templateUrl: './special-products-card.component.html',
        styleUrls: ['./special-products-card.component.scss']
    })
], SpecialProductsCardComponent);
export { SpecialProductsCardComponent };
//# sourceMappingURL=special-products-card.component.js.map