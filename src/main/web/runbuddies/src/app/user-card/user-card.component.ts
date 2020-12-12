import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass'],
  animations: [
  ]
})
export class UserCardComponent implements OnInit {

  @Input()
  name?: string;
  @Input()
  location?: string;
  @Input()
  fields: { [key: string]: any } = {};
  @Input()
  showMatch = false;
  @Input()
  showAvailability = false;
  @Input()
  picLink?: string;

  isShowing = true;

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

  constructor() { }

  ngOnInit(): void {
  }
}
