# создаём форму для днамической валидации

### создаём шаблон для входа

admin\login-page\login-page.component.html

### подключаем форму

admin\login-page\login-page.component.ts => form
admin\login-page\login-page.component.ts => ngOnInit => this.form = new FormGroup

app.module.ts => imports => FormsModule, ReactiveFormsModule

### создаём файл интерфейсов, реализуем его в login-page.component

shared\interfaces.ts =>

admin\login-page\login-page.component.ts => const user: User
