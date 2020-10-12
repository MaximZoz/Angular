# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Добавляем query параметры к запросам(query параметры - те элементы, которые идут после ? в ссылке)

1. todos.service => fetchTodos => get вторым параметром создаём query параметр (params: new HttpParams().set('\_limit', '3'))
2. Если мы хотим создать несколько параметров, то надо закинуть их в пепременную let
