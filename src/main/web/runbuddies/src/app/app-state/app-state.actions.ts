import { createAction, props } from '@ngrx/store';
import { BreakpointState } from '@angular/cdk/layout';

export const appStateBreakpointsChanged = createAction(
  '[App State] Breakpoints changed',
  props<{ breakpointState: BreakpointState }>(),
);
