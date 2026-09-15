import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.addLangs(['tr', 'en']);
    this.translate.setDefaultLang('tr');

    const browserLang = this.translate.getBrowserLang();
    const lang = browserLang?.match(/tr|en/) ? browserLang : 'tr';
    this.setLanguage('tr'); // Default to TR, user can change

    this.translate.onLangChange.subscribe(() => {
      this.updateMetadataForCurrentRoute();
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['pageKey']) {
        this.updateMetadata(data['pageKey']);
      } else {
        this.updateMetadata('HOME'); // Fallback
      }
    });
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang;
  }

  private updateMetadataForCurrentRoute() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const pageKey = route.snapshot.data['pageKey'] || 'HOME';
    this.updateMetadata(pageKey);
  }

  private updateMetadata(pageKey: string) {
    this.translate.get(`META.${pageKey}`).subscribe(metaInfo => {
      if (metaInfo) {
        if (metaInfo.TITLE) {
          this.titleService.setTitle(metaInfo.TITLE);
        }
        if (metaInfo.DESCRIPTION) {
          this.metaService.updateTag({ name: 'description', content: metaInfo.DESCRIPTION });
        }
      }
    });
  }
}
