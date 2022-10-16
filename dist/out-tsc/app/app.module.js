import { __decorate } from "tslib";
import { totalPriceReducers } from './../state/total-price/total-price-reducers';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppUiModule } from './app-ui.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth-area/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { AuthPageComponent } from './components/auth-area/auth-page/auth-page.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { ProductsCardComponent } from './components/products-area/products-card/products-card.component';
import { StoreModule } from '@ngrx/store';
import { AuthInterceptorsService } from './services/auth-interceptors.service';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { MainAnimationComponent } from './components/shared-area/main-animation/main-animation.component';
import { LottieModule } from 'ngx-lottie';
import { WelcomePageComponent } from './components/auth-area/welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddToCartComponent } from './components/products-area/dialog-add-to-cart/dialog-add-to-cart.component';
import { SpecialProductsCardComponent } from './components/products-area/special-products-card/special-products-card.component';
import { CartComponent } from './components/cart-area/cart/cart.component';
import { CartItemCardComponent } from './components/cart-area/cart-item-card/cart-item-card.component';
import { cartReducer } from 'src/state/cart/cart-reducers';
import { OrderPageComponent } from './components/orders-area/order-page/order-page.component';
import { OrderItemCardComponent } from './components/orders-area/order-item-card/order-item-card.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { CommonModule } from '@angular/common';
import { SuccessfullOrderPageComponent } from './components/orders-area/successfull-order-page/successfull-order-page.component';
import { AboutComponent } from './components/shared-area/about/about.component';
import { ContactComponent } from './components/shared-area/contact/contact.component';
import { AdminProductsListComponent } from './components/admin-area/admin-products-list/admin-products-list.component';
import { AdminProductsCardComponent } from './components/admin-area/admin-products-card/admin-products-card.component';
import { tokenReducers } from 'src/state/token/token-reducers';
import { productsReducers } from 'src/state/products/products-reducers';
export function playerFactory() {
    return import('lottie-web');
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            LayoutComponent,
            MenuComponent,
            FooterComponent,
            RegisterComponent,
            LogoutComponent,
            LoginComponent,
            AuthPageComponent,
            ProductsListComponent,
            ProductsCardComponent,
            AddProductComponent,
            MainAnimationComponent,
            WelcomePageComponent,
            DialogAddToCartComponent,
            SpecialProductsCardComponent,
            CartComponent,
            CartItemCardComponent,
            OrderPageComponent,
            OrderItemCardComponent,
            SuccessfullOrderPageComponent,
            AboutComponent,
            ContactComponent,
            AdminProductsListComponent,
            AdminProductsCardComponent
        ],
        imports: [
            AppUiModule,
            BrowserModule,
            CommonModule,
            HttpClientModule,
            MatIconModule,
            AppRoutingModule,
            FormsModule,
            MatDialogModule,
            AngularToastifyModule,
            MatDialogModule,
            LottieModule.forRoot({ player: playerFactory }),
            StoreModule.forRoot({
                cart: cartReducer,
                totalPrice: totalPriceReducers,
                token: tokenReducers,
                products: productsReducers
            }),
            BrowserAnimationsModule
        ],
        providers: [
            ToastService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorsService,
                multi: true
            },
        ],
        bootstrap: [LayoutComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map