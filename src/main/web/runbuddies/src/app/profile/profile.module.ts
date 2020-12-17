import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SurfaceModule } from '../surface/surface.module';
import { MatDividerModule } from '@angular/material/divider';
import { UserCardModule } from '../user-card/user-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleSheetComponent } from './schedule-sheet/schedule-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent, ScheduleSheetComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SurfaceModule,
    MatDividerModule,
    UserCardModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
  ]
})
export class ProfileModule { }
