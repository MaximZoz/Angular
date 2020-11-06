# подключаем плагин редактора

### npm ngx-quill

npm i ngx-quill
npm i quill

### в shared.module импортируем QuillModule

src\app\shared\shared.module.ts => NgModule => imports, exports =>
QuillModule

### добавляем Quill editor в create-page.component

src\app\admin\create-page\create-page.component.html => quill-editor

### добавляем байндинг на text в Quill editor

src\app\admin\create-page\create-page.component.html => quill-editor =>
formControlName="text"

### импортируем css

src\styles.scss =>
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.snow.css';
