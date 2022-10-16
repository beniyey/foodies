import { __decorate } from "tslib";
import { resetTotal } from 'src/state/total-price/total-price-actions';
import { reset } from 'src/state/cart/cart-actions';
import jwt_decode from 'jwt-decode';
import { Component } from '@angular/core';
import { logout } from 'src/state/token/token-actions';
let LogoutComponent = class LogoutComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        try {
            this.store.subscribe(state => this.token = state.token);
            this.user = jwt_decode(this.token).user;
        }
        catch (error) {
            console.log(error);
        }
    }
    logout() {
        localStorage.clear();
        this.store.dispatch(logout());
        this.store.dispatch(reset());
        this.store.dispatch(resetTotal());
        this.router.navigate(['/welcome-page']);
    }
};
LogoutComponent = __decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        styleUrls: ['./logout.component.scss']
    })
], LogoutComponent);
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map