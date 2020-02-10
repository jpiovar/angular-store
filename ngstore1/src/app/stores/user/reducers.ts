import { Action } from '@ngrx/store';
import { User } from './types';
import * as UserActions from './actions';

const initialState: User = {
    id: '',
    name: '',
    email: ''
};

export function reducerUser(state: User = initialState, action: UserActions.Actions) {

    switch (action.type) {
        case UserActions.LOGIN:
            // tslint:disable-next-line: no-debugger
            debugger;
            const newState1: User = action.payload;
            return Object.assign(state, newState1);

        case UserActions.LOGOUT:
            const newState2: User = initialState;
            return Object.assign(state, newState2);

        default:
            return state;
    }
}
