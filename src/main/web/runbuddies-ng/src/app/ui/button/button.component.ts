import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button, button[app-button], a[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  size: 'sm' | 'md' | 'lg' = 'sm';

  @HostBinding('class')
  get clazz(): string {
    return `button-${this.size}`;
  }

  constructor() { }

}
