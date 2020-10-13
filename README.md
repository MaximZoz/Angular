# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## делаем динамические роуты (по клику переходим в posts)

1. в app-routing.module регистрируем наш пост ({ path: 'posts/:id', component: PostsComponent })

2. в postsComponent добавляем [routerLink] присваиваем ему значение (["/posts", post.id]) (post.id- динамическое значение, которое сконтактинируется после /posts/ )
