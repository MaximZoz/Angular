# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Локальные и Глобальные сервисы

Инжектирование сервиса внутри сервиса

1. создаём новый сервис log-service
2. реализуем constructor (private LogService: LogService) {} в AppCounterService
3. в метод конструктора добавляем функцию из LogService this.LogService.log('decrease counter...');
