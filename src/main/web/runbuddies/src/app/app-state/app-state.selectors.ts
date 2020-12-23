import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppState from './app-state.reducer';
import { Breakpoints } from '@angular/cdk/layout';

export const selectAppStateState = createFeatureSelector<fromAppState.State>(
  fromAppState.appStateFeatureKey
);

export const appStateIsMobile = createSelector(
  selectAppStateState,
  state => !!state.breakpointState?.breakpoints?.[Breakpoints.HandsetPortrait],
);
