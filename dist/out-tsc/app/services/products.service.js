import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    async getAllCategories() {
        const categories = await firstValueFrom(this.http.get(environment.categoriesUrl));
        return categories;
    }
    async getAllProducts() {
        const products = await firstValueFrom(this.http.get(environment.productsUrl));
        return products;
    }
    async getAllProductsByCategory(category) {
        const products = await firstValueFrom(this.http.get(environment.productsByCategoryUrl + category));
        return products;
    }
    async addProduct(product) {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price.toString());
        formData.append('image', product.image.item(0));
        formData.append('categoryId', product.categoryId);
        const added = await firstValueFrom(this.http.post(environment.productsUrl, formData));
        return added;
    }
    async editProduct(product) {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price.toString());
        if (product.image.length > 0) {
            formData.append('image', product.image.item(0));
        }
        formData.append('categoryId', product.categoryId);
        const edited = await firstValueFrom(this.http.put(environment.productsUrl + product._id, formData));
        return edited;
    }
    async getAllSpecialProducts() {
        const specialProducts = await firstValueFrom(this.http.get(environment.specialProductsUrl));
        return specialProducts;
    }
};
ProductsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map