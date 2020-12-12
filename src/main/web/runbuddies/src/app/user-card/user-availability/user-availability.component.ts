import { Component, Input, OnInit } from '@angular/core';
import { MatChipListChange } from '@angular/material/chips';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-user-availability',
  templateUrl: './user-availability.component.html',
  styleUrls: ['./user-availability.component.sass']
})
export class UserAvailabilityComponent implements OnInit {

  daysOfWeek = ['s', 'm', 't', 'w', 'th', 'f', 's'];
  timesOfDay = ['morning', 'afternoon', 'evening'];

  @Input()
  availability: { [day: string]: { timesOfDay: number[], times: string[] } } = {};

  currentDay?: string;

  @Input()
  showTimes = false;

  constructor() { }

  ngOnInit(): void {
    this.currentDay = Object.keys(this.availability)[0];
  }

  onChipListChange(event: MatChipListChange): void {
    console.log(event);
  }

  dayIsSelected(day: string): boolean {
    return day in this.availability;
  }

  timeIsSelected(day: string | undefined, time: number): boolean {
    return this.availability[day ?? '']?.timesOfDay?.includes(time);
  }

  getTimesForDay(day: string | undefined): string[] {
    return this.availability[day ?? '']?.times ?? [];
  }
}
