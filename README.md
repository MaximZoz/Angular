# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## переносим страницу about в отдельный модуль

1. создаём файл about-page.module

2. в about-page.module декларируем AboutPageComponent и AboutExtraPageComponent

3. импортируем AboutPageModule в app.module

4. создаём файл shared.module

5. в SharedModul декларируем ColorDirective и PageNamePipe

6. импортируем SharedModule в app.module

7. импортируем SharedModul в about-page.module

8. в shared.module экспортируем приватные модули ColorDirective и PageNamePipe

9. импортируем CommonModule в about-page.module, чтобы имитьровать импорт BrowserModule

10. выносим роуты в about-page.module
