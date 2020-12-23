import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProfileActions from './profile.actions';
import { UserService } from '../../models/user/user.service';
import { loadProfileFailure, loadProfileSuccess } from './profile.actions';



@Injectable()
export class ProfileEffects {

  loadProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.loadProfile),
      switchMap(action => this.userService.getById(action.id).pipe(
        map(user => loadProfileSuccess({ user })),
        catchError(error => of(loadProfileFailure({ error })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
