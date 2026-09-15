import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-site-hukuk',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './site-hukuk.component.html',
  styleUrl: './site-hukuk.component.scss'
})
export class SiteHukukComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.site-hukuk.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.site-hukuk.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.site-hukuk.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-gavel",
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.F1_T',
      textKey: 'SUB_SERVICES_DATA.site-hukuk.F1_D'
    },
    {
      icon: "fas fa-file-contract",
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.F2_T',
      textKey: 'SUB_SERVICES_DATA.site-hukuk.F2_D'
    },
    {
      icon: "fas fa-users",
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.F3_T',
      textKey: 'SUB_SERVICES_DATA.site-hukuk.F3_D'
    },
    {
      icon: "fas fa-balance-scale-left",
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.F4_T',
      textKey: 'SUB_SERVICES_DATA.site-hukuk.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.site-hukuk.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.site-hukuk.P1_T', descKey: 'SUB_SERVICES_DATA.site-hukuk.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.site-hukuk.P2_T', descKey: 'SUB_SERVICES_DATA.site-hukuk.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.site-hukuk.P3_T', descKey: 'SUB_SERVICES_DATA.site-hukuk.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.site-hukuk.P4_T', descKey: 'SUB_SERVICES_DATA.site-hukuk.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/law-hero.jpg',
    imgBack: 'assets/images/photo-1521791136064-7986c2920216.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.site-hukuk.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-shield-alt',
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.I1_T',
      descKey: 'SUB_SERVICES_DATA.site-hukuk.I1_D'
    },
    {
      icon: 'fas fa-hourglass-half',
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.I2_T',
      descKey: 'SUB_SERVICES_DATA.site-hukuk.I2_D'
    },
    {
      icon: 'fas fa-book',
      titleKey: 'SUB_SERVICES_DATA.site-hukuk.I3_T',
      descKey: 'SUB_SERVICES_DATA.site-hukuk.I3_D'
    }
  ];
}
