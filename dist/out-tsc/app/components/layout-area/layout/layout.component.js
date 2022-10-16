import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LayoutComponent = class LayoutComponent {
    constructor(store) {
        this.store = store;
        this.mainAnimation = 'main-animation';
        this.footerHidden = false;
    }
    async ngOnInit() {
        try {
            // shows footer only after login
            this.store.subscribe(state => {
                const token = state?.token;
                if (token) {
                    this.footerHidden = false;
                }
                else {
                    this.footerHidden = true;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
LayoutComponent = __decorate([
    Component({
        selector: 'app-layout',
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.scss']
    })
], LayoutComponent);
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map