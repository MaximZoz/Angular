# Удаление поста

### реализовываем метод remove, который работает с бекендом

src\app\shared\posts.service.ts =>PostsService =>

- remove(id: string): Observable(void) {return this.http.delete(void)('${environment.fbDbUrl}/posts/${id}.json')}

### реализовываем метод remove, который работает с фронтендом

src\app\admin\dashboard-page\dashboard-page.component.ts =>

- remove(id: string)

#### в методе remove обращаемся к postsService, вызываем метод remove и подписываемся на стрим subscribe и в колбек функции удаляем post по id

src\app\admin\dashboard-page\dashboard-page.component.ts => remove(id: string) =>

- this.postsService.remove(id).subscribe(()=>{this.posts.filter((post) => post.id !== id)})

#### создаём переменную по типу Subscription и присваиваем ей значение метода remove

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent =>

- dSub: Subscription;

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent => remove

- this.dSub = this.postsService.remove(id).subscribe(()=>{this.posts.filter((post) => post.id !== id)})

#### реализовываем переменную dSub в методе ngOnDestroy

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent => ngOnDestroy =>

- if (this.dSub) {this.dSub.unsubscribe()}
