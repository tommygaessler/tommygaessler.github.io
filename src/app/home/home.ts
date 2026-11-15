import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faZoom } from '@fortawesome/free-brands-svg-icons';
import { faGolfBallTee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  faZoom = faZoom;
  faGolfBallTee = faGolfBallTee;

}
