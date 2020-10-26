# работа с анимацией

- #### регистрируем анимацию в компонент

  polyfills.ts => @Component => animations

- #### описываем параметры анимации

  polyfills.ts => @Component => animations => trigger => state

- #### переменная для описания состояния нужного элемента

  app.component.ts => AppComponent => boxState

- #### добавляем анимацию в шаблон

  app.component.html => ( [@box]="boxState" )

- #### создаём кнопку, при клике применяем анимацию

  app.component.html => ( button (click)="animate() )

- #### создаём анимацию
  app.component.ts => AppComponent => animate
