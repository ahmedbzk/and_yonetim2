import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-concierge',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './concierge.component.html',
  styleUrl: './concierge.component.scss'
})
export class ConciergeComponent {
  titleData = {
    badge: 'Ayrıcalıklı Hizmet',
    title: 'Profesyonel Concierge Hizmetleri',
    desc: 'Yaşam alanlarınızda konforunuzu artırmak için günlük ihtiyaçlarınıza pratik, hızlı ve güvenilir çözümler sunuyoruz. Siz hayatın tadını çıkarın, gerisini bize bırakın.'
  };

  features = [
    {
      icon: "fas fa-concierge-bell",
      title: "Karşılama ve Yönlendirme",
      text: "Misafirlerinizin profesyonel bir şekilde karşılanması ve ilgili yerlere yönlendirilmesi."
    },
    {
      icon: "fas fa-calendar-check",
      title: "Rezervasyon Yönetimi",
      text: "Restoran, uçak bileti, etkinlik veya toplantı salonu gibi tüm rezervasyon işlemlerinizin organizasyonu."
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Kişisel Asistanlık",
      text: "Market alışverişi, kuru temizleme ve kurye takibi gibi günlük işlerinizin zamanında yapılması."
    },
    {
      icon: "fas fa-car",
      title: "Vale ve Transfer",
      text: "Araç parkı, havaalanı transferi ve şoförlü araç kiralama organizasyonları."
    }
  ];

  processTitleDesc = 'Size zaman kazandıran, hayatınızı kolaylaştıran özel asistanlık ve concierge hizmetlerimizle ayrıcalığı hissedin.';

  processSteps = [
    { step: 1, title: 'Talep Alma', desc: 'İhtiyaçlarınızı telefon, mesaj veya uygulama üzerinden hızlıca bize iletiyorsunuz.' },
    { step: 2, title: 'Planlama', desc: 'Talebinize en uygun çözümü uzman ekibimiz hızla planlar ve organize eder.' },
    { step: 3, title: 'Gerçekleştirme', desc: 'Deneyimli personelimiz veya anlaşmalı çözüm ortaklarımızla talebiniz yerine getirilir.' },
    { step: 4, title: 'Bilgilendirme', desc: 'İşlemin başarıyla tamamlandığına dair size anında bilgi verilir.' }
  ];

  images = {
    imgFront: 'assets/images/concierge-1.jpg',
    imgBack: 'assets/images/photo-1566073771259-6a8506099945.jpg'
  };

  infoTitle = 'Konforunuz Önceliğimizdir';

  infoList = [
    {
      icon: 'fas fa-clock',
      title: 'Zaman Tasarrufu',
      desc: 'Sıradan işlerle vakit kaybetmeyin, sevdiklerinize daha çok zaman ayırın.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenilir Hizmet',
      desc: 'Tüm işlemleriniz güvenlik standartlarına uygun ve gizlilik çerçevesinde yapılır.'
    },
    {
      icon: 'fas fa-star',
      title: 'Ayrıcalıklı Hissettirir',
      desc: 'Yaşam kalitenizi artıran, kişiye özel premium hizmet anlayışı.'
    }
  ];
}
