import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: 'appSurfaceHeader, div[appSurfaceHeader], span[appSurfaceHeader], h1[appSurfaceHeader], h2[appSurfaceHeader]',
})
export class SurfaceHeaderDirective {}

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.sass']
})
export class SurfaceComponent implements OnInit {

  @Input()
  mobile = false;
  @Input()
  actionText?: string;
  @Input()
  hideHeader = false;
  @Output()
  actionClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
