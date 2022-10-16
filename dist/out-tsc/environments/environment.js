// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
    production: false,
    loginUrl: 'http://localhost:3001/api/auth/login/',
    registerUrl: 'http://localhost:3001/api/auth/register/',
    categoriesUrl: "http://localhost:3001/api/products-categories/",
    productsUrl: "http://localhost:3001/api/products/",
    productsByCategoryUrl: "http://localhost:3001/api/products-by-category/",
    cartUrl: "http://localhost:3001/api/cart/",
    cartItemsUrl: "http://localhost:3001/api/cart-item/",
    imagesUrl: "http://localhost:3001/",
    specialProductsUrl: "http://localhost:3001/api/special-products/",
    ordersUrl: "http://localhost:3001/api/order",
    userOrdersUrl: "http://localhost:3001/api/user-orders/",
    checkMailUrl: "http://localhost:3001/api/auth/",
    socketUrl: "http://localhost:3001/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map