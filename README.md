# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Оживляем кнопку (завершить) которая завершает определённый todo

1. в шаблоне создаём метод (completeTodo(todo.id))

2. в todos.service реализуем метод completeTodo(todo.id) в нем this.http.put("ссылка" "compleate: true") "compleate: true" - поля, которые мы хотим модифицировать

3. в appComponent обращаемся к todosService=>completeTodo и подписываемся на стрим (this.todosService.completeTodo(id).subscribe((todo: any) => {})

4. в appComponent=> completeTodo() => subscribe() в todos с помощью метода find находим todo.id и присваеваем ему значение completed=true (this.todos.find(t=> t.id===todo.id).completed=true)
