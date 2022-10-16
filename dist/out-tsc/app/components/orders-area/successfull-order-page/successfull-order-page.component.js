import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
let SuccessfullOrderPageComponent = class SuccessfullOrderPageComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.totalPrice = 0;
        this.cartItems = [];
    }
    async ngOnInit() {
        this.totalPrice = +localStorage.getItem("totalPrice");
        this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
        localStorage.removeItem("cart");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalPrice");
        const cart = await this.cartService.getCart(localStorage.getItem("token"));
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    async createPDF() {
        const pdf = new jsPDF('p', 'pt', 'a4');
        pdf.html(this.el.nativeElement, {
            callback: (pdf) => {
                pdf.save("invoice.pdf");
            }
        });
    }
    ;
};
__decorate([
    ViewChild('invoice', { static: false })
], SuccessfullOrderPageComponent.prototype, "el", void 0);
SuccessfullOrderPageComponent = __decorate([
    Component({
        selector: 'app-successfull-order-page',
        templateUrl: './successfull-order-page.component.html',
        styleUrls: ['./successfull-order-page.component.scss'],
    })
], SuccessfullOrderPageComponent);
export { SuccessfullOrderPageComponent };
//# sourceMappingURL=successfull-order-page.component.js.map