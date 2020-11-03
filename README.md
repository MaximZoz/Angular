# создаём сервисы

### создаём сервис для авторизации в системе

admin\shared\services\auth.service.ts

- #### рег. AuthService в admin.module.ts

  admin\admin.module.ts => providers => AuthService

- #### создаём post запрос на авторизацию
  admin\shared\services\auth.service.ts => AuthService => login => this.http.post(user)
- #### создаём post запрос на выход
  admin\shared\services\auth.service.ts => AuthService => logOut
- #### создаём метод, который говорит авторизован пользователь в системе или нет (!!this.token - false если пустая строка, true если что-то есть)

  admin\shared\services\auth.service.ts => AuthService => isAuthentificated => returt !!this.token

- #### создаём get token, который будет прилетать с сервера

  admin\shared\services\auth.service.ts => AuthService => get token

- #### создаём метод SetToken, который будет изменять токен
  admin\shared\services\auth.service.ts => AuthService => SetToken

### создаём shared.module

admin\shared\shared.module.ts

- #### рег. sharedModule

  src\app\app.module.ts => imports => SharedModule

- #### импорт. sharedModule в адммин
  admin\admin.module.ts => imports => SharedModule

### выполняем действия при аутентификации формы

admin\login-page\login-page.component.ts => submit(), constructor(auth, router)
admin\login-page\login-page.component.ts => this.auth.logIn(user).subscribe()
