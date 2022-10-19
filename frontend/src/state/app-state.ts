import CartItemModel from "src/app/models/cart-item-model";
import ProductsModel from "src/app/models/products-model";

export interface AppState {
    cart: CartItemModel[];
    totalPrice: number;
    products: ProductsModel[];
    token: string;
}