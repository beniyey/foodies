import { createAction, props } from "@ngrx/store";
export const increment = createAction('increment price', props());
export const decrement = createAction('decrement price', props());
export const set = createAction('reset price', props());
export const resetTotal = createAction('reset price');
//# sourceMappingURL=total-price-actions.js.map