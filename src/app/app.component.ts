import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective) RefDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('новый тайтл');
    this.meta.addTags([
      { name: 'keywords', content: 'Angular, Google, AppComponent' },
      { name: 'discription', content: 'This is App Component' },
    ]);
  }
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
