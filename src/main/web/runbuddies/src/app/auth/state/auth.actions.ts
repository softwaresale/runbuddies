import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user/user.model';

export const initAuthState = createAction(
  '[Auth] Init auth state',
);

export const authenticate = createAction(
  '[Auth] Authenticating',
);

export const authenticated = createAction(
  '[Auth] Successfully authenticated',
);

export const authenticationFailed = createAction(
  '[Auth] Authentication failed',
  props<{err: any}>(),
);

export const logOut = createAction(
  '[Auth] Log out',
);

export const loggedOut = createAction(
  '[Auth] Logged out'
);

export const loadUserProfile = createAction(
  '[Auth] Loading user profile',
);

export const userProfileFound = createAction(
  '[Auth] Loaded user profile for logged in user',
  props<{user: User}>(),
);

export const userProfileNotFound = createAction(
  '[Auth] Current user does not have a user profile',
);

export const signUp = createAction(
  '[Auth] Signing up current user',
  props<{ dto: User}>(),
);

export const signUpSuccessful = createAction(
  '[Auth] User signed up',
  props<{ user: User }>(),
);

export const signUpFailed = createAction(
  '[Auth] User signup failed',
  props<{ err: any }>(),
);
