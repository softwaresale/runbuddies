import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cards = [0, 1, 2, 3, 5];
  cards$?: Observable<number[]>;
  isMobile$?: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isMobile$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(state => state.matches)
    );

    this.cards$ = this.isMobile$.pipe(
      map(isMobile => isMobile ? this.cards.slice(0, 3) : this.cards.slice(0, 6))
    );
  }
}
