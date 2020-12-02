import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContent, CardImage, CardTitle } from './card.component';



@NgModule({
  declarations: [CardComponent, CardContent, CardImage, CardTitle],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardContent, CardImage, CardTitle]
})
export class CardModule { }
