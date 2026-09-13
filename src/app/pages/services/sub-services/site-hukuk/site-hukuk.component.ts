import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-site-hukuk',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './site-hukuk.component.html',
  styleUrl: './site-hukuk.component.scss'
})
export class SiteHukukComponent {
  titleData = {
    badge: 'Hukuki Güvence',
    title: 'Site Hukuk Hizmetleri',
    desc: 'Kat Mülkiyeti Kanunu ve ilgili tüm yasal süreçlerde uzman avukatlarımızla yanınızdayız. Yönetiminizin hukuki zeminde sağlam adımlar atmasını sağlıyoruz.'
  };

  features = [
    {
      icon: "fas fa-gavel",
      title: "İcra Takibi",
      text: "Ödenmeyen aidat ve diğer gider avanslarının hukuki yollarla tahsilatı."
    },
    {
      icon: "fas fa-file-contract",
      title: "Sözleşme Yönetimi",
      text: "Tedarikçi, personel ve bakım sözleşmelerinin hukuka uygun şekilde hazırlanması."
    },
    {
      icon: "fas fa-users",
      title: "Genel Kurul Danışmanlığı",
      text: "Toplantıların kanuna uygun yapılması ve alınan kararların hukuki geçerliliğinin sağlanması."
    },
    {
      icon: "fas fa-balance-scale-left",
      title: "Arabuluculuk",
      text: "Kat malikleri arasında yaşanan anlaşmazlıkların mahkemeye taşınmadan çözümü."
    }
  ];

  processTitleDesc = 'Hukuki süreçleri sizin adınıza titizlikle takip ediyor, olası riskleri önceden bertaraf ediyoruz.';

  processSteps = [
    { step: 1, title: 'Dosya İnceleme', desc: 'Sitenizin hukuki durumu, mevcut sözleşmeler ve geçmiş kararlar incelenir.' },
    { step: 2, title: 'İhtar ve Bildirim', desc: 'Gecikmiş ödemeler ve kural ihlalleri için yasal bildirimler yapılır.' },
    { step: 3, title: 'Dava ve İcra', desc: 'Sonuç alınamayan durumlarda icra takibi ve dava süreçleri başlatılır.' },
    { step: 4, title: 'Düzenli Raporlama', desc: 'Devam eden hukuki süreçlerin durumu hakkında yönetime rapor sunulur.' }
  ];

  images = {
    imgFront: 'assets/images/law-hero.jpg',
    imgBack: 'assets/images/photo-1521791136064-7986c2920216.jpg'
  };

  infoTitle = 'Hukukun Gücü Yanınızda';

  infoList = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Zarar Görmeyin',
      desc: 'Yanlış hukuki adımlar nedeniyle oluşabilecek maddi ve manevi zararların önüne geçin.'
    },
    {
      icon: 'fas fa-hourglass-half',
      title: 'Hızlı Çözüm',
      desc: 'Uzman avukatlarımız sayesinde yasal süreçleri en kısa sürede lehinize sonuçlandırın.'
    },
    {
      icon: 'fas fa-book',
      title: 'KMK Uzmanlığı',
      desc: 'Sadece Kat Mülkiyeti Kanunu alanında deneyimli, özel bir hukuk ekibiyle çalışın.'
    }
  ];
}
