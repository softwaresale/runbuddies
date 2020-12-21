import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
