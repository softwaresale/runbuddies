import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AppStateEffects } from './app-state.effects';
import { StoreModule } from '@ngrx/store';
import { appStateFeatureKey, reducer } from './app-state.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appStateFeatureKey, reducer),
    EffectsModule.forFeature([AppStateEffects])
  ]
})
export class AppStateModule { }
