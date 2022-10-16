import { reset } from './../cart/cart-actions';
import { createReducer, on } from '@ngrx/store';
import { add, remove, addAll } from "./cart-actions";
const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];
export const cartReducer = createReducer(initialState, on(addAll, (state, { payload }) => {
    return payload;
}), on(add, (state, { payload }) => {
    const cartItems = JSON.parse(JSON.stringify(state));
    const productIndex = cartItems.findIndex(el => el._id === payload._id);
    if (productIndex > -1) {
        cartItems[productIndex].quantity = payload.quantity;
    }
    else {
        cartItems.push(payload);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}), on(remove, (state, { payload }) => {
    const cartItems = JSON.parse(JSON.stringify(state));
    const index = cartItems.findIndex(el => el._id === payload._id);
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}), on(reset, (state) => {
    return [];
}));
//# sourceMappingURL=cart-reducers.js.map