import { Component, OnInit, ChangeDetectionStrategy, Directive, ViewEncapsulation, HostBinding } from '@angular/core';

@Directive({
  selector: 'div[app-card-content]'
})
export class CardContent {
}

@Directive({
  selector: 'img[app-card-image]',
})
export class CardImage {}

@Directive({
  selector: '[app-card-title], h1[app-card-title], h2[app-card-title], h3[app-card-title]',
})
export class CardTitle {
  @HostBinding('class')
  get clazz(): string {
    return 'app-card-title';
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
