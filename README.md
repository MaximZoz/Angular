# работа с анимацией

- #### Библиотека ng-animate (готовые комплексные анимации)

  ng g c animate --skipTests

  npm install ng-animate --save

- #### создаём шаблон анимации и саму анимацию

  animate.component.ts => animations

- #### переносим логику в отдельный файл

  app.animations.ts => const boxAnimation = trigger

  app.component.ts => (animations: [boxAnimation])
