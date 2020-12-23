import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverable]'
})
export class HoverableDirective implements OnInit {

  private raised = false;

  @HostBinding('class')
  get classStr(): string {
    if (this.raised) {
      return 'mat-elevation-z5';
    } else {
      return '';
    }
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.raised = true;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.raised = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
