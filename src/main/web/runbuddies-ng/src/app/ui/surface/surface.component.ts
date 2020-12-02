import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-surface, div[app-surface]',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurfaceComponent implements OnInit {

  @Input()
  title?: string;

  @Input()
  showAction?: boolean = false;

  @Input()
  actionText?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
