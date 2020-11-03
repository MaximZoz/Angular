# подключаем базу данных для приложения

### в пост запрос вставляем ссылку на FIREBASE

admin\shared\services\auth.service.ts => AuthService => login => http.post("FIREBASE")

### добавляем apiKey в environment

src\environments\environment.ts => const environment => apiKey

### добавляем apiKey в environment

src\app\shared\interfaces.ts => FbAuthrespons => idToken
