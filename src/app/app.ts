import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { Canonical } from './canonical';
import { filter } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookBible } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faMedium, faYoutube, faUnsplash, faAppStoreIos, faNpm, faGithub, faStackOverflow, faZoom } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tommygaessler');

  faBookBible = faBookBible;
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
  faMedium = faMedium;
  faYoutube = faYoutube;
  faUnsplash = faUnsplash;
  faAppStoreIos = faAppStoreIos;
  faGithub = faGithub;
  faNpm = faNpm;
  faStackOverflow = faStackOverflow;
  faZoom = faZoom;

  constructor(private router: Router, private canonical: Canonical) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = 'https://tommygaessler.com' +
          this.router.url.replace(/\/?$/, '/');

        this.canonical.setCanonicalUrl(url);
      });
  }
    
}
