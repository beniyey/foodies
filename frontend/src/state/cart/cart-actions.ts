import { createAction, props } from "@ngrx/store";
import CartItemModel from "src/app/models/cart-item-model";

export const addAllCartItems = createAction('AddAll cartItems',
    props<{ payload: CartItemModel[] }>());
export const addCartItems = createAction('Add cartItem',
    props<{ payload: CartItemModel }>());
export const removeCartItems = createAction('remove cartItem',
    props<{ payload: CartItemModel }>());
export const resetCartItems = createAction('reset [logout]');

