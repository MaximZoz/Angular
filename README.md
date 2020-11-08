# Страница редоктирования поста

### Создаём метод, который получает id поста из DataBase

src\app\shared\posts.service.ts => PostsService

- getById(id: string) {this.http.get('${environment.fbDbUrl}/posts/${id}.json')}

#### распарсим json ответ с bataBase c помощью Observable<Post>

src\app\shared\posts.service.ts => PostsService => getById =>

- .pipe(map((post: Post) => {return {...post, id, date: new Date(post.date)}}));

#### получаем id поста с которым работаем и перпедаём в новый стрим c формой по типу FormGroup

src\app\admin\edit-page\edit-page.component.ts => EditPageComponent => ngOnInit => this.route.params =>

- .pipe(switchMap((params: Params) => {return this.postsService.getById(params('id'))}))

- .subscribe((post: Post) => {this.form = new FormGroup({title: new FormControl(post.title, Validators.required), text: new FormControl(post.text, Validators.required)})})

### Инициализируем форму в шаблоне

src\app\admin\edit-page\edit-page.component.html
