import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { appStateBreakpointsChanged } from './app-state/app-state.actions';
import { initAuthState, loadUserProfile } from './auth/state/auth.actions';
import { authSelectProfileExists } from './auth/state/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private store$: Store<any>,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(state => {
        this.store$.dispatch(appStateBreakpointsChanged({ breakpointState: state }));
      });

    this.store$.dispatch(initAuthState());
    this.store$.dispatch(loadUserProfile());

    this.store$.pipe(
      select(authSelectProfileExists),
      takeUntil(this.unsubscribe$),
    ).subscribe(profileExists => {
      if (!profileExists) {
        this.router.navigateByUrl('/signup').then();
      } else {
        this.router.navigateByUrl('/home').then();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
