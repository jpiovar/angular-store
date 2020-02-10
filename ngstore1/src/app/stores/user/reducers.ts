import { Action } from '@ngrx/store';
import { User } from './types';
import * as UserActions from './actions';

const initialState: User = {
    id: '',
    name: '',
    email: ''
};

export function reducerUser(state: User|any = initialState, action: UserActions.Actions) {

    switch (action.type) {
        case UserActions.LOGIN:
            // tslint:disable-next-line: no-debugger
            debugger;
            const newState = action.payload;
            return {...state, newState};

        case UserActions.LOGOUT:
            return Object.assign(state, initialState);

        default:
            return state;
    }
}
