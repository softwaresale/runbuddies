import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.sass']
})
export class BuddiesComponent implements OnInit {

  profiles = [...Array(20).keys()];
  isMobile$?: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isMobile$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(state => state.matches));
  }
}
