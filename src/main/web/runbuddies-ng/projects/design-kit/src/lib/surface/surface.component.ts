import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rb-surface, div[rb-surface]',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurfaceComponent implements OnInit {

  @Input()
  title?: string;

  @Input()
  showAction: boolean | undefined = false;

  @Input()
  actionText?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
