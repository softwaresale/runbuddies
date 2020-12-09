import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  charliePic = 'https://lh3.googleusercontent.com/wOnBqLiJIVp_S8uEO1gogJDDu9FStH_Ah6X7uWhkp57BJbswjzKtggWrAPv4J_hjdiaeZJPKVNN7qKMcn9S2TV4sifZim6bxz1sHyAsKCj1lSiFzKh8JWfrcIGx8usVrbDc1QSMfDg=w2400';
  ariaPic = 'https://lh3.googleusercontent.com/LUeNHar2bHNsLqvYt-Ke2Z7fE1X2jvM1y3GdtpY8_N4E7oFxxQ7P45fCbhrLfbqpV-izHoV_k2AhMN8FQd3BsmdzqGIhTwMPw-C5Zqw--_9YXQzD5Xlc6fJoGg_CIL7I-SIgbNBnag=w2400';
  users = [
    {
      name: 'Charlie Sale',
      fields: {
        intensity: 'MID',
        pace: '9:30'
      },
      picUrl: this.charliePic,
    },
    {
      name: 'Aria Sturmer',
      fields: {
        intensity: 'HIGH',
        pace: '8:30'
      },
      picUrl: this.ariaPic,
    },
  ];
  isMobile = false;
  breakpointSub?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointSub = this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

}
