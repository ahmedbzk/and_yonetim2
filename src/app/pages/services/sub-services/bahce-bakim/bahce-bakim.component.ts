import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-bahce-bakim',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './bahce-bakim.component.html',
  styleUrl: './bahce-bakim.component.scss'
})
export class BahceBakimComponent {
  titleData = {
    badge: 'Doğayla İç İçe',
    title: 'Profesyonel Bahçe Bakımı',
    desc: 'Yaşam alanlarınıza nefes aldıran yeşil alanlarınızın her mevsim sağlıklı, estetik ve düzenli kalmasını sağlıyoruz. Size sadece doğanın keyfini çıkarmak kalıyor.'
  };

  features = [
    {
      icon: "fas fa-seedling",
      title: "Periyodik Bakım",
      text: "Çim biçme, havalandırma ve gübreleme işlemleriyle yeşil alanlarınızı taze tutuyoruz."
    },
    {
      icon: "fas fa-tree",
      title: "Peyzaj Tasarımı",
      text: "Ortak alanların estetik ve modern peyzaj düzenlemeleriyle değer katıyoruz."
    },
    {
      icon: "fas fa-water",
      title: "Akıllı Sulama",
      text: "Su tasarrufu sağlayan otomatik sulama sistemleri kurulumu ve takibi."
    },
    {
      icon: "fas fa-leaf",
      title: "Budama ve Temizlik",
      text: "Mevsimsel ağaç budama, kurumuş yaprak temizliği ve bitki sağlığı kontrolleri."
    }
  ];

  processTitleDesc = 'Bahçenizin ihtiyaçlarını belirlemekten, düzenli raporlamaya kadar uzanan şeffaf ve profesyonel bir süreç izliyoruz.';

  processSteps = [
    { step: 1, title: 'Keşif ve Analiz', desc: 'Uzman ekibimiz alanınızı ziyaret ederek toprak ve bitki analizini yapar.' },
    { step: 2, title: 'Özel Planlama', desc: 'Bahçenizin ihtiyaçlarına yönelik periyodik bakım takvimi oluşturulur.' },
    { step: 3, title: 'Uygulama', desc: 'Deneyimli bahçıvanlarımız planlanan işlemleri titizlikle gerçekleştirir.' },
    { step: 4, title: 'Raporlama', desc: 'Yapılan işlemler ve bahçenizin durumu hakkında düzenli raporlar sunulur.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1517048676732-d65bc937f952.jpg',
    imgBack: 'assets/images/photo-1522071820081-009f0129c71c.jpg'
  };

  infoTitle = 'Bahçeleriniz Artık Emin Ellerde';

  infoList = [
    {
      icon: 'fas fa-check',
      title: 'Düzenli Takvim',
      desc: 'Haftalık veya aylık periyotlarla yapılan düzenli bakım planı.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Doğru Bitki Seçimi',
      desc: 'İklime ve toprak yapısına en uygun bitki türlerinin belirlenmesi.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Hastalık ve Zararlı Kontrolü',
      desc: 'Bitkilerinizi hastalıklardan korumak için koruyucu önlemler.'
    }
  ];
}
