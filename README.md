# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Защита дочерних Роутов

1. Указываем в гвардах, что мы защищаем дочерние элементы страниц: имплиментируемся от CanActivateChild => реализовываем метод CanActivateChild в который передаём его параметры

2. в app-routing.module передаём canActivateChild:[AuthGuard] к нужному элементу
