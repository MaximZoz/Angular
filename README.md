# Вывод постов

### в HomePageComponent получаем данные из postsService и закидываем их в Observable

src\app\home-page\home-page.component.ts => HomePageComponent => constructor =>

- private postsService: PostsService

src\app\home-page\home-page.component.ts => HomePageComponent =>

- posts\$: Observable( Post[] )

src\app\home-page\home-page.component.ts => HomePageComponent => ngOnInit =>

- this.posts\$ = this.postsService.getAll()

### разрешем обмениваться данными между родительским контекстом и дочерними компонентами

src\app\shared\components\post\post.component.ts => PostComponent =>

- @Input() post: Post;

### выводим данные поста в шаблон

src\app\shared\components\post\post.component.html =>

- (h2){{ post.title }}(/h2)

### выводим посты в шаблоне

- (div class="posts" *ngIf="posts\$ | async as posts; else loading")
  *ngFor="let post of posts" (post)="post")
