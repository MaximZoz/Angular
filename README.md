# Zoz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

# Тестирование работы формы

## инициализируем form через FormBuilder

1. counter.component.ts => form => constructor => private fb: FormBuilder this.form= fb.group => login, email

2. app.module.ts => imports => FormsModule

## тестируем form

1.  передаём new FormBuilder() в CounterComponent

- counter.component.spec.ts => component = new CounterComponent(new FormBuilder())

2.  тестируем то, что контролы (логин и емаил) были созданы и есть в форме (contains - возвращает bool если control name: str)

- it('should create form with 2 controls', () => {
  expect(component.form.contains('login')).toBeTruthy();

3.  тестируем то, что работает валидатор

- it => const control = component.form.get('login') => control.setValue('') => expect(control.valid).toBeFalsy();
