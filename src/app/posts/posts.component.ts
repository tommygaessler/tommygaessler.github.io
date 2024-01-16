import { Component, OnInit } from '@angular/core';

import { posts } from '../../assets/posts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.posts = posts;
  }

}
