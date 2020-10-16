import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective) RefDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver) {}
  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.RefDir.containerRef.clear();
    const сomponent = this.RefDir.containerRef.createComponent(modalFactory);
    сomponent.instance.title = 'Dinamic titile';
    сomponent.instance.close.subscribe(() => {
      this.RefDir.containerRef.clear();
    });
  }
}
