# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Интерсептор (классы, которые позволяют перехватывать http запросы и что-то с ними делать)

1. создаём файл interceptor.ts, в нём export class AuthInterceptor implements HttpInterceptor

2. Регистрируем его в appModule

3. INTERCTPTOR_PROVIDER передаём в массив providers, чтобы его зарегистрировать
