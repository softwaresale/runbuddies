import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSmComponent } from './button-sm/button-sm.component';
import { ButtonMdComponent } from './button-md/button-md.component';



@NgModule({
  declarations: [ButtonSmComponent, ButtonMdComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonSmComponent, ButtonMdComponent]
})
export class ButtonModule { }
