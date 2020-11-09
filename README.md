# Редактирование поста

### Реализуем метод update, который позволяет обновлять пост

src\app\shared\posts.service.ts => PostsService

- update

#### в методе update(post) по типу Observable делаем REST запрос к http .patch

src\app\shared\posts.service.ts => PostsService

- update(post: Post): Observable(Post){ return this.http.patch(Post)('${environment.fbDbUrl}/posts/${post.id}.json',post}

#### в метод submit передаём метод update в который передаём данные массива из form и сабмитим форму по флагу true

src\app\admin\edit-page\edit-page.component.ts => EditPageComponent => submit =>

- this.submitted = true;
- this.postsService.update({...this.post,text: this.form.value.text,title: this.form.value.title}).subscribe(() => { this.submitted = false });

#### блокируем кнопку submit в шаблоне если она не валидная или засабмиченная

src\app\admin\edit-page\edit-page.component.html => button =>

- (disabled)="form.invalid" || submited

#### реализовываем OnDestroy с методом unsubscribe => создаём переменную uSub: Subscription, закидываем в неё this.postsService.update

src\app\admin\edit-page\edit-page.component.ts => EditPageComponent => ngOnDestroy

- if (this.uSub) {this.uSub.unsubscribe()}
