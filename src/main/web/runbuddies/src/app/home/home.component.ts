import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';
import { User } from '../models/user/user.model';
import { homeSelectBuddies } from './state/home.selectors';
import { loadBuddies } from './state/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  buddies$?: Observable<User[]>;
  isMobile$?: Observable<boolean>;

  constructor(private store$: Store<any>) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));

    this.store$.dispatch(loadBuddies());
    this.buddies$ = this.store$.pipe(select(homeSelectBuddies));
  }
}
