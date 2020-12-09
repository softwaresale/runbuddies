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
    m: [0, 1],
    t: [0, 2],
    th: [1, 2],
  };

  constructor() { }

  ngOnInit(): void {
  }
}
