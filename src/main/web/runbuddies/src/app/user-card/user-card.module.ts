import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { UserCardGridComponent } from './user-card-grid/user-card-grid.component';

@NgModule({
  declarations: [UserCardComponent, UserCardGridComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
  ],
  exports: [UserCardComponent, UserCardGridComponent]
})
export class UserCardModule { }
