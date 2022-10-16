import { __decorate } from "tslib";
import { Component } from '@angular/core';
let WelcomePageComponent = class WelcomePageComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.mainAnimation = 'main-animation';
    }
    ngOnInit() {
        try {
            setTimeout(() => {
                this.mainAnimation = 'main-animation animate__animated animate__fadeOut';
                setTimeout(() => {
                    this.mainAnimation = 'no-display';
                }, 1000);
            }, 2500);
            const token = this.store.source._value.token;
            if (token) {
                this.router.navigate(['/products']);
            }
        }
        catch (error) {
            alert("theres been an error try again or reload page");
        }
    }
    loginState() {
        try {
            this.router.navigate(['/auth-page/login']);
        }
        catch (error) {
            alert("theres been an error try again or reload page");
        }
    }
    registerState() {
        try {
            this.router.navigate(['/auth-page/register']);
        }
        catch (error) {
            alert("theres been an error try again or reload page");
        }
    }
};
WelcomePageComponent = __decorate([
    Component({
        selector: 'app-welcome-page',
        templateUrl: './welcome-page.component.html',
        styleUrls: ['./welcome-page.component.scss']
    })
], WelcomePageComponent);
export { WelcomePageComponent };
//# sourceMappingURL=welcome-page.component.js.map