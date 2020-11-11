# Отображаем пост

### пишем логику для загрузки поста по его id

src\app\post-page\post-page.component.ts => PostPageComponent =>

- post\$: Observable(Post)

src\app\post-page\post-page.component.ts => PostPageComponent => constructor =>

- private route: ActivatedRoute,
- private postsService: PostsService

  src\app\post-page\post-page.component.ts => PostPageComponent => ngOnInit =>

  - this.route.params.pipe(switchMap((params: Params) => {return this.postsService.getById(params('id')]}))

### изменяем шаблон

src\app\post-page\post-page.component.html
