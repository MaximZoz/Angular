# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Создание объектов методом POST

1. Оживляем форму: Добавляем переменную (todoTitle = ''), помещаем её в ngModel в html => title

2. При нажатии (Добавить) вызываем метод addTodo()

3. Создаём метод addTodo() в компоненте

4. Добавляем в метод addTodo() вализацию и если она проходит, то создаём новый Todo (newTodo), в переменную http в её метод post первым параметром указываем источник куда отправляем пост (https://jsonplaceholder.typicode.com/todos), вторым параметром указываем то, что отправляем (newTodo), затем подписываемся на этот метод, чтобы вызвать его (.subscribe((todo) => {}), добавляем todo в todos с помощью (this.todos.push(todo)) , Очищаем title с помощью (this.todoTitle = '')
