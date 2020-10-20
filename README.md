# Тестирование работы сервиса

- ## Тоздаём сервис posts и декларируем его

1. posts => posts.component.ts , posts.service.ts

2. app.module.ts => declarations => PostsComponent

- ## Тестируем сервис posts

1. #### готовим unit тест

   posts.component.spec.ts => describe=> beforeEach , it , let component , let service

2. #### инициализируем component в spec

beforeEach => service = new PostsService(null) , component = new PostsComponent(service);

3. #### в it мОкаем(следим) метод fetch у service с помощью spyOn и возвращаем EMPTY(RxJs)

posts.component.spec.ts => describe => it => const spy

4. #### тестируем метод spy на то, что он вызывается (toHaveBeenCalled - проверка на вызов)

   posts.component.spec.ts => describe => it =>

component.ngOnInit();
expect(spy).toHaveBeenCalled();

5. #### проверяем метод post на то, что ей присвоились какие- то данные (of-метод из (RxJs) который возвращает Observable )

   posts.component.spec.ts => describe => it =>

   const post = [1, 2, 3, 4];
   spyOn(service, 'fetch').and.returnValue(of(post));
   component.ngOnInit();
   expect(component.posts.length).toBe(post.length);
