import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverableDirective } from './hoverable.directive';

@NgModule({
  declarations: [HoverableDirective],
  imports: [
    CommonModule
  ],
  exports: [HoverableDirective]
})
export class HoverableModule { }
