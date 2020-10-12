# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Регистрируем роуты

1. создаём файл app-routing.module, импортируем в него NgModule

2. создайм в app-routing.module класс AppRoutingModule и экспортируем его

3. в NgModule импортируем и экспортируем RouterModule

4. Регистрируем AppRoutingModule в appModule

5. создаём const routes рег её в RouterModule с помощью forRoot(routes)

6. регистрируем home component по пути (http://localhost:4200/) в параметре path

7. регистрируем остальные компоненты

8. создаём роутинг зависимость в appComponent (router-outlet)
