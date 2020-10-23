# работа с параметрами url

### Тестируем ссылку в шаблоне

1. #### создаём компонент navbar который отвечает за навигацию в нашем приложении

   ng g c navbar

2. #### создаём ссылку в шаблоне навбара

   navbar.component.html

3. #### добавляем app-navbar в routing.component

routing.component.html => app-navbar

4. #### пишем тест
   navbar.component.spec.ts => it

/\*  
git status
git add .
git commit -a -m"9. Тестирование ссылки в шаблоне"
git push -u origin 13*Интеграционное*тестирование

git checkout -- index.html возвращаем файл к коммиту
git checkout . возвращаем все файлы к коммиту
git reset --hard HEAD~1 удаляем последний коммит
git push --force -сохраняем
\*/
