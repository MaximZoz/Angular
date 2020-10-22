# интеграционные тестирования для posts компонента с различными зависимостями

- ## Создаём тестовый модуль, декларируем в него PostsComponent со всеми зависимостями сервисов, проводим тесты

1. posts.component.spec.ts => beforeEach => TestBed , fixture , component

- ## тестируем компонент на то, что вызывается ngOnInit и забирает данные с сервера

1. #### провайдим сервис, импортируем HttpClient

   posts.component.spec.ts => beforeEach => TestBed

2. #### получаем инстанс сервиса

   posts.component.spec.ts => beforeEach => service

   3. #### тестируем component.posts на соответствие (toEqual() )

      posts.component.spec.ts => it => spyOn, expect
