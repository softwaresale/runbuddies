import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ScheduleSheetComponent } from './schedule-sheet/schedule-sheet.component';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, OnDestroy {

  isMobile = false;
  sub?: Subscription;

  @Input()
  picLink = 'https://lh3.googleusercontent.com/wOnBqLiJIVp_S8uEO1gogJDDu9FStH_Ah6X7uWhkp57BJbswjzKtggWrAPv4J_hjdiaeZJPKVNN7qKMcn9S2TV4sifZim6bxz1sHyAsKCj1lSiFzKh8JWfrcIGx8usVrbDc1QSMfDg=w2400';

  availability = {
    m: {
      timesOfDay: [0, 1],
      times: ['9:00AM', '2:00PM'],
    },
    t: {
      timesOfDay: [0, 2],
      times: ['9:00AM', '6:00PM'],
    },
    th: {
      timesOfDay: [1, 2],
      times: ['2:00PM', '6:00PM'],
    }
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
    this.sub = this.breakpointObserver.observe(Breakpoints.Handset).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  schedule(): void {
    this.bottomSheet.open(ScheduleSheetComponent, {
      ariaLabel: 'Schedule a run',
      panelClass: 'schedule-sheet-panel',
      data: this.availability,
    });
  }

  get profilePicUrl(): string {
    return `url(${this.picLink})`;
  }
}
