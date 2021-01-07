import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { authenticate, logOut } from '../state/auth.actions';
import { Observable } from 'rxjs';
import { authIsLoggedIn } from '../state/auth.selectors';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.sass']
})
export class LoginButtonsComponent implements OnInit {

  authenticated$?: Observable<boolean>;

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit(): void {
    this.authenticated$ = this.store$.pipe(
      select(authIsLoggedIn),
    );
  }

  login(): void {
    this.store$.dispatch(authenticate());
  }

  logout(): void {
    this.store$.dispatch(logOut());
  }
}
