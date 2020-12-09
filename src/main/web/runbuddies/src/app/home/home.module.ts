import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SurfaceModule } from '../surface/surface.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserCardModule } from '../user-card/user-card.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SurfaceModule,
    MatGridListModule,
    UserCardModule
  ]
})
export class HomeModule { }
