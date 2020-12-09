import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { UserAvailabilityComponent } from './user-availability/user-availability.component';

@NgModule({
  declarations: [UserCardComponent, UserAvailabilityComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
