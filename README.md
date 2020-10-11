# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## httpClient (Получение данных и вывод в шаблон)

1. В app.module регистрируем HttpClientModule модуль для работы пакета httpClient

2. Инжектируем этот пакет в компонент в конструктор

3. В ngOnInit используем (get) обращение к jsonplaceholder

4. подписываемся на стрим (.subscrime), так-как весь httpClient на RxJS

5. полученные данные закидываем в переменную массив todu

6. связываем полученные данные с формой
