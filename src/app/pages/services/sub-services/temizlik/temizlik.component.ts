import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-temizlik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './temizlik.component.html',
  styleUrl: './temizlik.component.scss'
})
export class TemizlikComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.temizlik.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.temizlik.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.temizlik.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-broom",
      titleKey: 'SUB_SERVICES_DATA.temizlik.F1_T',
      textKey: 'SUB_SERVICES_DATA.temizlik.F1_D'
    },
    {
      icon: "fas fa-spray-can",
      titleKey: 'SUB_SERVICES_DATA.temizlik.F2_T',
      textKey: 'SUB_SERVICES_DATA.temizlik.F2_D'
    },
    {
      icon: "fas fa-trash-alt",
      titleKey: 'SUB_SERVICES_DATA.temizlik.F3_T',
      textKey: 'SUB_SERVICES_DATA.temizlik.F3_D'
    },
    {
      icon: "fas fa-tint",
      titleKey: 'SUB_SERVICES_DATA.temizlik.F4_T',
      textKey: 'SUB_SERVICES_DATA.temizlik.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.temizlik.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.temizlik.P1_T', descKey: 'SUB_SERVICES_DATA.temizlik.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.temizlik.P2_T', descKey: 'SUB_SERVICES_DATA.temizlik.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.temizlik.P3_T', descKey: 'SUB_SERVICES_DATA.temizlik.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.temizlik.P4_T', descKey: 'SUB_SERVICES_DATA.temizlik.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/cleaning-1.jpg',
    imgBack: 'assets/images/photo-1581578731548-c64695cc6952.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.temizlik.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-leaf',
      titleKey: 'SUB_SERVICES_DATA.temizlik.I1_T',
      descKey: 'SUB_SERVICES_DATA.temizlik.I1_D'
    },
    {
      icon: 'fas fa-user-check',
      titleKey: 'SUB_SERVICES_DATA.temizlik.I2_T',
      descKey: 'SUB_SERVICES_DATA.temizlik.I2_D'
    },
    {
      icon: 'fas fa-clipboard-list',
      titleKey: 'SUB_SERVICES_DATA.temizlik.I3_T',
      descKey: 'SUB_SERVICES_DATA.temizlik.I3_D'
    }
  ];
}
