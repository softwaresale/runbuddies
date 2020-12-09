import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { group, keyframes, query, style, transition, trigger, useAnimation } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routerAnimations', [
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'runbuddies';
  isMobile = false;
  breakpointSub?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakpointSub = this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  ngOnDestroy(): void {
    this.breakpointSub?.unsubscribe();
  }

  prepareOutlet(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
