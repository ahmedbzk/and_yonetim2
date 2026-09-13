import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-denetim-raporlama',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './denetim-raporlama.component.html',
  styleUrl: './denetim-raporlama.component.scss'
})
export class DenetimRaporlamaComponent {
  titleData = {
    badge: 'Şeffaf Yönetim',
    title: 'Denetim ve Raporlama',
    desc: 'Site veya tesis yönetim süreçlerinizin yasalara ve mali standartlara uygunluğunu denetliyor, şeffaf bir şekilde raporluyoruz. Her şey kontrol altında.'
  };

  features = [
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Mali Denetim",
      text: "Gelir-gider tablolarının, faturaların ve banka hareketlerinin titizlikle incelenmesi."
    },
    {
      icon: "fas fa-balance-scale",
      title: "Hukuki Uygunluk",
      text: "Alınan kararların ve yapılan işlemlerin Kat Mülkiyeti Kanunu'na uygunluğunun denetimi."
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Operasyonel Denetim",
      text: "Temizlik, güvenlik, teknik gibi saha personelinin performansının ölçülmesi."
    },
    {
      icon: "fas fa-chart-line",
      title: "Detaylı Raporlama",
      text: "Tüm denetim sonuçlarının anlaşılır grafikler ve raporlarla kat maliklerine sunulması."
    }
  ];

  processTitleDesc = 'Tarafsız ve uzman denetim ekibimizle, soru işaretlerine yer bırakmayan şeffaf bir süreç yürütüyoruz.';

  processSteps = [
    { step: 1, title: 'Veri Toplama', desc: 'Mali tablolar, karar defterleri ve operasyonel veriler toplanır.' },
    { step: 2, title: 'İnceleme', desc: 'Uzman denetçilerimiz tarafından veriler yasal mevzuata göre incelenir.' },
    { step: 3, title: 'Tespit ve Öneri', desc: 'Eksik veya hatalı işlemler tespit edilerek düzeltici öneriler hazırlanır.' },
    { step: 4, title: 'Sunum', desc: 'Hazırlanan denetim raporu periyodik olarak yönetim kuruluna ve kat maliklerine sunulur.' }
  ];

  images = {
    imgFront: 'assets/images/photo-1554224155-6726b3ff858f.jpg',
    imgBack: 'assets/images/photo-1454165804606-c3d57bc86b40.jpg'
  };

  infoTitle = 'Neden Denetim Şart?';

  infoList = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Güven Ortamı',
      desc: 'Şeffaflık sayesinde yönetim ve kat malikleri arasında tam bir güven inşa edilir.'
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Risk Yönetimi',
      desc: 'Olası mali ve hukuki hataların önceden tespit edilerek zararın önlenmesi.'
    },
    {
      icon: 'fas fa-gavel',
      title: 'Yasal Zorunluluk',
      desc: 'Kanunların gerektirdiği denetim yükümlülüklerinin profesyonelce yerine getirilmesi.'
    }
  ];
}
