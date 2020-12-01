import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'rb-button-sm, button[rb-button-sm]',
  templateUrl: './button-sm.component.html',
  styleUrls: ['./button-sm.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonSmComponent implements OnInit {

  @HostBinding('class')
  get clazz(): string {
    return 'button-sm';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
