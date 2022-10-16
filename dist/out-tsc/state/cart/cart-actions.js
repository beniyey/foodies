import { createAction, props } from "@ngrx/store";
export const addAll = createAction('AddAll cartItems', props());
export const add = createAction('Add cartItem', props());
export const remove = createAction('remove cartItem', props());
export const reset = createAction('reset [logout]');
//# sourceMappingURL=cart-actions.js.map