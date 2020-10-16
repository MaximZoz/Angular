# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

##

Lazy loading или ленивая загрузка модулей:

- делаем так, чтобы (about-page.module) прогружался когда на него кликаешь, а не тогда, когда входишь на сайт

1. в app-routing.module =>loadChildren передаём AboutPageModule
2. в app.module удаляем импорты AboutPageModule
