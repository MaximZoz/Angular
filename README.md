# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Resolvers ( перед тем как загрузить страницу заранее подгружает нужный нам элемент)

1. создаём resolver для страницы поста: создаём файл post.resolver, реализовываем в нём resolver и подключаем его к постам в app-routing.module . В нём придумываем объект, где будут храниться данные (post: PostReselver)

2. в post.component => ngOnInit (this.route.data.subscribe((data)=> {this.post = data.post}))

3. в post.resolver добавляем искусственную задержку .pipe(delay(1500))
