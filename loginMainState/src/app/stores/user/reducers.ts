import { Action } from '@ngrx/store';
import { User } from './types';
import * as UserActions from './actions';

const initialState: User = {
    id: 'j',
    name: 'jnk',
    email: 'jnk@'
};

export function reducer(state: User = initialState, action: UserActions.Actions) {
    debugger;
    switch (action.type) {
        case UserActions.LOGIN:
            debugger;
            const newState = action.payload;
            return {...state, ...newState};

        case UserActions.LOGOUT:
            return {...state, ...initialState};

        default:
            return state;
    }
}
