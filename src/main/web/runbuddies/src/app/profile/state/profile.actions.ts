import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user/user.model';

export const loadProfile = createAction(
  '[Profile] Load Profile',
  props<{id: string}>(),
);

export const loadProfileSuccess = createAction(
  '[Profile] Load Profile Success',
  props<{ user: User }>()
);

export const loadProfileFailure = createAction(
  '[Profile] Load Profile Failure',
  props<{ error: any }>()
);
