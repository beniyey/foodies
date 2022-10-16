import { __decorate } from "tslib";
import { Component } from '@angular/core';
import UserModel from 'src/app/models/user-model';
let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new UserModel();
        this.firstStep = true;
        this.PasswordConfirm = "";
        this.cities = [
            "Tel Aviv",
            "Haifa",
            "Jerusalem",
            "Eilat",
            "Beer Sheva",
            "Rishon Lezion",
            "Petah Tikva",
            "Kfar Saba",
            "Nahariyya",
            "Netanya",
        ];
    }
    ngOnInit() {
    }
    // register the user or return appropriate errors if needed
    async send() {
        try {
            await this.authService.register(this.user);
            alert('Registration successful');
            this.router.navigate(['/products']);
        }
        catch (parameter) {
            if (parameter.error.includes("validation")) {
                alert("validation failed check your provided data and try again");
            }
            else if (parameter.error.includes("email")) {
                alert("email already exists");
            }
            else if (parameter.error.includes("id")) {
                alert("id already exists");
            }
            else {
                alert("there has been an error please try again later, or contact us");
            }
            console.log(parameter.error);
        }
    }
    // changes pages from first to second and back
    changePage() {
        try {
            if (!this.firstStep) {
                this.firstStep = true;
            }
            else {
                this.firstStep = false;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // check if passwords are the same for validation
    checkPasswords() {
        try {
            return this.user.password === this.PasswordConfirm;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    // constantly checks if the username is not taken
    // and alerts the user if it is taken
    async checkEmail(userName) {
        try {
            if (userName.length > 0) {
                const exists = await this.authService.checkMail(userName);
                if (exists) {
                    alert("email already exists");
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map