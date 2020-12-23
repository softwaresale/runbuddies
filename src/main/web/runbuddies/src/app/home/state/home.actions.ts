import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user/user.model';

export const loadBuddies = createAction(
  '[Home] Load buddies'
);

export const loadBuddiesSuccess = createAction(
  '[Home] Load buddies Success',
  props<{ buddies: User[] }>()
);

export const loadBuddiesFailure = createAction(
  '[Home] Load buddies Failure',
  props<{ error: any }>()
);

export const loadExploreUsers = createAction(
  '[Home] Load explore'
);

export const loadExploreUsersSuccess = createAction(
  '[Home] Load explore Success',
  props<{ buddies: User[] }>()
);

export const loadExploreUsersFailure = createAction(
  '[Home] Load explore Failure',
  props<{ error: any }>()
);
