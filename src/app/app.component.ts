import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date();
  search = '';
  searchFild = 'title';
  posts: Post[] = [
    {
      title: 'Beer',
      text: 'хорошее пиво в мире',
    },
    {
      title: 'Максим',
      text: 'хороший друг в мире',
    },
    {
      title: 'JavaScript',
      text: 'хороший язык программирования',
    },
  ];
  addPost() {
    this.posts.unshift({
      title: 'Angular 10',
      text: 'я изучаю этот фреймворк прямо сейчас',
    });
  }
}
