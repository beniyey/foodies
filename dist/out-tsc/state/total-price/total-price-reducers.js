import { resetTotal, increment, decrement, set } from './total-price-actions';
import { createReducer, on } from '@ngrx/store';
const initialState = +localStorage.getItem('totalPrice') || 0;
export const totalPriceReducers = createReducer(initialState, on(increment, (state, { payload }) => {
    localStorage.setItem('totalPrice', (state + payload).toString());
    return state + payload;
}), on(decrement, (state, { payload }) => {
    localStorage.setItem('totalPrice', (state + payload).toString());
    return state - payload;
}), on(resetTotal, (state) => {
    localStorage.setItem('totalPrice', "0");
    return state = 0;
}), on(set, (state, { payload }) => {
    localStorage.setItem('totalPrice', "" + payload);
    return state = payload;
}));
//# sourceMappingURL=total-price-reducers.js.map