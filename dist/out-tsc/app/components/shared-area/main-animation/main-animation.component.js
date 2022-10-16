import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainAnimationComponent = class MainAnimationComponent {
    constructor() {
        this.options = {
            path: '../../../../assets/animations/94296.json',
        };
        this.animationState = "";
        this.iconState = "display: none";
        this.iconClass = "";
    }
    ngOnInit() {
        setTimeout(() => {
            this.animationState = "display: none";
            this.iconState = "display: block";
            this.iconClass = "animate__animated animate__fadeIn";
        }, 1500);
    }
};
MainAnimationComponent = __decorate([
    Component({
        selector: 'app-main-animation',
        templateUrl: './main-animation.component.html',
        styleUrls: ['./main-animation.component.scss']
    })
], MainAnimationComponent);
export { MainAnimationComponent };
//# sourceMappingURL=main-animation.component.js.map