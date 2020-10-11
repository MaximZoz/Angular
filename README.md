# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## удалить пост

1. Оживляем кнопку "удалить": вызываем метод removeTodo(todo.id) по клику в html

2. создаём метод removeTodo(id), который удаляет элемент по id с сервера
   (this.http.delete(https://jsonplaceholder.typicode.com/todos/${id})

3. Избавляемся от поста во фронтенде: (this.todos = this.todos.filter((t) =>t.id !==id)) фильтруем todos по id

4. добавляем запить в html о том, что ничего нет
