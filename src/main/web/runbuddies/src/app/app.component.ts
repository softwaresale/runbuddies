import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { appStateBreakpointsChanged } from './app-state/app-state.actions';

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
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
