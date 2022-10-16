import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { login } from 'src/state/token/token-actions';
let AuthService = class AuthService {
    constructor(http, cartService, store) {
        this.http = http;
        this.cartService = cartService;
        this.store = store;
    }
    async login(credentials) {
        const token = await firstValueFrom(this.http.post(environment.loginUrl, credentials));
        localStorage.setItem('token', token);
        this.store.dispatch(login({ payload: token }));
        const cart = await this.cartService.getCart(token);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    async register(user) {
        const token = await firstValueFrom(this.http.post(environment.registerUrl, user));
        localStorage.setItem('token', token);
        this.store.dispatch(login({ payload: token }));
        const cart = await firstValueFrom(this.http.post(environment.cartUrl, { userId: user.id }));
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    async checkMail(userName) {
        return await firstValueFrom(this.http.get(environment.checkMailUrl + userName));
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map