# Пайп для фильтрации списка

### создаём ngModel

src\app\admin\dashboard-page\dashboard-page.component.html => input =>

- searchStr

src\app\admin\dashboard-page\dashboard-page.component.ts => DashboardPageComponent =>

- searchStr: string = ''

### создаём pipe search

src\app\admin\shared\search.pipe.ts

- SearchPipe implements PipeTransform

#### реализовываем метод transform (если в строке search ничего нет, то возвращаем массив постов)

src\app\admin\shared\search.pipe.ts => SearchPipe => transform =>

- if (!search.trim()) {return posts}

#### (а иначе фильтруем массив posts и приведим его к нижнему регистру)

src\app\admin\shared\search.pipe.ts => SearchPipe => transform =>

- return posts.filter((post) => {return post.title.toLowerCase().includes(search.toLowerCase())})

### регистрируем pipe в admin.module

src\app\admin\admin.module.ts => declarations =>

- SearchPipe

### в шаблоне применяем к массиву posts pipe SearchPipe

src\app\admin\dashboard-page\dashboard-page.component.html => tr =>

- \*ngFor="let post of posts | searchPospts: searchStr
