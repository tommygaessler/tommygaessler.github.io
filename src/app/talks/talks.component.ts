import { Component, OnInit } from '@angular/core';

import { talks } from '../../assets/talks/talks';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.talks = talks;
  }

}
