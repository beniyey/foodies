import { createAction, props } from "@ngrx/store";
import ProductsModel from "src/app/models/products-model";

export const addAllProducts = createAction('AddAllProducts [productList]',
    props<{ payload: ProductsModel[] }>());
export const addProducts = createAction('AddProducts [productSockets]',
    props<{ payload: ProductsModel }>());
export const updateProducts = createAction('updateProducts [productSockets]',
    props<{ payload: ProductsModel }>());
export const resetProducts = createAction('resetProducts [productSockets]');

