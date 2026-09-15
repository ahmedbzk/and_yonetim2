import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-concierge',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './concierge.component.html',
  styleUrl: './concierge.component.scss'
})
export class ConciergeComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.concierge.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.concierge.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.concierge.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-concierge-bell",
      titleKey: 'SUB_SERVICES_DATA.concierge.F1_T',
      textKey: 'SUB_SERVICES_DATA.concierge.F1_D'
    },
    {
      icon: "fas fa-calendar-check",
      titleKey: 'SUB_SERVICES_DATA.concierge.F2_T',
      textKey: 'SUB_SERVICES_DATA.concierge.F2_D'
    },
    {
      icon: "fas fa-shopping-bag",
      titleKey: 'SUB_SERVICES_DATA.concierge.F3_T',
      textKey: 'SUB_SERVICES_DATA.concierge.F3_D'
    },
    {
      icon: "fas fa-car",
      titleKey: 'SUB_SERVICES_DATA.concierge.F4_T',
      textKey: 'SUB_SERVICES_DATA.concierge.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.concierge.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.concierge.P1_T', descKey: 'SUB_SERVICES_DATA.concierge.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.concierge.P2_T', descKey: 'SUB_SERVICES_DATA.concierge.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.concierge.P3_T', descKey: 'SUB_SERVICES_DATA.concierge.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.concierge.P4_T', descKey: 'SUB_SERVICES_DATA.concierge.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/concierge-1.jpg',
    imgBack: 'assets/images/photo-1566073771259-6a8506099945.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.concierge.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-clock',
      titleKey: 'SUB_SERVICES_DATA.concierge.I1_T',
      descKey: 'SUB_SERVICES_DATA.concierge.I1_D'
    },
    {
      icon: 'fas fa-shield-alt',
      titleKey: 'SUB_SERVICES_DATA.concierge.I2_T',
      descKey: 'SUB_SERVICES_DATA.concierge.I2_D'
    },
    {
      icon: 'fas fa-star',
      titleKey: 'SUB_SERVICES_DATA.concierge.I3_T',
      descKey: 'SUB_SERVICES_DATA.concierge.I3_D'
    }
  ];
}
