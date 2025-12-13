import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { Canonical } from './canonical';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tommygaessler');

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
