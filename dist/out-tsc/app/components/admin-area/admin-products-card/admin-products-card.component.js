import { __decorate } from "tslib";
import { environment } from './../../../../environments/environment';
import { Component, Input, Output, EventEmitter } from '@angular/core';
let AdminProductsCardComponent = class AdminProductsCardComponent {
    constructor() {
        this.productToUpdate = new EventEmitter();
        this.class = "";
    }
    ngOnInit() {
        this.imageSrc = environment.imagesUrl + this.product.imageName;
        this.class = "animate__animated animate__fadeIn";
    }
    edit() {
        this.productToUpdate.emit(this.product);
    }
};
__decorate([
    Input()
], AdminProductsCardComponent.prototype, "product", void 0);
__decorate([
    Output()
], AdminProductsCardComponent.prototype, "productToUpdate", void 0);
AdminProductsCardComponent = __decorate([
    Component({
        selector: 'app-admin-products-card',
        templateUrl: './admin-products-card.component.html',
        styleUrls: ['./admin-products-card.component.scss']
    })
], AdminProductsCardComponent);
export { AdminProductsCardComponent };
//# sourceMappingURL=admin-products-card.component.js.map