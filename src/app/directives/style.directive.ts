import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input('fontWeight') fontWeight: string = 'normal';
  @Input('dStyles') dStyles: {
    border?: string;
    fontWeigth?: string;
    borderRadius?: string;
  };

  constructor(private el: ElementRef, private r: Renderer2) {}
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(
      this.el.nativeElement,
      'borderRadius',
      this.dStyles.borderRadius
    );
    this.r.setStyle(
      this.el.nativeElement,
      'fontWeigth',
      this.dStyles.fontWeigth
    );
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeigth', null);
  }
}
