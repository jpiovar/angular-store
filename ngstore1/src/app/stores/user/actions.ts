import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './types';

export const LOGIN = '[USER] Login';
export const LOGOUT = '[USER] Logout';

export class LoginUser implements Action {
    debugger;
    readonly type = LOGIN;
    constructor(public payload: User) {}
}

export class LogoutUser implements Action {
    readonly type = LOGOUT;
    constructor(public payload: User) {}
}

export type Actions = LoginUser | LogoutUser;
