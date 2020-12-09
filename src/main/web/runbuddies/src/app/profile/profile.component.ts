import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, OnDestroy {

  isMobile = false;
  sub?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.sub = this.breakpointObserver.observe(Breakpoints.Handset).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
