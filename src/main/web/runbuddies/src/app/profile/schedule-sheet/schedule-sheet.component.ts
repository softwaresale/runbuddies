import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-schedule-sheet',
  templateUrl: './schedule-sheet.component.html',
  styleUrls: ['./schedule-sheet.component.sass']
})
export class ScheduleSheetComponent implements OnInit {

  currentDate?: Date;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public availability: any,
    private bottomSheetRef: MatBottomSheetRef,
  ) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.bottomSheetRef.dismiss(this.currentDate);
  }

  cancel(): void {
    this.bottomSheetRef.dismiss();
  }

  setDate(event: Date): void {
    console.log(event);
    this.currentDate = event;
  }
}
