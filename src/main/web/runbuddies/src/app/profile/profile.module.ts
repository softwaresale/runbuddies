import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import * as fromProfile from './state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './state/profile.effects';
import { HoverableModule } from '../hoverable/hoverable.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    LayoutModule,
    StoreModule.forFeature(fromProfile.profileFeatureKey, fromProfile.reducer),
    EffectsModule.forFeature([ProfileEffects]),
    HoverableModule
  ]
})
export class ProfileModule { }
