# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## как создавать динамические компоненты в шаблоне

1. создаём новый компонент modal и задаём ему разметку

2. в app.component.html =>( <app-modal*ngIf="modal" title="Modal window"(close)="modal = false"></app-modal*ngIf=>)

3. в app.component.ts => (modal = false)
