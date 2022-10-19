import ProductsModel from 'src/app/models/products-model';
import { createReducer, on } from '@ngrx/store';
import { addProducts, addAllProducts, resetProducts, updateProducts } from "./products-actions";


const initialState: ProductsModel[] = JSON.parse(localStorage.getItem("products")) || [];

export const productsReducers = createReducer(
    initialState,
    on(addAllProducts, (state, { payload }) => {
        return payload
    }),
    on(addProducts, (state, { payload }) => {
        const products: ProductsModel[] = JSON.parse(JSON.stringify(state));

        // finds out if there is a relation between the product and the category
        // to not add products where they do not belong like -> milk in sweets category
        if (products.find(el => el.categoryId === payload.categoryId)) {
            products.push(payload);
        }

        return products;
    }),
    on(updateProducts, (state, { payload }) => {
        const products: ProductsModel[] = JSON.parse(JSON.stringify(state));
        const index = products.findIndex(el => el._id === payload._id);
        products[index] = JSON.parse(JSON.stringify(payload));
        return products
    }),
    on(resetProducts, (state) => {
        return [];
    })
);