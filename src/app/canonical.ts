// import { Injectable } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

// @Injectable({
//   providedIn: 'root',
// })
// export class Canonical {
//   constructor(private meta: Meta) {}

//   setCanonicalUrl(url: string) {
//     this.meta.removeTag('rel="canonical"');
//     this.meta.addTag({
//       rel: 'canonical',
//       href: url
//     });
//   }
// }


import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Canonical {
  private readonly doc = inject(DOCUMENT);

  setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
