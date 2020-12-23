import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, OnDestroy {

  pic = 'https://lh3.googleusercontent.com/wOnBqLiJIVp_S8uEO1gogJDDu9FStH_Ah6X7uWhkp57BJbswjzKtggWrAPv4J_hjdiaeZJPKVNN7qKMcn9S2TV4sifZim6bxz1sHyAsKCj1lSiFzKh8JWfrcIGx8usVrbDc1QSMfDg=w2400';
  profileId$?: Observable<string>;

  daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  availability: { [day: string]: string[] } = {
    sunday: ['9:00 AM'],
    monday: [],
    tuesday: ['12:00 PM', '6:00 PM'],
    wednesday: [],
    thursday: ['12:00 PM', '6:00 PM'],
    friday: [],
    saturday: [],
  };

  isMobile$?: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<any>
  ) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.profileId$ = this.activatedRoute.params.pipe(
      map(params => params.id)
    );

    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));
  }

  ngOnDestroy(): void {
  }

  get upcomingAvailability(): { day: string, times: string[] }[] {
    return Object.keys(this.availability)
      .map(day => ({ day, times: this.availability[day] }))
      .filter(availability => availability.times.length > 0);
  }
}
