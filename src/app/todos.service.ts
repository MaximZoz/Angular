import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      myCastomHeader: Math.random().toString(),
    });
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo,
      {
        headers,
        //   headers: new HttpHeaders({
        //   myCastomHeader: Math.random().toString(),
        // }),
      }
    );
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('castom', 'anything');
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?', {
        params,
        observe: 'response',
        // params: new HttpParams().set('_limit', '3')
      })
      .pipe(
        map((response) => {
          // console.log('TodosService -> constructor -> response', response);
          return response.body;
        }),
        delay(500),
        catchError((error) => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    return this.http
      .delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            console.log('Sent', event);
          }
          if (event.type === HttpEventType.Response) {
            console.log('Response', event);
          }
        })
      );
  }
  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        completed: true,
      },
      {
        responseType: 'json',
      }
    );
  }
}
