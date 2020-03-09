import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './types';

export const LOGIN = '[USER] Login';
export const LOGOUT = '[USER] Logout';

export class LoginUser implements Action {
    readonly type = LOGIN;
    constructor(public payload: User) {
        debugger;
    }
}

export class LogoutUser implements Action {
    readonly type = LOGOUT;
    constructor(public payload: User) {
        debugger;
    }
}

export type Actions = LoginUser | LogoutUser;
