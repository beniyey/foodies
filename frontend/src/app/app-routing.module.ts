import { AdminProductsListComponent } from './components/admin-area/admin-products-list/admin-products-list.component';
import { ContactComponent } from './components/shared-area/contact/contact.component';
import { AboutComponent } from './components/shared-area/about/about.component';
import { OrderPageComponent } from './components/orders-area/order-page/order-page.component';
import { WelcomePageComponent } from './components/auth-area/welcome-page/welcome-page.component';
import { AuthPageComponent } from './components/auth-area/auth-page/auth-page.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { SuccessfullOrderPageComponent } from './components/orders-area/successfull-order-page/successfull-order-page.component';

const routes: Routes = [
  { path: "products", component: ProductsListComponent },
  { path: "welcome-page", component: WelcomePageComponent },
  { path: "auth-page/:state", component: AuthPageComponent },
  { path: "add-product", component: AddProductComponent },
  { path: "order-success", component: SuccessfullOrderPageComponent },
  { path: "admin-page", component: AdminProductsListComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "checkout", component: OrderPageComponent },
  { path: "**", component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
