# работа с анимацией

- #### появление и исчезновение при клике на кнопку

app.component.ts => AppComponent => state('special') => visible = true

app.component.html => button (click)="visible = !visible ,\*ngIf="visible"

app.component.ts =>( transition ':leave')
