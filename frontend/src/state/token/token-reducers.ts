import { createReducer, on } from '@ngrx/store';
import { login, logout } from './token-actions';

export interface TokenState {
    token: string;
}

const initialState: string = localStorage.getItem("token") != undefined ? localStorage.getItem("token") : "";

export const tokenReducers = createReducer(
    initialState,
    on(login, (state, { payload }) => {
        state = payload;
        return state;
    }),
    on(logout, (state) => {
        state = "";
        return state;
    })
);