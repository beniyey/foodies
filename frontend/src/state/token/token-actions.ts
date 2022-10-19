import { createAction, props } from "@ngrx/store";

export const login = createAction('[auth-page] token',
    props<{ payload: string }>());
export const logout = createAction('[logout] token');

