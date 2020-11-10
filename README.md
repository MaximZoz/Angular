# Регистрация локализации

src\app\app.module.ts =>

- registerLocaleData(ruLocale, 'ru');
- import ruLocale from '@angular/common/locales/ru';

src\app\admin\dashboard-page\dashboard-page.component.html =>

- | date: "medium":null:"ru"
