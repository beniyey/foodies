import { __decorate } from "tslib";
import jwt_decode from 'jwt-decode';
import { increment } from './../../../../state/total-price/total-price-actions';
import { Component } from '@angular/core';
let ProductsListComponent = class ProductsListComponent {
    constructor(productsService, router, store, socketService) {
        this.productsService = productsService;
        this.router = router;
        this.store = store;
        this.socketService = socketService;
        this.categories = [];
        this.products = [];
        this.totalPrice = 0;
        this.special = true;
        this.cart = "no-display";
        this.logoutDiv = "regular-logout";
        this.topBannerState = "top-banner-max";
        this.topBannerMax = true;
        this.category = "home";
        this.itemsPerPage = 16;
        this.pages = [];
        this.currentPage = 1;
        this.specialProducts = [];
        this.specialProducts1 = [];
        this.specialProducts2 = [];
    }
    async ngOnInit() {
        this.socketService.connect();
        try {
            let token;
            this.store.subscribe(state => {
                token = state.token;
                this.totalPrice =
                    Math.floor(+state.totalPrice) > 0 ? Math.floor(+state.totalPrice) : 0;
            });
            if (!token) {
                this.router.navigate(['/welcome-page']);
                return;
            }
            this.user = jwt_decode(token).user;
            if (this.user.role?.name === "Admin") {
                this.router.navigate(['/admin-page']);
            }
            this.store.dispatch(increment({ payload: this.totalPrice }));
            this.specialProducts = await this.productsService.getAllSpecialProducts();
            this.specialProducts1 = this.specialProducts.slice(0, 4);
            this.specialProducts2 = this.specialProducts.slice(4, 8);
            this.categories = await this.productsService.getAllCategories();
        }
        catch (error) {
            console.log(error);
        }
    }
    async getByCategoryOrSearchParameter(parameter, search) {
        try {
            this.currentPage = 1;
            // get to home page
            if (parameter === 'home') {
                this.specialProducts = await this.productsService.getAllSpecialProducts();
                this.specialProducts1 = this.specialProducts.slice(0, 4);
                this.specialProducts2 = this.specialProducts.slice(4, 8);
                this.special = true;
                this.topBannerMax = true;
                this.topBannerState = "top-banner-max";
                this.logoutDiv = "regular-logout";
                this.category = "home";
                this.pages = [];
            }
            // get all products
            else if (parameter === 'all') {
                let result = await this.productsService.getAllProducts();
                localStorage.setItem("products", JSON.stringify(result));
                this.store.subscribe(state => {
                    this.products = state.products;
                });
                this.bannerToggle();
                this.category = "all";
            }
            // get products by a search parameter
            else if (search) {
                this.products = await this.productsService.getAllProducts();
                this.products = this.products.filter(p => p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
                    p.category.name.toLowerCase().includes(search.toLowerCase()));
                localStorage.setItem("products", JSON.stringify(this.products));
                this.bannerToggle();
                this.category = "";
            }
            // get products by category
            else if (parameter._id) {
                this.products = await this.productsService.getAllProductsByCategory(parameter._id);
                localStorage.setItem("products", JSON.stringify(this.products));
                this.bannerToggle();
                this.category = parameter.name;
            }
            ;
            // pagination settings
            this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
            this.products = await this.returnPaginatedArray(this.currentPage);
        }
        catch (error) {
            console.log(error);
        }
    }
    ;
    bannerToggle() {
        try {
            this.special = false;
            this.topBannerMax = false;
            this.topBannerState = "top-banner-min";
            this.logoutDiv = "small-logout";
        }
        catch (error) {
            console.log(error);
        }
    }
    cartToggle() {
        try {
            this.cart = this.cart === "animate__fadeInLeft" ? "animate__fadeOutLeft" : "animate__fadeInLeft";
        }
        catch (error) {
            console.log(error);
        }
    }
    topBannerToggle() {
        try {
            this.topBannerState = this.topBannerState === "top-banner-min" ? "top-banner-max" : "top-banner-min";
        }
        catch (error) {
            console.log(error);
        }
    }
    async returnPaginatedArray(pageNumber = 1) {
        try {
            let products = JSON.parse(localStorage.getItem("products"));
            this.currentPage = pageNumber;
            const end = pageNumber * this.itemsPerPage;
            const start = end - this.itemsPerPage;
            return this.products = products.slice(start, end);
        }
        catch (error) {
            console.log(error);
        }
    }
};
ProductsListComponent = __decorate([
    Component({
        selector: 'app-products-list',
        templateUrl: './products-list.component.html',
        styleUrls: ['./products-list.component.scss']
    })
], ProductsListComponent);
export { ProductsListComponent };
//# sourceMappingURL=products-list.component.js.map