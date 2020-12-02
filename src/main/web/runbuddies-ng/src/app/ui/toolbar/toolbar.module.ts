import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent, ToolbarTitleDirective } from './toolbar.component';



@NgModule({
  declarations: [ToolbarComponent, ToolbarTitleDirective],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent, ToolbarTitleDirective]
})
export class ToolbarModule { }
