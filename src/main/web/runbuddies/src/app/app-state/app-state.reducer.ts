import { createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';
import { BreakpointState } from '@angular/cdk/layout';

export const appStateFeatureKey = 'appState';

export interface State {
  breakpointState: BreakpointState | null;
}

export const initialState: State = {
  breakpointState: null,
};


export const reducer = createReducer(
  initialState,
  on(AppStateActions.appStateBreakpointsChanged, (state, { breakpointState }) => ({ ...state, breakpointState })),
);

