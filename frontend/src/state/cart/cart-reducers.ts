import CartItemModel from "src/app/models/cart-item-model";
import { createReducer, on } from '@ngrx/store';
import { addAllCartItems, addCartItems, removeCartItems, resetCartItems } from "./cart-actions";


const initialState: CartItemModel[] = JSON.parse(localStorage.getItem("cartItems")) || [];

export const cartReducer = createReducer(
    initialState,
    on(addAllCartItems, (state, { payload }) => {
        return payload
    }),
    on(addCartItems, (state, { payload }) => {
        const cartItems: CartItemModel[] = JSON.parse(JSON.stringify(state));

        const productIndex = cartItems.findIndex(el => el._id === payload._id);
        if (productIndex > -1) {
            cartItems[productIndex].quantity = payload.quantity;
        } else {
            cartItems.push(payload);
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return cartItems;
    }),
    on(removeCartItems, (state, { payload }) => {
        const cartItems: CartItemModel[] = JSON.parse(JSON.stringify(state));
        const index = cartItems.findIndex(el => el._id === payload._id);
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return cartItems
    }),
    on(resetCartItems, (state) => {
        return [];
    })
);