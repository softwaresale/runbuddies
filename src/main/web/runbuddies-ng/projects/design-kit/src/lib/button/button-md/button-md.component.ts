import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'rb-button-md, button[rb-button-md]',
  templateUrl: './button-md.component.html',
  styleUrls: ['./button-md.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonMdComponent implements OnInit {

  @HostBinding('class')
  get styleClass(): string {
    return 'button-md';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
