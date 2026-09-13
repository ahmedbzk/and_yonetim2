import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;

  stats = [
    { target: 10, label: 'Yıllık Tecrübe', suffix: '+' },
    { target: 150, label: 'Mutlu Müşteri', suffix: '+' },
    { target: 50, label: 'Yönetilen Site', suffix: '+' },
    { target: 24, label: 'Saat Destek', suffix: '/7' }
  ];

  testimonials = [
    { text: "AND Yönetim ile çalışmaya başladığımızdan beri sitemizin peyzajı ve temizliği harika oldu. Aidat şeffaflığı da cabası.", author: "Ahmet Yılmaz", role: "Site Yöneticisi" },
    { text: "Teknik sorunlara anında müdahale ediyorlar. Profesyonel kadroları sayesinde içimiz rahat. Gözümüz arkada kalmıyor.", author: "Ayşe Kaya", role: "Kat Maliki" },
    { text: "Hukuki danışmanlık hizmetleri ile uzun süredir çözülemeyen aidat sorunlarımız çözüldü. Kesinlikle tavsiye ederim.", author: "Mehmet Demir", role: "Site Yöneticisi" }
  ];

  servicesList = [
    { title: 'Site Yönetimi', icon: 'fas fa-building', route: '/hizmetlerimiz/site-danismanlik', image: 'assets/images/photo-1522071820081-009f0129c71c.jpg', desc: 'Şeffaf ve profesyonel idari yönetim yaklaşımı.' },
    { title: 'Bahçe Bakım', icon: 'fas fa-leaf', route: '/hizmetlerimiz/bahce-bakim', image: 'assets/images/photo-1584622650111-993a426fbf0a.jpg', desc: 'Yeşil alanlarınızın periyodik ve estetik bakımı.' },
    { title: 'Teknik Servis', icon: 'fas fa-tools', route: '/hizmetlerimiz/teknik', image: 'assets/images/photo-1504917595217-d4dc5ebe6122.jpg', desc: '7/24 teknik altyapı onarım ve desteği.' },
    { title: 'Hukuk', icon: 'fas fa-balance-scale', route: '/hizmetlerimiz/site-hukuk', image: 'assets/images/law-hero.jpg', desc: 'Aidat takibi ve yasal süreç danışmanlığı.' },
    { title: 'Muhasebe', icon: 'fas fa-calculator', route: '/hizmetlerimiz/site-muhasebe', image: 'assets/images/accounting-1.jpg', desc: 'Güvenilir ve hatasız mali takip işlemleri.' },
    { title: 'Temizlik', icon: 'fas fa-broom', route: '/hizmetlerimiz/temizlik', image: 'assets/images/cleaning-1.jpg', desc: 'Ortak alanların hijyeni ve periyodik temizliği.' },
    { title: 'Concierge', icon: 'fas fa-concierge-bell', route: '/hizmetlerimiz/concierge', image: 'assets/images/photo-1541845157-a6d2d100c931.jpg', desc: 'Sakinlere özel vip rezervasyon ve asistanlık.' },
    { title: 'Danışma', icon: 'fas fa-shield-alt', route: '/hizmetlerimiz/danisma', image: 'assets/images/photo-1517245386807-bb43f82c33c4.jpg', desc: 'Güvenli ve güleryüzlü ziyaretçi karşılama.' },
    { title: 'Denetim', icon: 'fas fa-file-signature', route: '/hizmetlerimiz/denetim-raporlama', image: 'assets/images/photo-1460925895917-afdab827c52f.jpg', desc: 'Bağımsız finansal ve idari süreç denetimi.' },
    { title: 'Web Tasarım', icon: 'fas fa-laptop-code', route: '/hizmetlerimiz/web-tasarim', image: 'assets/images/photo-1498050108023-c5249f4df085.jpg', desc: 'Sitenize özel modern ve işlevsel web arayüzleri.' }
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
