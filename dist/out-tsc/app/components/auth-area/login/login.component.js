import { __decorate } from "tslib";
import { Component } from '@angular/core';
import CredentialsModel from 'src/app/models/credentials-model';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = new CredentialsModel();
    }
    ngOnInit() {
    }
    async send() {
        try {
            await this.authService.login(this.credentials);
            alert('Login successful');
            this.router.navigate(['/products']);
        }
        catch (error) {
            alert("userName or password is incorrect, please try again");
        }
    }
    // login a demo user for one time users
    async loginDemo() {
        try {
            this.credentials.userName = 'John';
            this.credentials.password = '123456789';
            await this.authService.login(this.credentials);
            alert('Login successful');
            this.router.navigate(['/products']);
        }
        catch (error) {
            alert("Login failed please try again");
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map