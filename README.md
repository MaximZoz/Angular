# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Создаём асинхронный валидатор

нужны для того, чтобы мы заходили на сервер и спрашивали занят ли такой email или нет

1. В класс myValidators пишем функцию ассинзронного валидатора
2. Передаём ассинхронный валидатор в component.ts=>newFormControl => третьим параметром
3. Обрабатываем ассинхронный валидатор в разметку
