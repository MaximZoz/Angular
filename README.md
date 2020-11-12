# Добавляем возможность PWA для приложения

### конфигурируем pwa приложение

- ng add @angular/pwa

#### добавляем шрифты из scss, чтобы закешировать их в ServiceWorkerModule

ngsw-config.json => assetGroups =>

- urls": ("https://fonts.googleapis.com/css?family=Roboto")

#### добавляем dataGroups

ngsw-config.json => assetGroups =>

- "dataGroups": [{"name": "fireBasePosts", "urls": ("https://angular-blog-5f0de.firebaseio.com/**"), "cacheConfig": {"maxSize": 5, "maxAge": "3600"}}]

### делаем prod. сборку

- ng build --prod

### устанавливаем http server для пользовательского теста pwa

- npm i -g http-server

### переходим в dist/Angular и запускаем локальный сервер

- http-server -p 4200
