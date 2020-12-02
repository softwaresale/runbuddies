import { Component, OnInit, ChangeDetectionStrategy, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'span[app-toolbar-title]',
  host: {
    "class": "title"
  }
})
export class ToolbarTitleDirective {

}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
