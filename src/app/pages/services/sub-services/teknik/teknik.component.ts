import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-teknik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './teknik.component.html',
  styleUrl: './teknik.component.scss'
})
export class TeknikComponent {
  titleData = {
    badge: 'Kesintisiz Yaşam',
    title: 'Profesyonel Teknik Hizmetler',
    desc: 'Sitenizin veya tesisinizin altyapı, elektrik, mekanik ve asansör gibi tüm teknik süreçlerini yönetiyor, arızalara anında müdahale ediyoruz.'
  };

  features = [
    {
      icon: "fas fa-bolt",
      title: "Elektrik ve Aydınlatma",
      text: "Ortak alan aydınlatmaları, jeneratör bakımı ve elektrik panolarının periyodik kontrolü."
    },
    {
      icon: "fas fa-wrench",
      title: "Mekanik ve Tesisat",
      text: "Su depoları, hidrofor sistemleri ve sıhhi tesisat arızalarının giderilmesi."
    },
    {
      icon: "fas fa-elevator",
      title: "Asansör Bakım Takibi",
      text: "Asansörlerin yasal mevzuata uygun periyodik bakımlarının yaptırılması ve takibi."
    },
    {
      icon: "fas fa-thermometer-half",
      title: "Isıtma ve Soğutma",
      text: "Kazan dairesi, merkezi ısıtma ve iklimlendirme sistemlerinin işletilmesi."
    }
  ];

  processTitleDesc = 'Olası arızaları önceden tespit eden koruyucu bakım yaklaşımımızla konforunuzdan ödün vermeyin.';

  processSteps = [
    { step: 1, title: 'Check-Up', desc: 'Tesisin tüm teknik altyapısı detaylı bir şekilde incelenerek risk raporu çıkarılır.' },
    { step: 2, title: 'Koruyucu Bakım', desc: 'Sistemlerin ömrünü uzatmak için periyodik bakım takvimi oluşturulur.' },
    { step: 3, title: 'Hızlı Müdahale', desc: 'Meydana gelen arızalara 7/24 esasıyla, en kısa sürede teknik ekip yönlendirilir.' },
    { step: 4, title: 'Çözüm Onayı', desc: 'Yapılan onarım test edilir ve yönetime detaylı teknik rapor sunulur.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1581092160607-ee22621dd758.jpg',
    imgBack: 'assets/images/photo-1581092335397-9583eb92d232.jpg'
  };

  infoTitle = 'Güvenli ve Sorunsuz İşleyiş';

  infoList = [
    {
      icon: 'fas fa-stopwatch',
      title: '7/24 Acil Destek',
      desc: 'Beklenmedik durumlarda gece gündüz demeden teknik ekibimizle yanınızdayız.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Uzman Kadro',
      desc: 'Her biri kendi alanında sertifikalı, iş güvenliği kurallarına hakim personeller.'
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Sertifikalı Bakımlar',
      desc: 'Sistemlerinizin yasal zorunluluk gerektiren tüm muayenelerinin zamanında yapılması.'
    }
  ];
}
