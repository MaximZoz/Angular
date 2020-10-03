import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      this.viewConteiner.createEmbeddedView(this.tamplateRef);
      //  показать элементы
    } else {
      this.viewConteiner.clear();
      //  скрыть элементы
    }
  }
  constructor(
    private tamplateRef: TemplateRef<any>,
    private viewConteiner: ViewContainerRef
  ) {}
}
