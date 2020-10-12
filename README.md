# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## обрабатываем ошибки когда используем http client

1. в метод fetchTodos делаем так, чтобы сервер отвечал с ошибкой (постоянная загрузка + ошибка 404 в консоли)

2. в appComponent в методе fetchTodos => subscribe вторым параметром веводим ошибки в консоль (error.message)

3. выводим ошибку error.message в шаблон в appComponent заводим переменную (error = '') , в scss добавляем стиль для error

4. Используем встроенный инструмент для обработки ошибок catchError:
   обрабатываем в методе (fetchTodos => pipe)
