# Тестирование работы сервиса

- ### Проверяем действительно ли изменяется массив post когда мы добавляем новый элемент

  posts.component.spec.ts => describe=> it =>
  const spy = spyOn(service, 'create').and.returnValue(EMPTY);

1.  #### toHaveBeenCalled()- проверяем вызвался ли элемент

    expect(spy).toHaveBeenCalled()

2.  #### toBeTruthy() проверка на то, что там что- то есть

    expect(component.posts.includes(post)).toBeTruthy();

3.  #### проверка на то, что если ошибка, то поле messege = err

    const error = 'Error message';
    spyOn(service, 'create').and.returnValue(throwError(error));

        component.add('Post title');
        expect(component.message).toBe(error);
