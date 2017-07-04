import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    $('li a, .navbar-toggle').on('click', function () {
      $('.navbar-toggle').toggleClass('active');
    });

    $('.navbar-collapse a').on('click', function(){
      $(".navbar-collapse").collapse('hide');
    });
  }
}
