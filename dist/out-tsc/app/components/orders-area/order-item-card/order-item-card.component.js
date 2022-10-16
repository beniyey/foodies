import { __decorate } from "tslib";
import { environment } from './../../../../environments/environment';
import { Component, Input } from '@angular/core';
let OrderItemCardComponent = class OrderItemCardComponent {
    constructor() { }
    ngOnInit() {
        try {
            this.imgSrc = environment.imagesUrl;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    Input()
], OrderItemCardComponent.prototype, "cartItems", void 0);
OrderItemCardComponent = __decorate([
    Component({
        selector: 'app-order-item-card',
        templateUrl: './order-item-card.component.html',
        styleUrls: ['./order-item-card.component.scss']
    })
], OrderItemCardComponent);
export { OrderItemCardComponent };
//# sourceMappingURL=order-item-card.component.js.map