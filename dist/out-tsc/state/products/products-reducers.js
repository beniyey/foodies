import { createReducer, on } from '@ngrx/store';
import { addProducts, addAllProducts, resetProducts, updateProducts } from "./products-actions";
const initialState = JSON.parse(localStorage.getItem("products")) || [];
export const productsReducers = createReducer(initialState, on(addAllProducts, (state, { payload }) => {
    return payload;
}), on(addProducts, (state, { payload }) => {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    products.push(payload);
    localStorage.setItem("products", JSON.stringify(products));
    return products;
}), on(updateProducts, (state, { payload }) => {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    const index = products.findIndex(el => el._id === payload._id);
    products[index] = payload;
    localStorage.setItem("products", JSON.stringify(products));
    return products;
}), on(resetProducts, (state) => {
    return [];
}));
//# sourceMappingURL=products-reducers.js.map