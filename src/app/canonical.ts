import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class Canonical {
  constructor(private meta: Meta) {}

  setCanonicalUrl(url: string) {
    this.meta.removeTag('rel="canonical"');
    this.meta.addTag({
      rel: 'canonical',
      href: url
    });
  }
}
