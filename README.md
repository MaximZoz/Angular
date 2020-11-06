# Реализовываем форму, позволяющую создавать пост

### создаём форму в шаблоне

src\app\admin\create-page\create-page.component.html

### добавляем фунцционал для ts

- #### в метод ngOnInit создаём form типа new FormGroup и добавляем контролы

  src\app\admin\create-page\create-page.component.ts => CreatePageComponent => ngOnInit =>

  this.form = new FormGroup({
  title: new FormControl(null, Validators.required),
  text: new FormControl(null, Validators.required),
  author: new FormControl(null, Validators.required),
  });

- #### в методе submit пишем проверку, что если форма не валидная, то не выполняем submit()

  src\app\admin\create-page\create-page.component.ts => CreatePageComponent => submit =>
  if (this.form.invalid) {
  return;
  }

### привязываем метод submit к форме и сабмитим её

src\app\admin\create-page\create-page.component.html => form =>
(formGroup) = 'form'
(ngSubmit) = 'submit()'

### создаём пост при сабмите формы

- #### создаём интерфейс post

  src\app\shared\interfaces.ts =>
  Post

- #### создаём переменную post
  src\app\admin\create-page\create-page.component.ts => submit =>
  const post: Post
