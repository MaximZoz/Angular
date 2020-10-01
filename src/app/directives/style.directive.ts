import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
