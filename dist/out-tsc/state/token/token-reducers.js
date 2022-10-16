import { createReducer, on } from '@ngrx/store';
import { login, logout } from './token-actions';
const initialState = localStorage.getItem("token") != undefined ? localStorage.getItem("token") : "";
export const tokenReducers = createReducer(initialState, on(login, (state, { payload }) => {
    state = payload;
    return state;
}), on(logout, (state) => {
    state = "";
    return state;
}));
//# sourceMappingURL=token-reducers.js.map