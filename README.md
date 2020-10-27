# Создание приложения

### Создаём layout (генерируем компоненты, которые будут относиться к layout)

- #### удаляем всё ненужное (spec, базовый шаблон)

- #### генерируем компонент, который будет относиться к layout (показ блога)

ng g c shared/components/main-layout --skipTests

- #### применяем main-layout.component к роутам

  app-routing.module.ts => const routes => component => MainLayoutComponent

- #### генерируем компоненты в корне приложения, которые будет относиться к главному виду

ng g c home-page --skipTests
ng g c post-page --skipTests

- #### применяем home-page и post-page к дочерним роутам main-layout, редиректим на "/"

  app-routing.module.ts => const routes => children => redirectTo

- #### отображаем роутинг в шаблоне
  app.component.html => router-outlet
  main-layout.component.html => router-outlet
