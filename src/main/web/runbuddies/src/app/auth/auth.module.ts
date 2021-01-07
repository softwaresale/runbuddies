import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { SignupFlowComponent } from './signup-flow/signup-flow.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [LoginButtonsComponent, SignupFlowComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
      EffectsModule.forFeature([AuthEffects]),

      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatSliderModule,
      MatSnackBarModule,
    ],
  exports: [LoginButtonsComponent, SignupFlowComponent]
})
export class AuthModule { }
