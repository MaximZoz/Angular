# работа с роутингом

1. #### Создаём class RouterStub

routing.component.spec.ts => RouterStub

2. #### меняем назначение классов

   routing.component.spec.ts => beforeEach => provide

3. #### тестируем то, что router вызывается с параметром (['/posts'])
   routing.component.spec.ts => it => router, spy, component.goBack,
