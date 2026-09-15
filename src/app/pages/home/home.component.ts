import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;

  stats = [
    { target: 10, labelKey: 'HOME.STATS_EXPERIENCE', suffix: '+' },
    { target: 150, labelKey: 'HOME.STATS_CUSTOMERS', suffix: '+' },
    { target: 50, labelKey: 'HOME.STATS_SITES', suffix: '+' },
    { target: 24, labelKey: 'HOME.STATS_SUPPORT', suffix: '/7' }
  ];

  testimonials = [
    { textKey: "HOME.TESTIMONIAL_1", author: "Ahmet Yılmaz", roleKey: "HOME.TESTIMONIAL_1_ROLE" },
    { textKey: "HOME.TESTIMONIAL_2", author: "Ayşe Kaya", roleKey: "HOME.TESTIMONIAL_2_ROLE" },
    { textKey: "HOME.TESTIMONIAL_3", author: "Mehmet Demir", roleKey: "HOME.TESTIMONIAL_3_ROLE" }
  ];

  servicesList = [
    { titleKey: 'HOME.SERVICES_LIST.SITE_YONETIMI.TITLE', icon: 'fas fa-building', route: '/hizmetlerimiz/site-danismanlik', image: 'assets/images/photo-1522071820081-009f0129c71c.jpg', descKey: 'HOME.SERVICES_LIST.SITE_YONETIMI.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.BAHCE_BAKIM.TITLE', icon: 'fas fa-leaf', route: '/hizmetlerimiz/bahce-bakim', image: 'assets/images/photo-1584622650111-993a426fbf0a.jpg', descKey: 'HOME.SERVICES_LIST.BAHCE_BAKIM.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.TEKNIK_SERVIS.TITLE', icon: 'fas fa-tools', route: '/hizmetlerimiz/teknik', image: 'assets/images/photo-1504917595217-d4dc5ebe6122.jpg', descKey: 'HOME.SERVICES_LIST.TEKNIK_SERVIS.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.HUKUK.TITLE', icon: 'fas fa-balance-scale', route: '/hizmetlerimiz/site-hukuk', image: 'assets/images/law-hero.jpg', descKey: 'HOME.SERVICES_LIST.HUKUK.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.MUHASEBE.TITLE', icon: 'fas fa-calculator', route: '/hizmetlerimiz/site-muhasebe', image: 'assets/images/accounting-1.jpg', descKey: 'HOME.SERVICES_LIST.MUHASEBE.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.TEMIZLIK.TITLE', icon: 'fas fa-broom', route: '/hizmetlerimiz/temizlik', image: 'assets/images/cleaning-1.jpg', descKey: 'HOME.SERVICES_LIST.TEMIZLIK.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.CONCIERGE.TITLE', icon: 'fas fa-concierge-bell', route: '/hizmetlerimiz/concierge', image: 'assets/images/photo-1541845157-a6d2d100c931.jpg', descKey: 'HOME.SERVICES_LIST.CONCIERGE.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.DANISMA.TITLE', icon: 'fas fa-shield-alt', route: '/hizmetlerimiz/danisma', image: 'assets/images/photo-1517245386807-bb43f82c33c4.jpg', descKey: 'HOME.SERVICES_LIST.DANISMA.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.DENETIM.TITLE', icon: 'fas fa-file-signature', route: '/hizmetlerimiz/denetim-raporlama', image: 'assets/images/photo-1460925895917-afdab827c52f.jpg', descKey: 'HOME.SERVICES_LIST.DENETIM.DESC' },
    { titleKey: 'HOME.SERVICES_LIST.WEB.TITLE', icon: 'fas fa-laptop-code', route: '/hizmetlerimiz/web-tasarim', image: 'assets/images/photo-1498050108023-c5249f4df085.jpg', descKey: 'HOME.SERVICES_LIST.WEB.DESC' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          if (entry.target.classList.contains('counter-box') && !entry.target.classList.contains('counted')) {
            this.animateCounter(entry.target as HTMLElement);
            entry.target.classList.add('counted');
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    this.animatedElements.forEach(el => observer.observe(el.nativeElement));
    this.counterElements.forEach(el => observer.observe(el.nativeElement));
  }

  private animateCounter(element: HTMLElement) {
    const target = parseInt(element.getAttribute('data-target') || '0', 10);
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    let current = 0;
    
    const numElement = element.querySelector('.number-val');
    if (!numElement) return;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      numElement.textContent = current.toString();
    }, 16);
  }
}
