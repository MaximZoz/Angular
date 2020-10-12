# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Добавляем параметр observe к запросам(получаем детальный доступ до любого этапа запроса)

1. todos.service => fetchTodos => get вторым параметром создаём параметр observe

2. в todos.service => fetchTodos => get.pipe(map()) создаём метод map() чтобы модифицировать данные

3. в todos.service => removeTodo =>pipe создаём метод tap в котором создаём функцию ( if (event.type === HttpEventType.Sent) и (if (event.type === HttpEventType.Response)) которая позволяет нам следить за событиями до отправки на сервер и после
