import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import ProductsModel from 'src/app/models/products-model';
let AdminProductsListComponent = class AdminProductsListComponent {
    constructor(productsService, socketService) {
        this.productsService = productsService;
        this.socketService = socketService;
        this.categories = [];
        this.products = [];
        this.totalPrice = 0;
        this.special = true;
        this.popupState = "no-display";
        this.logoutDiv = "regular-logout";
        this.topBannerState = "top-banner-max";
        this.topBannerMax = true;
        this.category = "all";
        this.manipulatedProduct = new ProductsModel();
        this.productManipulationState = "add";
        this.itemsPerPage = 16;
        this.pages = [];
        this.currentPage = 1;
        this.cartItems = [];
    }
    async ngOnInit() {
        try {
            this.categories = await this.productsService.getAllCategories();
            this.products = await this.productsService.getAllProducts();
            localStorage.setItem("products", JSON.stringify(this.products));
            // initiate an array of numbers to be used as pages
            this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
            this.products = await this.returnPaginatedArray(this.currentPage);
            this.manipulatedProduct.categoryId = "";
            // initiate socket connection
            this.socketService.connect();
        }
        catch (error) {
            console.log(error);
        }
    }
    async getByCategoryOrSearchParameter(parameter) {
        this.currentPage = 1;
        if (parameter === 'all') {
            this.products = await this.productsService.getAllProducts();
            localStorage.setItem("products", JSON.stringify(this.products));
            this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
            this.smallBanner();
            this.category = "all";
        }
        else if (parameter.search) {
            this.products = await this.productsService.getAllProducts();
            this.products = this.products.filter(p => p.name.toLowerCase().includes(parameter.search.toLowerCase().trim()) ||
                p.category.name.toLowerCase().includes(parameter.search.toLowerCase()));
            localStorage.setItem("products", JSON.stringify(this.products));
            this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
            this.smallBanner();
            this.category = "";
        }
        else {
            this.products = await this.productsService.getAllProductsByCategory(parameter._id);
            localStorage.setItem("products", JSON.stringify(this.products));
            this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
            this.smallBanner();
            this.category = parameter.name;
        }
        ;
        this.products = await this.returnPaginatedArray(this.currentPage);
    }
    ;
    smallBanner() {
        this.special = false;
        this.topBannerMax = false;
        this.topBannerState = "top-banner-min";
        this.logoutDiv = "small-logout";
    }
    topBannerToggle() {
        this.topBannerState = this.topBannerState === "top-banner-min" ? "top-banner-max" : "top-banner-min";
    }
    editProduct(product) {
        this.productManipulationState = "edit";
        this.manipulatedProduct = product;
        this.cartOpen();
    }
    send() {
        if (this.imageFileRef.nativeElement.files) {
            this.manipulatedProduct.image = this.imageFileRef.nativeElement.files;
        }
        switch (this.productManipulationState) {
            case "add":
                this.productsService.addProduct(this.manipulatedProduct);
                break;
            case "edit":
                this.productsService.editProduct(this.manipulatedProduct);
                break;
        }
        this.cartClose();
    }
    cartClose() {
        this.popupState = "animate__fadeOutLeft";
        this.manipulatedProduct = new ProductsModel();
        this.imageFileRef.nativeElement.value = "";
        this.productManipulationState = "add";
    }
    cartOpen() {
        this.popupState = "animate__fadeInLeft";
    }
    // pagination for the products
    async returnPaginatedArray(pageNumber = 1) {
        let products = JSON.parse(localStorage.getItem("products"));
        this.currentPage = pageNumber;
        const end = pageNumber * this.itemsPerPage;
        const start = end - this.itemsPerPage;
        return this.products = products.slice(start, end);
    }
};
__decorate([
    ViewChild("imageFile")
], AdminProductsListComponent.prototype, "imageFileRef", void 0);
AdminProductsListComponent = __decorate([
    Component({
        selector: 'app-admin-products-list',
        templateUrl: './admin-products-list.component.html',
        styleUrls: ['./admin-products-list.component.scss']
    })
], AdminProductsListComponent);
export { AdminProductsListComponent };
//# sourceMappingURL=admin-products-list.component.js.map