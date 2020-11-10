import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsService } from './../shared/posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts$: Observable<Post[]>;

  ngOnInit() {
    this.posts$ = this.postsService.getAll();
  }
}
