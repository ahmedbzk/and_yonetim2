import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-temizlik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './temizlik.component.html',
  styleUrl: './temizlik.component.scss'
})
export class TemizlikComponent {
  titleData = {
    badge: 'Hijyenik Ortamlar',
    title: 'Profesyonel Temizlik Hizmetleri',
    desc: 'Yaşam alanlarınızda yüksek hijyen standartlarını koruyor, ortak kullanım alanlarınızı pırıl pırıl ve sağlıklı hale getiriyoruz.'
  };

  features = [
    {
      icon: "fas fa-broom",
      title: "Ortak Alan Temizliği",
      text: "Bina girişleri, koridorlar, merdivenler ve asansörlerin günlük detaylı temizliği."
    },
    {
      icon: "fas fa-spray-can",
      title: "Dezenfeksiyon",
      text: "Özellikle temasın yoğun olduğu kapı kolları ve butonların özel solüsyonlarla dezenfekte edilmesi."
    },
    {
      icon: "fas fa-trash-alt",
      title: "Çöp Toplama Hizmeti",
      text: "Katı atıkların ve geri dönüşüm malzemelerinin belirlenen saatlerde kapılardan toplanması."
    },
    {
      icon: "fas fa-tint",
      title: "Otopark ve Dış Alan",
      text: "Açık/kapalı otoparkların, yürüyüş yollarının ve sosyal tesislerin yıkanarak temizlenmesi."
    }
  ];

  processTitleDesc = 'Gözden kaçan hiçbir detay bırakmadan, periyodik ve programlı bir temizlik süreci yönetiyoruz.';

  processSteps = [
    { step: 1, title: 'Keşif ve Programlama', desc: 'Sitenin yapısına göre günlük, haftalık ve aylık temizlik takvimi oluşturulur.' },
    { step: 2, title: 'Personel ve Ekipman', desc: 'Eğitimli temizlik personellerimiz, çevre dostu malzemelerle göreve başlar.' },
    { step: 3, title: 'Uygulama', desc: 'Ortak alanlar, belirlenen standartlara ve saatlere uygun olarak temizlenir.' },
    { step: 4, title: 'Kontrol', desc: 'Alan sorumlularımız tarafından yapılan işin kalitesi düzenli olarak denetlenir.' }
  ];

  images = {
    imgFront: 'assets/images/cleaning-1.jpg',
    imgBack: 'assets/images/photo-1581578731548-c64695cc6952.jpg'
  };

  infoTitle = 'Sağlığınız Bizim İçin Önemli';

  infoList = [
    {
      icon: 'fas fa-leaf',
      title: 'Doğa Dostu Ürünler',
      desc: 'İnsan sağlığına ve çevreye zarar vermeyen, TSE onaylı profesyonel temizlik kimyasalları kullanıyoruz.'
    },
    {
      icon: 'fas fa-user-check',
      title: 'Güvenilir Personel',
      desc: 'Tüm çalışanlarımız güvenlik soruşturmasından geçmiş, referanslı ve tecrübeli kişilerden oluşur.'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Denetlenebilir Sistem',
      desc: 'Temizlik takip çizelgeleri ile yapılan her işlemin saatini ve personelini görebilirsiniz.'
    }
  ];
}
