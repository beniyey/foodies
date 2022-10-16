import { createAction, props } from "@ngrx/store";
export const addAllProducts = createAction('AddAll productList', props());
export const addProducts = createAction('Add cartItem', props());
export const updateProducts = createAction('update cartItem', props());
export const resetProducts = createAction('reset [logout]');
//# sourceMappingURL=products-actions.js.map