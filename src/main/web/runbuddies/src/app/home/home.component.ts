import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cards = [0, 1, 2, 3, 5];
  cards$?: Observable<number[]>;
  isMobile$?: Observable<boolean>;

  constructor(private store$: Store<any>) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));

    this.cards$ = this.isMobile$.pipe(
      map(isMobile => isMobile ? this.cards.slice(0, 3) : this.cards.slice(0, 6))
    );
  }
}
