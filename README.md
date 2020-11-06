# Добавляем гвард для остальных страниц админки

### создаём guard сервис

src\app\admin\shared\services\auth.guard.ts =>
@Injectable
AuthGuard

- #### регистрируем его в admin.module

  src\app\admin\admin.module.ts => providers =>
  AuthGuard

- #### имплементируем сервис AuthGuard от CanActivate

  src\app\admin\shared\services\auth.guard.ts => AuthGuard =>
  implements CanActivate

- #### реализовываем метод CanActivate

  src\app\admin\shared\services\auth.guard.ts => AuthGuard =>
  canActivate

- #### реализовываем конструктор в который инжектируем auth (чтобы узнать присутствует ли авторизация) и router

  src\app\admin\shared\services\auth.guard.ts => AuthGuard => constructor =>
  auth  
  router

- #### в методе canActivate спрашиваем, если авторизован, то идём дальше, если нет, то выполняем logout и напрввляем в login и создаём queryParams с ключом true

  src\app\admin\shared\services\auth.guard.ts => AuthGuard =>canActivate =>
  if (this.auth.isAuthenticated()) {
  return true;
  } else {
  this.auth.logout();
  this.router.navigate(['/admin', 'login'], {
  queryParams: {
  loginAgain: true,
  },
  });
  }

- #### добавляем в admin.module гуарды на админские компоненты

  src\app\admin\admin.module.ts => imports => RouterModule.forChild => children =>
  canActivate: (AuthGuard)

### обрабатываем query параметр loginAgain

- #### инжектируем в конструктор приватный метод route

  src\app\admin\login-page\login-page.component.ts => LoginPageComponent => constructor =>
  private route: ActivatedRoute

- #### получаем query параметр в ngOnInit как обзёрбл и обрабатываем его в переменную message

  this.route.queryParams.subscribe((params: Params) => {
  if (params('loginAgain')) {
  this.massage = 'Пожалуйста, введите данные';
  }
  });

- #### отображаем message в шаблон
  src\app\admin\login-page\login-page.component.html =>
  div class="alert alert-info" \*ngIf="message"
  {{ message }}
  div
