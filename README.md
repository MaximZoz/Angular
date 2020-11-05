# Обработка ошибок

### Ловым ошибки

- #### создаём приватный метод для обработки ошибок

  src\app\admin\shared\services\auth.service.ts => AuthService =>
  private handleError

- #### передаём этот метод в pipe по обработкам ошибок catchError и байндим его

  src\app\admin\shared\services\auth.service.ts => AuthService => login => pipe
  catchError(this.handleError.bind(this))

- #### в приватный метод передаём error типа HttpErrorResponse и получаем message и возвращаём ошибку

  src\app\admin\shared\services\auth.service.ts => AuthService => private handleError =>
  const { message } = error.error.error  
  return throwError(error);

- #### обрабатываем ошибки с помощью switch case
  src\app\admin\shared\services\auth.service.ts => AuthService => private handleError =>
  switch (message) {
  case 'EMAIL_NOT_FOUND':
  break;

### Выводим и обрабатываем ошибки

- #### создаём публичную переменную error типа Subject в виде стрима

  src\app\admin\shared\services\auth.service.ts => AuthService =>
  public error\$: Subject (string) = new Subject(string) ()

- #### эмитим события в switch case (диспачим сообщение)

  src\app\admin\shared\services\auth.service.ts => AuthService => private handleError =>
  this.error\$.next("неверный email");

- #### меняем значение переменной auth на public

  src\app\admin\login-page\login-page.component.ts => LoginPageComponent => constructor =>
  public auth: AuthService

- #### В шаблоне создаём div для ошибок, с помощью \*ngIf и | async as выводим диспаченную ошибку

  src\app\admin\login-page\login-page.component.html =>

  div
  class="alert alert-danger"
  \*ngIf="auth.error\$ | async as error"
  error
  div

### отменяем блокированную кнопку при сабмите

src\app\admin\login-page\login-page.component.ts => LoginPageComponent => submit =>
() =>{this.submitted = false}

### скрываем меню админа если мы ещё не авторизовались

- #### делаем переменную auth публичной (чтобы во время продакшн сборки не сыпались ошибки)

  src\app\admin\shared\components\admin-layout\admin-layout.component.ts => constructor =>
  public auth: AuthService

- #### в шаблоне с помощью \*ngIf отображаем блок если есть авторизация

src\app\admin\shared\components\admin-layout\admin-layout.component.html =>
(ul\*ngIf="auth.isAuthenticated()")
