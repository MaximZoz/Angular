# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

##

Lazy loading или ленивая загрузка модулей:

- делаем так, чтобы (about-page.module) прогружался в фоновом режиме после того, как загрузили основную страницу

1. в (app-routing.module) создаём (const routes) и кидаём в нее роуты для about-page
2. в (RouterModule.forRoot) первым параметром указываем (routes), вторым (preloadingStrategy: PreloadAllModules)
