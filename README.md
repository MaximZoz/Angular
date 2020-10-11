# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Локальные и Глобальные сервисы

Как разделять область видимости сервиса

1. CounterComponent зареегистрирован в app.module и по-этому его можно использовать глобально
2. LocalCounterService не зареегистрирован в app.module и по-этому его можно использовать только локально
