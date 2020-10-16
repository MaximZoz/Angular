# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## как создавать динамические компоненты модального окна в ts

1. app.component.html => (click)="showModal()

2. app.component.ts => showModal( this.resolver.resolveComponentFactory(ModalComponent) ) , constructor( private resolver: ComponentFactoryResolver )

3. создаём ref.directive.ts => class RefDi
   rective=> constructor(public containerRef: ViewContainerRef)

4. app.module.ts => RefDirective

5. app.component.html => <ng-template #appRef></ng-template>

6. app.component.ts => ViewChild =>RefDirective

7. component.ts => showModal => this.RefDir.containerRef.clear() - очищаем контейнер, если там что- то есть

8. this.RefDir.containerRef.createComponent(modalFactory) - создаём динамический компонент

9. app.component.ts => const сomponent = this.RefDir.containerRef.createComponent(modalFactory)

10. сomponent.instanse.title = 'Dinamic titile' - title у компонента

11. omponent.instance.close.subscribe(() => {this.RefDir.containerRef.clear()}) - закрываем компонент при close
