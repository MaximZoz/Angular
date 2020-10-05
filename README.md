# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Меняем локализацию создаём свой пайп

1. в src\app\app.module.ts добавляем { provide: LOCALE_ID, useValue: 'ru' } чтобы была рускоязычнаая локализация

2. создаём пайп без зависимости от регистра для фильтрации по (title) или (text) списка массивов из поле (title) и (text)
