import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment price',
    props<{ payload: number }>());
export const decrement = createAction('decrement price',
    props<{ payload: number }>());
export const set = createAction('reset price',
    props<{ payload: number }>());
export const resetTotal = createAction('reset price');

