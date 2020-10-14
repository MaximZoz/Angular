# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## работа с query params ( параметры, которые идут после ? )

1. Оживляем кнопку back

2. реализовываем задачу показа id только в том случае, если присутствует query параметр о том, что его надо показать: posts.component => showIds = false, (\*ngIf="showIds" routerLink]="['/posts']" и [queryParams] = '{ showIds: true }')
