import { Action } from '@ngrx/store';
import { User } from './types';
import * as UserActions from './actions';

const initialState: User = {
    id: 'j',
    name: 'jnk',
    email: 'jnk@'
};

export function reducer(state: User = initialState, action: UserActions.Actions) {
    // tslint:disable-next-line: no-debugger
    debugger;
    switch (action.type) {
        case UserActions.LOGIN:
            // tslint:disable-next-line: no-debugger
            debugger;
            // const newState = action.payload;
            const newState = { id: 'aaa', name: 'john', email: 'aa@aaa'};
            return {...state, ...newState};

        case UserActions.LOGOUT:
            return {...state, ...initialState};

        default:
            return state;
    }
}
