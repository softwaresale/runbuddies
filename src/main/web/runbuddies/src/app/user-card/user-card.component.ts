import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { appStateIsMobile } from '../app-state/app-state.selectors';
import { User } from '../models/user/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  hovered = false;
  isMobile$?: Observable<boolean>;

  @Input()
  inGrid = false;

  @Input()
  user?: User;

  pic = 'https://lh3.googleusercontent.com/wOnBqLiJIVp_S8uEO1gogJDDu9FStH_Ah6X7uWhkp57BJbswjzKtggWrAPv4J_hjdiaeZJPKVNN7qKMcn9S2TV4sifZim6bxz1sHyAsKCj1lSiFzKh8JWfrcIGx8usVrbDc1QSMfDg=w2400';

  constructor(
    private store$: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(appStateIsMobile));
  }

  get paceFormatted(): string {
    const averagePace = this.user?.averagePace ?? 0;
    if (averagePace === 0) {
      return '';
    }

    const decimal = averagePace - Math.floor(averagePace);
    const seconds = decimal * 60;
    const minutes = Math.floor(averagePace);

    return `${minutes}:${seconds}`;
  }

  async openProfile(): Promise<boolean> {
    return this.router.navigate(['/profile', this.user?.id]);
  }
}
