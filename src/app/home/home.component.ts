import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng2TweetService } from 'ng2-tweet/lib/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ng2TweetService : Ng2TweetService) {

  }

  ngOnInit() {

  }
}
