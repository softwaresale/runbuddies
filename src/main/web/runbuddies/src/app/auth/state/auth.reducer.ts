import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../../models/user/user.model';

export const authFeatureKey = 'auth';

export interface State {
  loggedIn: boolean;
  currentProfile: User | null;
  profileCreated: boolean;
  error: any;
}

export const initialState: State = {
  loggedIn: false,
  currentProfile: null,
  profileCreated: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.authenticated, state => ({ ...state, loggedIn: true })),
  on(AuthActions.loggedOut, state => ({ ...state, loggedIn: false, currentProfile: null })),
  on(AuthActions.authenticationFailed, (state, { err }) => ({ ...state, loggedIn: false, error: err })),
  on(AuthActions.userProfileFound, (state, { user }) => ({ ...state, currentProfile: user })),
  on(AuthActions.userProfileNotFound, state => ({ ...state, error: 'User profile does not exist', currentProfile: null})),
  on(AuthActions.signUpSuccessful, (state, { user }) => ({ ...state, currentProfile: user, profileCreated: true })),
  on(AuthActions.signUpFailed, (state, { err }) => ({ ...state, error: err, profileCreated: false })),
);

