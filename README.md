# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Тестирование компонентов если компонент аутпутит что- либо неверх

# передаём counter наверх

1. counter.component.ts => counterEmiter => this.counterEmiter.emit(this.counter)

# тестируем counterEmiter

1. counter.component.spec.ts => describe => should increment value by EventEmiter
