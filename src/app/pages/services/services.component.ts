import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
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

  services = [
    {
      title: 'Site Yönetiminde Çözümler',
      shortTitle: 'Yönetim Çözümleri',
      description: 'Profesyonel kadro, Güçlü altyapı, Eksiksiz hizmet anlayışı ile tüm site yönetimi ihtiyaçlarınız.',
      image: 'assets/images/photo-1486406146926-c627a92ad1ab.jpg',
      icon: 'fas fa-building',
      route: '/hizmetlerimiz'
    },
    {
      title: 'Bahçe Bakım Hizmetleri',
      shortTitle: 'Bahçe Bakım',
      description: 'Yeşil alanlarınızın periyodik bakımı, peyzaj düzenlemesi ve sulama sistemleri yönetimi.',
      image: 'assets/images/photo-1584622650111-993a426fbf0a.jpg',
      icon: 'fas fa-seedling',
      route: '/hizmetlerimiz/bahce-bakim'
    },
    {
      title: 'Concierge Hizmetleri',
      shortTitle: 'Concierge',
      description: 'Sakinleriniz için yaşam kalitesini artıran 7/24 kişiselleştirilmiş asistan ve rezervasyon hizmetleri.',
      image: 'assets/images/photo-1560179707-f14e90ef3623.jpg',
      icon: 'fas fa-concierge-bell',
      route: '/hizmetlerimiz/concierge'
    },
    {
      title: 'Danışma Hizmetleri',
      shortTitle: 'Danışma',
      description: 'Misafir karşılama, yönlendirme, kargo kabulü ve genel danışma masası hizmetleri.',
      image: 'assets/images/photo-1556745753-b2904692b3cd.jpg',
      icon: 'fas fa-headset',
      route: '/hizmetlerimiz/danisma'
    },
    {
      title: 'Denetim ve Raporlama',
      shortTitle: 'Denetim',
      description: 'Mali ve operasyonel süreçlerin bağımsız denetimi ve şeffaf raporlanması.',
      image: 'assets/images/photo-1454165804606-c3d57bc86b40.jpg',
      icon: 'fas fa-chart-line',
      route: '/hizmetlerimiz/denetim-raporlama'
    },
    {
      title: 'Site Danışmanlık',
      shortTitle: 'Danışmanlık',
      description: 'Kurulum ve yönetim süreçlerinde profesyonel danışmanlık hizmetleri.',
      image: 'assets/images/photo-1600880292203-757bb62b4baf.jpg',
      icon: 'fas fa-user-tie',
      route: '/hizmetlerimiz/site-danismanlik'
    },
    {
      title: 'Site Hukuk Hizmetleri',
      shortTitle: 'Hukuk',
      description: 'Alacak takibi, genel kurul süreçleri ve tüm hukuki konularda uzman desteği.',
      image: 'assets/images/law-hero.jpg',
      icon: 'fas fa-balance-scale',
      route: '/hizmetlerimiz/site-hukuk'
    },
    {
      title: 'Site Muhasebe Hizmetleri',
      shortTitle: 'Muhasebe',
      description: 'Aidat takibi, bütçe planlama, fatura ve gider yönetimi.',
      image: 'assets/images/photo-1554224155-8d04cb21cd6c.jpg',
      icon: 'fas fa-calculator',
      route: '/hizmetlerimiz/site-muhasebe'
    },
    {
      title: 'Teknik Hizmetler',
      shortTitle: 'Teknik',
      description: 'Asansör, kazan dairesi, havuz ve tüm ortak alan mekanik/elektrik bakımları.',
      image: 'assets/images/photo-1581092160562-40aa08e78837.jpg',
      icon: 'fas fa-tools',
      route: '/hizmetlerimiz/teknik'
    },
    {
      title: 'Temizlik Hizmetleri',
      shortTitle: 'Temizlik',
      description: 'Ortak alanların, otoparkların ve peyzaj alanlarının periyodik profesyonel temizliği.',
      image: 'assets/images/photo-1581578731548-c64695cc6952.jpg',
      icon: 'fas fa-broom',
      route: '/hizmetlerimiz/temizlik'
    },
    {
      title: 'Web Tasarım ve Yazılım',
      shortTitle: 'Web Tasarım',
      description: 'Kurumsal siteler, apartman/site yönetim panelleri ve özel dijital çözümler.',
      image: 'assets/images/photo-1498050108023-c5249f4df085.jpg',
      icon: 'fas fa-laptop-code',
      route: '/hizmetlerimiz/web-tasarim'
    }
  ];
}
