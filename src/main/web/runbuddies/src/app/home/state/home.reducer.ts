import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { User } from '../../models/user/user.model';

export const homeFeatureKey = 'home';

export interface State {
  buddies: User[];
  error: any;
}

export const initialState: State = {
  buddies: [],
  error: null
};


export const reducer = createReducer(
  initialState,

  on(HomeActions.loadBuddies, state => state),
  on(HomeActions.loadBuddiesSuccess, (state, { buddies }) => ({ ...state, buddies})),
  on(HomeActions.loadBuddiesFailure, (state, { error }) => ({ ...state, buddies: [], error })),
);
