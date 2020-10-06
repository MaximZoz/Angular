import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  p: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('promise Resolve');
    }, 4000);
  });
  date: Observable<Date> = new Observable((observable) => {
    setInterval(() => {
      observable.next(new Date());
    });
  });
}
