import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() {
        this.message = {
            fullName: '',
            email: '',
            phone: undefined,
            message: ''
        };
    }
    ngOnInit() {
    }
    send() {
        alert("Message sent successfully, thank your for contacting us");
        this.message = {
            fullName: '',
            email: '',
            phone: undefined,
            message: ''
        };
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map