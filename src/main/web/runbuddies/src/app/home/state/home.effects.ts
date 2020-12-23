import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomeActions from './home.actions';
import { UserService } from '../../models/user/user.service';

@Injectable()
export class HomeEffects {

  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadBuddies),
      switchMap(() => this.userService.getAll().pipe(
        map(users => HomeActions.loadBuddiesSuccess({ buddies: users })),
        catchError(error => of(HomeActions.loadBuddiesFailure({ error })))
      )),
    );
  });

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
