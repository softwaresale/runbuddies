import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { authIsLoggedIn } from '../auth/state/auth.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  navLinks = [
    {
      title: 'Home',
      icon: 'home',
      link: ['home']
    },
    {
      title: 'Your Buddies',
      icon: 'groups',
      link: ['buddies']
    },
    {
      title: 'Explore',
      icon: 'dashboard',
      link: ['explore']
    },
    {
      title: 'Profile',
      icon: 'account_circle',
      link: ['profile']
    },
    {
      title: 'Settings',
      icon: 'settings',
      link: ['settings']
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLoggedIn$: Observable<boolean> = this.store$.pipe(
    select(authIsLoggedIn)
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$: Store<any>,
  ) {}

}
