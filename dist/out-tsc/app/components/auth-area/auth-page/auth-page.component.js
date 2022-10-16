import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthPageComponent = class AuthPageComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.login = true;
    }
    ngOnInit() {
        try {
            // check if user is logged in
            let token;
            this.store.subscribe((state) => token = state.token);
            if (token) {
                this.router.navigate(['/products']);
            }
            // check if user is logging in or registering
            this.paramsState = this.route.snapshot.paramMap.get('state');
            if (this.paramsState === 'register') {
                this.login = false;
            }
            else {
                this.login = true;
            }
        }
        catch (error) {
            alert("theres been an error try again or reload page");
        }
    }
    loginState() {
        try {
            this.login = true;
            this.router.navigate(['/auth-page/login']);
        }
        catch (error) {
            alert("theres been an error try again or reload page");
        }
    }
    registerState() {
        try {
            this.login = false;
            this.router.navigate(['/auth-page/register']);
        }
        catch {
            alert("theres been an error try again or reload page");
        }
    }
};
AuthPageComponent = __decorate([
    Component({
        selector: 'app-auth-page',
        templateUrl: './auth-page.component.html',
        styleUrls: ['./auth-page.component.scss']
    })
], AuthPageComponent);
export { AuthPageComponent };
//# sourceMappingURL=auth-page.component.js.map