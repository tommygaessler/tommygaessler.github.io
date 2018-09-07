import { Component, OnInit } from '@angular/core';

import { press } from '../../assets/press/press';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {

  press: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.press = press;
  }

}
