# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## манипуляция различными мета тегами (например для SEO оптимтзации)

- устанавливаем новый title в head

1. app.componen => AppComponent => constructor(private title: Title)

2. app.componen => AppComponent => constructor() ({title.setTitle('новый тайтл')}) устанавливаем новый тайтл

- работаем с мета тегами в head

1. app.componen => AppComponent => constructor(private meta: Meta)

2. app.componen => AppComponent => constructor() (meta.addTags([
   { name: 'keywords', content: 'Angular, Google, AppComponent' },
   { name: 'discription', content: 'This is App Component' },
   ])) устанавливаем новые мета теги
