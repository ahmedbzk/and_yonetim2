import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-web-tasarim',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './web-tasarim.component.html',
  styleUrl: './web-tasarim.component.scss'
})
export class WebTasarimComponent {
  titleData = {
    badge: 'Dijital Dönüşüm',
    title: 'Web Tasarım ve Yazılım',
    desc: 'Siteniz veya işletmeniz için kurumsal, modern ve mobil uyumlu web siteleri tasarlıyoruz. Dijital dünyada güçlü bir varlık göstermeniz için buradayız.'
  };

  features = [
    {
      icon: "fas fa-laptop-code",
      title: "Kurumsal Web Sitesi",
      text: "Markanızı veya sitenizi en iyi şekilde yansıtan, modern ve özgün tasarımlar."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobil Uyumlu (Responsive)",
      text: "Tüm cihazlarda (telefon, tablet, bilgisayar) kusursuz çalışan esnek altyapı."
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimizasyonu",
      text: "Arama motorlarında üst sıralarda çıkmanızı sağlayacak altyapı kodlaması."
    },
    {
      icon: "fas fa-cogs",
      title: "Yönetim Paneli",
      text: "İçeriklerinizi kolayca güncelleyebileceğiniz kullanıcı dostu admin panelleri."
    }
  ];

  processTitleDesc = 'İhtiyaçlarınızı dinliyor, dijital dünyadaki yüzünüzü modern teknolojilerle inşa ediyoruz.';

  processSteps = [
    { step: 1, title: 'Analiz ve Tasarım', desc: 'İhtiyaçlarınıza uygun konsept belirlenerek modern bir arayüz (UI) tasarlanır.' },
    { step: 2, title: 'Yazılım ve Kodlama', desc: 'Tasarım, en güncel teknolojiler (Angular vb.) kullanılarak koda dökülür.' },
    { step: 3, title: 'Test Aşaması', desc: 'Siteniz farklı cihazlarda ve tarayıcılarda detaylı şekilde test edilir.' },
    { step: 4, title: 'Yayına Alma', desc: 'Siteniz sunuculara yüklenerek yayına alınır ve teknik destek süreci başlar.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1461749280684-dccba630e2f6.jpg',
    imgBack: 'assets/images/photo-1498050108023-c5249f4df085.jpg'
  };

  infoTitle = 'Neden Bizi Seçmelisiniz?';

  infoList = [
    {
      icon: 'fas fa-rocket',
      title: 'Yüksek Performans',
      desc: 'Hızlı yüklenen, kullanıcı deneyimi yüksek ve optimize edilmiş kod mimarisi.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenli Altyapı',
      desc: 'Verilerinizin güvenliğini ön planda tutan, güncel yazılım standartları.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Kesintisiz Destek',
      desc: 'Web siteniz yayına girdikten sonra da teknik bakım ve güncelleme desteği.'
    }
  ];
}
