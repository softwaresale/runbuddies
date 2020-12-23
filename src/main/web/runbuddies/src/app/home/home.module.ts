import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserCardModule } from '../user-card/user-card.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserCardModule,

    MatGridListModule,
    LayoutModule,
    MatButtonModule,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class HomeModule { }
