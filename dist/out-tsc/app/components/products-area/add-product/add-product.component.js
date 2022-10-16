import { __decorate } from "tslib";
import { Component } from '@angular/core';
import ProductsModel from 'src/app/models/products-model';
let AddProductComponent = class AddProductComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.product = new ProductsModel();
        this.categories = [];
    }
    async ngOnInit() {
        this.categories = await this.productsService.getAllCategories();
    }
    async send() {
        const image = document.getElementById("image");
        ;
        this.product.image = image.files;
        await this.productsService.addProduct(this.product);
    }
};
AddProductComponent = __decorate([
    Component({
        selector: 'app-add-product',
        templateUrl: './add-product.component.html',
        styleUrls: ['./add-product.component.scss']
    })
], AddProductComponent);
export { AddProductComponent };
//# sourceMappingURL=add-product.component.js.map