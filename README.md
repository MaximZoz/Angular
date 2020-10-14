# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## определяем по id какой стоит пост и отображаем его данные

1. считываем с адресной строки какое находится значение

2. в postComponent => ngOnInit добавляем this.route.params.subscribe((params: Params) => {} чтобы получить доступ к id по клике на пост

3. в PostComponent создаём переменную post, в ngOnInit присваиваем ей значение id поста, преобразовываем данные в string ( this.post = this.postService.getById(+params.id) )

4. Оживляем кнопку (load 4 post) post.component => button => (click)="loadPost()" , создаём переменную private router: Router которую реализуем в loadPost(){this.router.navigate(['/posts', '44'])} чтобы загружалось id 44
