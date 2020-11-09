# Создание плагина сообщений

### создаём плагин(сервис) работы с alert (вывод сообщения в результате каких- либо действий )

src\app\admin\shared\services\alert.service.ts

#### регистрируем сервис AlertService

src\app\admin\admin.module.ts => providers =>

- AlertService

#### создаём стрим, который будет работать с алертами

src\app\admin\shared\services\alert.service.ts => AlertService =>

- public alert\$ = new Subject(Alert)();

#### создаём медод, вызывая который он будет диспачить для алерта новый объект и показываеть его

src\app\admin\shared\services\alert.service.ts => AlertService =>

- success(text: string) {this.alert\$.next({type: 'success', text})}

#### Создаём компонент alert

ng g c admin/shared/components/alert --skipTests

#### в alert component объявляем delay, text, type = 'success'

src\app\admin\shared\components\alert\alert.component.ts => AlertComponent =>

- delay, text, type

#### В AlertComponent объявляем alertService

src\app\admin\shared\components\alert\alert.component.ts => AlertComponent => constructor =>

- private alertService: AlertService

#### подписываемся на стрим alert\$ и закидываем данные alert.text в переменную text, реализовываем таймер

src\app\admin\shared\components\alert\alert.component.ts => AlertComponent => ngOnInit =>

- this.alertService.alert\$.subscribe((alert) => {this.text = alert.text; this.type = alert.type})

- const timeOut = setTimeout(() => {clearTimeout(timeOut); this.text = '';}, this.delay);

#### очищаем Subscription

src\app\admin\shared\components\alert\alert.component.ts => AlertComponent =>

- aSub: Subscription;
- ngOnDestroy

### Создаём шалбон и указываем место, где будет alert\$

src\app\admin\shared\components\admin-layout\admin-layout.component.html

### добавляем alert после выполнения нужного метода

src\app\admin\create-page\create-page.component.ts => CreatePageComponent =>

- postsService.create(post).subscribe(() => {this.form.reset(); this.alert.success('Пост был создан')});
