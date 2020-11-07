# Выводим список постов

### прописываем структуру шаблона

src\app\admin\dashboard-page\dashboard-page.component.html

### создаём метод getAll, который будет получать все посты, которые есть в базе

src\app\shared\posts.service.ts => PostsService =>

- getAll
  return this.http.get(\${environment.FbDbUrl}/posts.json)

### распарсим данные, которые приходят с сервера

src\app\shared\posts.service.ts => PostsService => getAll => pipe => map =>

- return Object.keys(response).map((key) => ({...response(key)id: key,date: new Date(response(key).date)}))

### получаем посты с сервера и закидываем их в переменную

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent => constructor =>

- private postsService

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent =>

- posts: Post[]

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent => ngOnInit =>

- this.postsService.getAll().subscribe((posts) => {this.posts = posts})

### создаём метод pSub: Subscription чтобы не было утечек памяти

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent =>

- pSub: Subscription;

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent =>

- ngOnDestroy =>
  if (this.pSub) {this.pSub.unsubscribe()}

### создаём loading

src\app\admin\dashboard-page\dashboard-page.component.html =>

- (div \*ngIf="posts.length; else loading")

### создаём кнопку для поиска постов

src\app\admin\dashboard-page\dashboard-page.component.html

- (input type="text" placeholder="Найти пост...")
