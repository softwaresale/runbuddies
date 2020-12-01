import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSmComponent } from './button-sm/button-sm.component';



@NgModule({
  declarations: [ButtonSmComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonSmComponent]
})
export class ButtonModule { }
