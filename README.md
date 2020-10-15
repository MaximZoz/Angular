# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## обработка ошибок адресной строки + Редирект

1. Генерируем новый компонент (ng g c error-page --skipTests) ы которой создаём страницу ошибки и возвращаем на главную страницу

2. в app-routing.module регистрируем страницу по адресу (/error)

3. редиректим несуществующую страницу на страницу error помощью redirectTo \*\* (redirectTo должен объявляться последним объектом в массиве)
