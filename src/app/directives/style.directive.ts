import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
