# Создание поста

### Создаём сервис для постов posts.service

- #### провайдим его (так как мы будем его регистрировать в главном модуле)

src\app\shared\posts.service.ts =>

- Injectable({
  providedIn: "root"
  })

- PostsService

- #### в конструктор инжектируем httpClient

  src\app\shared\posts.service.ts => PostsService =>

- #### создаём метод create по типу observable <Post>

  src\app\shared\posts.service.ts => PostsService => create

- #### создаём в методе create метод Post в который передаём url
  src\app\shared\posts.service.ts => PostsService => create => return this.http.post<Post>(FbDbUrl , post)

### создаём в interface новую переменную url (FbDbUrl), определяем её в environment

- src\environments\environment.ts => FbDbUrl
- src\environments\interface.ts => FbDbUrl

### настраиваем правила для firebase (неавторизованные пользователи могут читать данные из базы, но создавать только авторизованные)

rules =>

- ".read": false,
- ".write": "auth != null"

### пишем логику, что при создании поста отправляем его на firebase и очишщаем форму

src\app\admin\create-page\create-page.component.ts => submit

- this.postsService.create(post).subscribe()

### обрабатываем логику id поста, который приходит с сервера

src\app\shared\posts.service.ts => PostsService => create => pipe => map =>

- return {
  ...post,
  id: response.name,
  date: new Date(post.date),
  };
