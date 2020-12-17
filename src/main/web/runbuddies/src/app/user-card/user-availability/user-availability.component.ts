import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatChipListChange } from '@angular/material/chips';

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

  @Output()
  timeClick = new EventEmitter<Date>();

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

  timeClicked(timeStr: string): void {
    const timeSplit = /([0-9]{1,2}):([0-9]{2})(AM|PM)/;
    const results = timeSplit.exec(timeStr);
    if (results && this.currentDay) {
      // Set hour info for date
      const hours = results[3] === 'AM' ? Number.parseInt(results[1], 10) : Number.parseInt(results[1], 10) + 12;
      const minutes = Number.parseInt(results[2], 10);
      let date = new Date();
      date = new Date(date.setHours(hours, minutes, 0));

      // Set date info
      const dayOfWeek = this.daysOfWeek.indexOf(this.currentDay);
      date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);

      // Emit the date
      this.timeClick.emit(date);
    }
  }
}
