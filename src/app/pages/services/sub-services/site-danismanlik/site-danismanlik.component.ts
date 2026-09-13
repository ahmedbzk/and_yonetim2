import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-site-danismanlik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './site-danismanlik.component.html',
  styleUrl: './site-danismanlik.component.scss'
})
export class SiteDanismanlikComponent {
  titleData = {
    badge: 'Uzman Görüşü',
    title: 'Site ve Tesis Yönetim Danışmanlığı',
    desc: 'Kendi sitenizi yönetirken profesyonel desteğe ihtiyaç duyduğunuz her an yanınızdayız. Bilgi birikimimizle yönetim süreçlerinizi kolaylaştırıyoruz.'
  };

  features = [
    {
      icon: "fas fa-users-cog",
      title: "Yönetim Planı Hazırlama",
      text: "Sitenizin ihtiyaçlarına ve kanunlara uygun, sürdürülebilir bir yönetim planının oluşturulması."
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: "Bütçe ve Aidat Belirleme",
      text: "Yıllık işletme projelerinin hazırlanması ve adil aidat dağılımının hesaplanması."
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Yönetici Eğitimi",
      text: "Site yöneticilerine yasal sorumluluklar, muhasebe ve operasyonel süreçler hakkında eğitim."
    },
    {
      icon: "fas fa-balance-scale",
      title: "Hukuki Destek",
      text: "Kat malikleri arası anlaşmazlıklarda ve genel kurul toplantılarında danışmanlık hizmeti."
    }
  ];

  processTitleDesc = 'Sorunları büyümeden çözmek ve sistemli bir yönetim kurmak için rehberlik ediyoruz.';

  processSteps = [
    { step: 1, title: 'Mevcut Durum Analizi', desc: 'Sitenizin yönetim yapısı, mali durumu ve eksiklikleri incelenir.' },
    { step: 2, title: 'Strateji Geliştirme', desc: 'Tespit edilen sorunlara yönelik kalıcı ve yasal çözüm önerileri sunulur.' },
    { step: 3, title: 'Sistem Kurulumu', desc: 'İşletme projesi, personel görev tanımları ve bütçe sistemleri kurulur.' },
    { step: 4, title: 'Sürekli Destek', desc: 'İhtiyaç duyduğunuz her an telefonla veya yerinde destek sağlanır.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1573164713988-8665fc963095.jpg',
    imgBack: 'assets/images/photo-1517048676732-d65bc937f952.jpg'
  };

  infoTitle = 'Doğru Bilgi, Huzurlu Yaşam';

  infoList = [
    {
      icon: 'fas fa-book-open',
      title: 'Mevzuat Hakimiyeti',
      desc: 'Sürekli güncellenen kanunlara göre yasal ve güvenli adımlar atmanızı sağlıyoruz.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Tarafsız Arabuluculuk',
      desc: 'Kat malikleri arasındaki sorunların hukuki sınırlar içinde sulh ile çözülmesi.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Maliyet Optimizasyonu',
      desc: 'Doğru planlama ile gereksiz harcamaların önüne geçerek bütçenizi koruyoruz.'
    }
  ];
}
