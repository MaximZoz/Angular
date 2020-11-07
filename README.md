# Создание интерсептора (обрабатываем ошибки, которые будут приходить с сервера в общем месте)

### Создаём файл auth.interseptor.ts

src\app\shared\auth.interseptor.ts

#### реализовываем AuthInterseptor

src\app\shared\auth.interseptor.ts =>

- export class AuthInterseptor implements HttpInterceptor

#### инжектируем в конструктор auth и router

src\app\shared\auth.interseptor.ts => AuthInterseptor => constructor =>

- auth
- router

#### в методе intercept спрашиваем, если авторизация есть, то добавляем токен для кажного запроса (пееропрделяем req чтобы добавить токен если пользователь зарегистрирован и токен рписутствует)

src\app\shared\auth.interseptor.ts => AuthInterseptor => intercept =>

- if (this.auth.isAuthenticated()) {req = req.clone({setParams:{auth: this.auth.token}})}return next.handle(req)}

#### обрабатываем ошибки (в методе pipe ловим ошибки в catchError и обрабатываем из в колл беке )

src\app\shared\auth.interseptor.ts => AuthInterseptor => intercept => pipe => catchError =>

- (error: HttpErrorResponse) => {console.log('[Interceptor Error]', error);
  if(error.status ===401){
  this.auth.logout()
  this.router.navigate(['/admin', 'login'], {queryParams: {authFailed: true}})}
  return throwError(error);
  })

#### обрабатываем queryParams в LoginPageComponent

src\app\admin\login-page\login-page.component.ts => ngOnInit =>

- else {if (params('authFailed')) {this.message = 'Сессия истекла, введите данные заного'}

#### регистрируем Interceptor в app.module

src\app\app.module.ts =>

- INTERCEPTOR_PROVIDER

NgModule => providers

- INTERCEPTOR_PROVIDER

#### регистрируем AuthService в app.module

src\app\admin\shared\services\auth.service.ts => Injectable =>

- providedIn: 'root'
