# Создание приложения

### Создаём layout админки (генерируем компоненты, которые будут относиться к layout)

- #### создаём admin.modul

  admin => admin.modul.ts => ngModule, export class AdminModule

- #### создаём admin-layout

  ng g c admin/shared/components/admin-layout --skipTests

- #### создаём login-page

  ng g c admin/login-page --skipTests

- #### применяем admin.modul к роутам и лейзи лоадим его

  src\app\app-routing.module.ts

  admin => admin.modul.ts => ngModule => imports => RouterModule.forChild

admin => admin.modul.ts => RouterModule.forChild => component => AdminLayoutComponent, children

- #### создаём компоненты для админки и прописываем роуты для них
  ng g c admin/dashboard-page --skipTests
  ng g c admin/create-page --skipTests
  ng g c admin/edit-page --skipTests

admin\admin.module.ts => RouterModule.forChild => path

- #### задаём стратегию загрузки (админка загружается в фоне после всех модулей)
  app-routing.module.ts => NgModule => imports => preloadingStrategy: PreloadAllModules
