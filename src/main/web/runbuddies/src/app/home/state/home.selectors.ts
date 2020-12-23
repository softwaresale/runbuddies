import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from './home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.State>(
  fromHome.homeFeatureKey
);

export const homeSelectBuddies = createSelector(
  selectHomeState,
  state => state.buddies
);

export const homeSelectError = createSelector(
  selectHomeState,
  state => state.error
);

export const homeSelectIsError = createSelector(
  homeSelectError,
  error => !!error
);
