import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfile from './profile.reducer';

export const selectProfileState = createFeatureSelector<fromProfile.State>(
  fromProfile.profileFeatureKey
);

export const profileSelectUser = createSelector(
  selectProfileState,
  state => state.user
);

export const profileSelectError = createSelector(
  selectProfileState,
  state => state.error
);

export const profileSelectIsError = createSelector(
  profileSelectError,
  error => !!error
);
