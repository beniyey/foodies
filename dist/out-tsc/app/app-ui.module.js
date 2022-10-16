import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
const uiModules = [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
];
let AppUiModule = class AppUiModule {
};
AppUiModule = __decorate([
    NgModule({
        imports: uiModules,
        exports: uiModules
    })
], AppUiModule);
export { AppUiModule };
//# sourceMappingURL=app-ui.module.js.map