import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { User } from '../../models/user/user.model';

export const profileFeatureKey = 'profile';

export interface State {
  user: User | null;
  error: any;
}

export const initialState: State = {
  user: null,
  error: null,
};


export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfile, state => state),
  on(ProfileActions.loadProfileSuccess, (state, { user }) => ({ ...state, user })),
  on(ProfileActions.loadProfileFailure, (state, { error }) => ({ ...state, error })),
);

