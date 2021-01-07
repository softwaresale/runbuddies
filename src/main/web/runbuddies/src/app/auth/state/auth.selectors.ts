import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const authIsLoggedIn = createSelector(
  selectAuthState,
  state => state.loggedIn
);

export const authSelectProfile = createSelector(
  selectAuthState,
  state => state.currentProfile
);

export const authSelectProfileExists = createSelector(
  authSelectProfile,
  profile => !!profile
);

export const authSelectProfileCreated = createSelector(
  selectAuthState,
  state => state.profileCreated
);
