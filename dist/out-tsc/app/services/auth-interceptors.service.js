import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptorsService = class AuthInterceptorsService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        let token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(req);
        }
        else {
            return next.handle(req);
        }
    }
};
AuthInterceptorsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthInterceptorsService);
export { AuthInterceptorsService };
//# sourceMappingURL=auth-interceptors.service.js.map