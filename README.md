# Хранение токена

### добавляем returnSecureToken в интерфейс

src\app\shared\interfaces.ts => User => returnSecureToken

### добавляем токен в login (expiresIn: "3600" - "жизненный цикл токена" появляется в Пост запросе)

src\app\admin\shared\services\auth.service.ts => login => user.returnSecureToken = true;
src\app\admin\shared\services\auth.service.ts => FbAuthResponse => expiresIn

### Сохраняем токен в localStorage

src\app\admin\shared\services\auth.service.ts => setToken=> localStorage.setItem('fb-token-exp') , ('fb-token')

### получаем токен из localStorage и пишем проверку на дату

- #### создаём переменную expDate(время жизни токена)

src\app\admin\shared\services\auth.service.ts => get token => expDate = new Date(localStorage.getItem('fb-token-exp'))

- #### создаём проверку (если текущая дата > времени жизни токена, то нам надо его очистить)

src\app\admin\shared\services\auth.service.ts => get token =>
if (new Date() > expDate) {
this.logout();
return null;
}

- #### получаем токен из localStorage

src\app\admin\shared\services\auth.service.ts => get token => return localStorage.getItem('fb-token')

- #### дописываем метод logOut

  src\app\admin\shared\services\auth.service.ts => logout =>
  this.setToken(null);

- #### пишем логику для setToken ( если response, то выполняем логику, если null, то чистьм local storage )
  src\app\admin\shared\services\auth.service.ts =>
  setToken

### при выходе из админки вызываем метод logout

src\app\admin\shared\components\admin-layout\admin-layout.component.ts => AdminLayoutComponent => constructor =>
private auth: AuthService

src\app\admin\shared\components\admin-layout\admin-layout.component.ts => AdminLayoutComponent => logout =>
this.auth.logout();

### проверяем очищается ли токен по истечении заданного промежутка времени

- #### создаём кнопку, которая вызывает метод test()

src\app\admin\dashboard-page\dashboard-page.component.html =>
button (click)=test()

- #### создаём метод test() , который показывает в консоли наличие токена

src\app\admin\dashboard-page\dashboard-page.component.ts =>
test() {
console.log(this.auth.token);
}

### создаём флаг, который блокирует кнопку войти если мы вошли

- #### создаём переменную submitted = false;

  src\app\admin\login-page\login-page.component.ts => LoginPageComponent
  submitted = false;

- #### меняем флаг переменной submitted true на false когда мы сабмитим кнопку

  src\app\admin\login-page\login-page.component.ts => LoginPageComponent => submit() =>
  this.submitted = true (перед логикой)
  this.submitted = false (после логики)

- #### блокируем кнопку если submitted = false
  src\app\admin\login-page\login-page.component.html => button type="submit" =>
  disabled = "form.invalid || submitted"
