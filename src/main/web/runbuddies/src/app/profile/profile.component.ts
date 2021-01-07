import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';
import { User } from '../models/user/user.model';
import { loadProfile } from './state/profile.actions';
import { profileSelectUser } from './state/profile.selectors';

const getReadableDate = (dateStr: string): string | null => {
  const timeParser = /(\d{1,2}):(\d{1,2})(.*)/;
  const results = timeParser.exec(dateStr);
  if (results) {
    const hours = Number.parseInt(results[1], 10);
    const minutes = Number.parseInt(results[2], 10);

    let date = new Date();
    date = new Date(date.setHours(hours, minutes, 0));
    return date.toLocaleTimeString();
  } else {
    return null;
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, OnDestroy {

  pic = 'https://lh3.googleusercontent.com/wOnBqLiJIVp_S8uEO1gogJDDu9FStH_Ah6X7uWhkp57BJbswjzKtggWrAPv4J_hjdiaeZJPKVNN7qKMcn9S2TV4sifZim6bxz1sHyAsKCj1lSiFzKh8JWfrcIGx8usVrbDc1QSMfDg=w2400';
  profile$?: Observable<User | null>;

  daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(day => day.toUpperCase());

  availability$?: Observable<{ [day: string]: string[] }>;

  isMobile$?: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id)
    ).subscribe(id => this.store$.dispatch(loadProfile({ id })));

    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));
    this.profile$ = this.store$.pipe(select(profileSelectUser));

    this.availability$ = this.profile$.pipe(
      map(profile => profile?.availability),
      tap(availability => console.log(availability)),
      map(availability => {
        const outputAvailability: { [key: string]: string[] } = {};
        this.daysOfTheWeek
          .forEach(day => outputAvailability[day] = []);

        availability?.forEach(avail => {
          const readable = getReadableDate(avail.startTime);
          if (readable) {
            outputAvailability[avail.day]?.push(readable);
          }
        });

        return outputAvailability;
      })
    );
  }

  ngOnDestroy(): void {
  }

  get upcomingAvailability$(): Observable<{ day: string, times: string[] }[]> {

    const retVal = this.availability$?.pipe(
      map(availability => Object.keys(availability)
          .map(day => ({ day, times: availability[day] }))
          .filter(avail => avail.times.length > 0)
      )
    );

    return retVal ?? of([]);
  }
}
