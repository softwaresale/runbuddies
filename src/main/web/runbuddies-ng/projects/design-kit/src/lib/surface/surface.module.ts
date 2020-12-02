import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurfaceComponent } from './surface.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [SurfaceComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [SurfaceComponent]
})
export class SurfaceModule { }
