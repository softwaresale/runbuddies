import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSheetComponent } from './schedule-sheet.component';

describe('ScheduleSheetComponent', () => {
  let component: ScheduleSheetComponent;
  let fixture: ComponentFixture<ScheduleSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
