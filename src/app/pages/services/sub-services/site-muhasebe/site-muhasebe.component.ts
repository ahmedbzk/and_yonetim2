import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-site-muhasebe',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './site-muhasebe.component.html',
  styleUrl: './site-muhasebe.component.scss'
})
export class SiteMuhasebeComponent {
  titleData = {
    badge: 'Şeffaf Finans',
    title: 'Site Muhasebe Hizmetleri',
    desc: 'Sitenizin mali işlerini güvenilir ellere teslim edin. Gelir-gider takibini düzenli ve şeffaf bir şekilde yöneterek bütçenizi kontrol altında tutuyoruz.'
  };

  features = [
    {
      icon: "fas fa-calculator",
      title: "Aidat Takibi ve Tahsilat",
      text: "Kat maliklerinin aidat ödemelerinin düzenli takibi ve gecikmelerin bildirilmesi."
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Fatura ve Fiş İşleme",
      text: "Siteye ait tüm harcama faturalarının muhasebe sistemine anında işlenmesi."
    },
    {
      icon: "fas fa-users",
      title: "Personel Bordrolama",
      text: "Sitede çalışan personelin maaş, SGK ve özlük haklarının yasalara uygun yönetimi."
    },
    {
      icon: "fas fa-chart-pie",
      title: "Aylık Raporlama",
      text: "Gelir-gider durumunu gösteren anlaşılır finansal tabloların hazırlanması."
    }
  ];

  processTitleDesc = 'Paranızın nereye harcandığını her zaman bilmeniz için dijital ve şeffaf bir finansal yönetim sunuyoruz.';

  processSteps = [
    { step: 1, title: 'Bütçe Planlama', desc: 'Sitenizin yıllık giderleri öngörülerek işletme projesi hazırlanır.' },
    { step: 2, title: 'Kayıt Altına Alma', desc: 'Tüm finansal hareketler günlük olarak muhasebe yazılımına işlenir.' },
    { step: 3, title: 'Ödeme Yönetimi', desc: 'Tedarikçi ve personel ödemeleri zamanında ve eksiksiz yapılır.' },
    { step: 4, title: 'Şeffaf Sunum', desc: 'Her ayın sonunda mali raporlar yönetim panosunda ve dijitalde paylaşılır.' }
  ];

  images = {
    imgFront: 'assets/images/accounting-1.jpg',
    imgBack: 'assets/images/photo-1460925895917-afdab827c52f.jpg'
  };

  infoTitle = 'Finansal Huzurunuz İçin';

  infoList = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Dijital Takip',
      desc: 'Mobil uygulama üzerinden aidat borcunuzu görebilir ve kredi kartıyla ödeyebilirsiniz.'
    },
    {
      icon: 'fas fa-eye',
      title: 'Tam Şeffaflık',
      desc: 'Toplanan aidatların nereye harcandığı kuruşu kuruşuna belgelenir.'
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Vergi Hukukuna Uygun',
      desc: 'Tüm beyanname ve resmi bildirimler yasal süresi içinde eksiksiz tamamlanır.'
    }
  ];
}
