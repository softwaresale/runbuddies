import { Component, OnInit, ChangeDetectionStrategy, Directive } from '@angular/core';

@Directive({
  selector: 'div[rb-card-content]',
  host: {
    'class': 'rb-card-content'
  }
})
export class CardContent {}

@Directive({
  selector: 'img[rb-card-image]'
})
export class CardImage {}

@Directive({
  selector: 'rb-card-title, h1[rb-card-title], h2[rb-card-title], h3[rb-card-title]',
  host: {
    'class': 'rb-card-title'
  },
})
export class CardTitle{}

@Component({
  selector: 'rb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
