import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-web-tasarim',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './web-tasarim.component.html',
  styleUrl: './web-tasarim.component.scss'
})
export class WebTasarimComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.web-tasarim.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.web-tasarim.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.web-tasarim.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-laptop-code",
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.F1_T',
      textKey: 'SUB_SERVICES_DATA.web-tasarim.F1_D'
    },
    {
      icon: "fas fa-mobile-alt",
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.F2_T',
      textKey: 'SUB_SERVICES_DATA.web-tasarim.F2_D'
    },
    {
      icon: "fas fa-search",
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.F3_T',
      textKey: 'SUB_SERVICES_DATA.web-tasarim.F3_D'
    },
    {
      icon: "fas fa-cogs",
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.F4_T',
      textKey: 'SUB_SERVICES_DATA.web-tasarim.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.web-tasarim.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.web-tasarim.P1_T', descKey: 'SUB_SERVICES_DATA.web-tasarim.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.web-tasarim.P2_T', descKey: 'SUB_SERVICES_DATA.web-tasarim.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.web-tasarim.P3_T', descKey: 'SUB_SERVICES_DATA.web-tasarim.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.web-tasarim.P4_T', descKey: 'SUB_SERVICES_DATA.web-tasarim.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1461749280684-dccba630e2f6.jpg',
    imgBack: 'assets/images/photo-1498050108023-c5249f4df085.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.web-tasarim.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-rocket',
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.I1_T',
      descKey: 'SUB_SERVICES_DATA.web-tasarim.I1_D'
    },
    {
      icon: 'fas fa-shield-alt',
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.I2_T',
      descKey: 'SUB_SERVICES_DATA.web-tasarim.I2_D'
    },
    {
      icon: 'fas fa-headset',
      titleKey: 'SUB_SERVICES_DATA.web-tasarim.I3_T',
      descKey: 'SUB_SERVICES_DATA.web-tasarim.I3_D'
    }
  ];
}
