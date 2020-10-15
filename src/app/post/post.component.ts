import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.post = data.post;
    });
    // console.log('PostComponent -> ngOnInit -> Params', params);
    //   this.post = this.postService.getById(+params.id);
    // });
  }
  loadPost() {
    this.router.navigate(['/posts', '44']);
  }
}
