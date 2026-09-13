import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-danisma',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './danisma.component.html',
  styleUrl: './danisma.component.scss'
})
export class DanismaComponent {
  titleData = {
    badge: 'Güvenli ve Prestijli',
    title: 'Profesyonel Danışma Hizmetleri',
    desc: 'Sitenize veya tesisinize gelen misafirlerin ilk izlenimini mükemmelleştiriyoruz. Güvenlik odaklı, güler yüzlü ve profesyonel danışma personellerimizle hizmetinizdeyiz.'
  };

  features = [
    {
      icon: "fas fa-user-shield",
      title: "Ziyaretçi Kayıt ve Kontrol",
      text: "Gelen misafirlerin kayıt altına alınması, kimlik kontrolü ve ilgili kişiye yönlendirilmesi."
    },
    {
      icon: "fas fa-box",
      title: "Kargo ve Posta Teslimatı",
      text: "Site sakinlerine gelen kargo, kurye ve postaların güvenle teslim alınıp muhafaza edilmesi."
    },
    {
      icon: "fas fa-phone-alt",
      title: "Telefon Trafiği Yönetimi",
      text: "Gelen çağrıların cevaplanması ve gerekli durumlarda site yönetimine veya sakinlere aktarılması."
    },
    {
      icon: "fas fa-id-badge",
      title: "Güvenlik Koordinasyonu",
      text: "Güvenlik ekibiyle entegre çalışarak şüpheli durumlarda anında müdahale edilmesi."
    }
  ];

  processTitleDesc = 'Tesisinize değer katan, güvenlik ve prestiji bir arada sunan danışma hizmetlerimizle tanışın.';

  processSteps = [
    { step: 1, title: 'İhtiyaç Analizi', desc: 'Tesisinizin yapısına ve yoğunluğuna göre danışma ihtiyaçları belirlenir.' },
    { step: 2, title: 'Personel Seçimi', desc: 'İletişim becerileri yüksek ve eğitimli personeller titizlikle seçilir.' },
    { step: 3, title: 'Oryantasyon', desc: 'Görev alacak personele tesisinizin kuralları ve işleyişi hakkında eğitim verilir.' },
    { step: 4, title: 'Denetim', desc: 'Hizmet kalitesi düzenli aralıklarla denetlenir ve raporlanır.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1556740738-b6a63e27c4df.jpg',
    imgBack: 'assets/images/photo-1549923746-c502d488b3ea.jpg'
  };

  infoTitle = 'İlk İzlenim Önemlidir';

  infoList = [
    {
      icon: 'fas fa-smile',
      title: 'Güler Yüzlü Karşılama',
      desc: 'Misafirlerinizin kendini özel hissedeceği sıcak ve profesyonel bir yaklaşım.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Yüksek Güvenlik',
      desc: 'Giriş çıkışların titizlikle kontrol edildiği, huzurlu bir yaşam alanı.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Sistemli Çalışma',
      desc: 'Dijital kayıt sistemleri ve düzenli raporlama ile hatasız süreç yönetimi.'
    }
  ];
}
