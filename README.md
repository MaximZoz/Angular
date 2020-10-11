# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## загрузка

1. Оживляем кнопку "загрузка": в html добавляем метод fetchTodos() в кнопку загрузки

2. В метод fetchTodos копируем логику из ngOnInit

3. Добавляем индикатор загрузки: создаём переменную (loading = false), В метод fetchTodos устанавливаем переменную (loading = true), после реализации метода fetchTodos кстанавливаем (this.loading = false)

4. отображаем loading в html: с помощью ngIf создаём условие для !loading или отображаем loadingBlock с помощью template

5. добавляем в стрим RxJs с помощью метода pipe искусственную задержку, чтобы съимульровать работу loader ( .pipe(delay(1500)))
