# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## 11. Защита страниц (Роутев)

1. не ускаем пользователя на страницу постов если он не залогинин: создаём файл auth.guard в который имплементируем метод CanActivate (export class AuthGuard implements CanActivate)

2. создаём файл auth.service, реализовываем в нём метод авторизации имитируя задержку сервера

3. в appComponent инжектируем сервис AuthService в шаблоне реализовываем метод этих кнопок

4. в auth.guard добавляем @Injectable({providedIn:'root'}) чтобы инжектировать другие сущности. в методе canActivate перед тем как выполнить (authService.isAunticated()) мы используем (then((isAuth) => {if (isAuth) {return true}) чтобы сымульровать аунтефикацию. Если false, то создаём (private rouner: Router) и вызваем у неё метод navigate на главную страницу

5. применяем auth.guard для нужных роутов: в app-routing.module с помощью canActivate
