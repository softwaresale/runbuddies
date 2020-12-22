import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddiesRoutingModule } from './buddies-routing.module';
import { BuddiesComponent } from './buddies.component';
import { UserCardModule } from '../user-card/user-card.module';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [BuddiesComponent],
  imports: [
    CommonModule,
    BuddiesRoutingModule,

    UserCardModule,

    LayoutModule,
  ]
})
export class BuddiesModule { }
