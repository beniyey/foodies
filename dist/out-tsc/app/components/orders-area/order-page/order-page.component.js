import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import OrderModel from 'src/app/models/order-model';
let OrderPageComponent = class OrderPageComponent {
    constructor(store, cartService, router) {
        this.store = store;
        this.cartService = cartService;
        this.router = router;
        this.order = new OrderModel();
        this.totalProducts = 0;
    }
    // give current date string in format yyyy-mm-dd
    get currentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = (date.getDate() + 1) >= 10 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
        return `${year}-${month}-${day}`;
    }
    async ngOnInit() {
        try {
            this.order.city = "";
            this.orders = await this.cartService.getUserOrders();
            this.cartItems = await this.cartService.getCartItems();
            // set variables using state
            this.store.subscribe(state => {
                this.cartItems = state.cart;
                this.totalPrice = +state.totalPrice;
            });
        }
        catch (error) {
            alert("there was an error please try again later or reload the page");
        }
    }
    async send() {
        try {
            // validate that date is not in the past
            if (new Date(this.dateOfDelivery.nativeElement.value).getTime() < new Date().getTime()) {
                alert("delivery date must be in the future");
                return;
            }
            ;
            // validate that date is not taken
            if (this.validateDate()) {
                return;
            }
            // use stored and available data to create order
            this.order.cartId = JSON.parse(localStorage.getItem("cart"))._id;
            this.order.userId = JSON.parse(localStorage.getItem("cart")).userId;
            this.order.orderDate = new Date();
            this.order.totalPrice = this.totalPrice;
            await this.cartService.sendOrder(this.order);
            alert("order had been placed");
            this.router.navigate(["/order-success"]);
        }
        catch (error) {
            console.log(error);
        }
    }
    // validate the date is not taken by 3 or more orders
    validateDate() {
        try {
            const result = this.orders.filter(order => new Date(order.deliveryDate).getTime() === new Date(this.dateOfDelivery.nativeElement.value).getTime());
            if (result.length > 2) {
                alert("please Choose another date this date is already taken");
                this.dateOfDelivery.nativeElement.value = this.currentDate;
                return true;
            }
            ;
            return false;
        }
        catch (error) {
            console.log(error);
        }
    }
    ;
    findElementToHighlight() {
        if (this.pageSearchParameter.nativeElement.value?.length > 0) {
            if (this.searchItems.nativeElement.innerHTML.includes("style='background-color:yellow;")) {
                this.searchItems.nativeElement.innerHTML = this.originalHTML;
            }
            else {
                this.originalHTML = this.searchItems.nativeElement.innerHTML;
            }
            this.searchItems.nativeElement.innerHTML = this.searchItems.nativeElement.innerHTML.replaceAll(this.pageSearchParameter.nativeElement.value, "<span style='background-color:yellow;'>" + this.pageSearchParameter.nativeElement.value + "</span>");
        }
    }
};
__decorate([
    ViewChild('pageSearch')
], OrderPageComponent.prototype, "pageSearchParameter", void 0);
__decorate([
    ViewChild('delivery')
], OrderPageComponent.prototype, "dateOfDelivery", void 0);
__decorate([
    ViewChild('searchItems')
], OrderPageComponent.prototype, "searchItems", void 0);
OrderPageComponent = __decorate([
    Component({
        selector: 'app-order-page',
        templateUrl: './order-page.component.html',
        styleUrls: ['./order-page.component.scss']
    })
], OrderPageComponent);
export { OrderPageComponent };
//# sourceMappingURL=order-page.component.js.map