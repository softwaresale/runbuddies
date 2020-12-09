import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurfaceComponent, SurfaceHeaderDirective } from './surface.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SurfaceComponent, SurfaceHeaderDirective],
    imports: [
      CommonModule,
      MatDividerModule,
      MatButtonModule
    ],
  exports: [SurfaceComponent, SurfaceHeaderDirective],
})
export class SurfaceModule { }
