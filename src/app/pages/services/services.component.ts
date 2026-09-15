import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: observer.unobserve(entry.target) to animate only once
          }
        });
      }, { threshold: 0.15 });

      const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
      elements.forEach((el: Element) => observer.observe(el));
    }
  }

  services = [
    {
      titleKey: 'SERVICES_PAGE.LIST.YONETIM.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.YONETIM.SHORT',
      descKey: 'SERVICES_PAGE.LIST.YONETIM.DESC',
      image: 'assets/images/photo-1486406146926-c627a92ad1ab.jpg',
      icon: 'fas fa-building',
      route: '/hizmetlerimiz'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.BAHCE.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.BAHCE.SHORT',
      descKey: 'SERVICES_PAGE.LIST.BAHCE.DESC',
      image: 'assets/images/photo-1584622650111-993a426fbf0a.jpg',
      icon: 'fas fa-seedling',
      route: '/hizmetlerimiz/bahce-bakim'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.CONCIERGE.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.CONCIERGE.SHORT',
      descKey: 'SERVICES_PAGE.LIST.CONCIERGE.DESC',
      image: 'assets/images/photo-1560179707-f14e90ef3623.jpg',
      icon: 'fas fa-concierge-bell',
      route: '/hizmetlerimiz/concierge'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.DANISMA.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.DANISMA.SHORT',
      descKey: 'SERVICES_PAGE.LIST.DANISMA.DESC',
      image: 'assets/images/photo-1556745753-b2904692b3cd.jpg',
      icon: 'fas fa-headset',
      route: '/hizmetlerimiz/danisma'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.DENETIM.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.DENETIM.SHORT',
      descKey: 'SERVICES_PAGE.LIST.DENETIM.DESC',
      image: 'assets/images/photo-1454165804606-c3d57bc86b40.jpg',
      icon: 'fas fa-chart-line',
      route: '/hizmetlerimiz/denetim-raporlama'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.DANISMANLIK.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.DANISMANLIK.SHORT',
      descKey: 'SERVICES_PAGE.LIST.DANISMANLIK.DESC',
      image: 'assets/images/photo-1600880292203-757bb62b4baf.jpg',
      icon: 'fas fa-user-tie',
      route: '/hizmetlerimiz/site-danismanlik'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.HUKUK.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.HUKUK.SHORT',
      descKey: 'SERVICES_PAGE.LIST.HUKUK.DESC',
      image: 'assets/images/law-hero.jpg',
      icon: 'fas fa-balance-scale',
      route: '/hizmetlerimiz/site-hukuk'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.MUHASEBE.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.MUHASEBE.SHORT',
      descKey: 'SERVICES_PAGE.LIST.MUHASEBE.DESC',
      image: 'assets/images/photo-1554224155-8d04cb21cd6c.jpg',
      icon: 'fas fa-calculator',
      route: '/hizmetlerimiz/site-muhasebe'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.TEKNIK.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.TEKNIK.SHORT',
      descKey: 'SERVICES_PAGE.LIST.TEKNIK.DESC',
      image: 'assets/images/photo-1581092160562-40aa08e78837.jpg',
      icon: 'fas fa-tools',
      route: '/hizmetlerimiz/teknik'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.TEMIZLIK.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.TEMIZLIK.SHORT',
      descKey: 'SERVICES_PAGE.LIST.TEMIZLIK.DESC',
      image: 'assets/images/photo-1581578731548-c64695cc6952.jpg',
      icon: 'fas fa-broom',
      route: '/hizmetlerimiz/temizlik'
    },
    {
      titleKey: 'SERVICES_PAGE.LIST.WEB.TITLE',
      shortTitleKey: 'SERVICES_PAGE.LIST.WEB.SHORT',
      descKey: 'SERVICES_PAGE.LIST.WEB.DESC',
      image: 'assets/images/photo-1498050108023-c5249f4df085.jpg',
      icon: 'fas fa-laptop-code',
      route: '/hizmetlerimiz/web-tasarim'
    }
  ];
}
