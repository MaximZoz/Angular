# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Создание формы

1. Указываем Энгулару, что мы будем использовать реактивные формы, то есть вся инициализация форм происходит не в шаблоне, а мы делаем их програмно: в (ReactiveFormsModule) добавляем в app.module=>NgModule => imports
2. В AppComponent создаём (form: FormGroup)
3. Bнициализируем form c помощщью OnInit ( this.form = new FormGroup({}))
4. Связываем эту форму с той, которая присутствует в шаблоне ([formGroup]="form" - байндим директиву)
5. Далее для кнопок в форме определяем тип (button и submit)
6. Сабмитим форму с помощью метода (ngSubmit)="submit()
