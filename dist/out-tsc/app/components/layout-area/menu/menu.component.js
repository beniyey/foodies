import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(cartService, productsService) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.items = [];
    }
    async ngOnInit() {
        const items = await this.cartService.getCartItems();
        this.items = items;
    }
    async remove(_id) {
        await this.cartService.removeFromCart(_id);
        this.items = await this.cartService.getCartItems();
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map