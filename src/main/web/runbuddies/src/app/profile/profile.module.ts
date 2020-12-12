import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SurfaceModule } from '../surface/surface.module';
import { MatDividerModule } from '@angular/material/divider';
import { UserCardModule } from '../user-card/user-card.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SurfaceModule,
    MatDividerModule,
    UserCardModule,
    MatButtonModule,
  ]
})
export class ProfileModule { }
