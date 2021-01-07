import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import {
  authenticated,
  authenticationFailed,
  loggedOut, signUpFailed,
  signUpSuccessful,
  userProfileFound,
  userProfileNotFound
} from './auth.actions';
import { Router } from '@angular/router';
import { UserService } from '../../models/user/user.service';


@Injectable()
export class AuthEffects {

  initAuthState$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.initAuthState),
    switchMap(() => this.authService.isAuthenticated().pipe(
      map(isAuthenticated => isAuthenticated ? authenticated() : authenticationFailed({ err: 'Not logged in' })),
      catchError(err => of(authenticationFailed({ err }))),
    ))
  ));

  authenticate$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.authenticate),
    switchMap(() => this.authService.login().pipe(
      switchMap(() => this.authService.isAuthenticated()),
      map(isAuthenticated => isAuthenticated ? authenticated() : authenticationFailed({ err: 'Not logged in' })),
      catchError(err => of(authenticationFailed({ err }))),
    ))
  ));

  logOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logOut),
    map(action => {
      this.authService.logout();
      return loggedOut();
    })
  ));

  loadCurrentUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadUserProfile),
    switchMap(() => this.userService.getCurrentUser().pipe(
      map(user => userProfileFound({ user })),
      catchError(err => {
        // TODO Check that it's a 404, but it should be
        return of(userProfileNotFound());
      }),
    ))
  ));

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUp),
    switchMap(action => this.userService.signUp(action.dto).pipe(
      map(newUser => signUpSuccessful({ user: newUser })),
      catchError(err => of(signUpFailed({ err })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) {}

}
