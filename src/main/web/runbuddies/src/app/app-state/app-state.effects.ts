import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as AppStateActions from './app-state.actions';


@Injectable()
export class AppStateEffects {

  constructor(private actions$: Actions) {}

}
