import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.sass']
})
export class BuddiesComponent implements OnInit {

  profiles = [...Array(20).keys()];
  isMobile$?: Observable<boolean>;

  constructor(private store$: Store<any>) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));
  }
}
