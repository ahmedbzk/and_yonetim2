import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-site-muhasebe',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './site-muhasebe.component.html',
  styleUrl: './site-muhasebe.component.scss'
})
export class SiteMuhasebeComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.site-muhasebe.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.site-muhasebe.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.site-muhasebe.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-calculator",
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.F1_T',
      textKey: 'SUB_SERVICES_DATA.site-muhasebe.F1_D'
    },
    {
      icon: "fas fa-file-invoice-dollar",
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.F2_T',
      textKey: 'SUB_SERVICES_DATA.site-muhasebe.F2_D'
    },
    {
      icon: "fas fa-users",
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.F3_T',
      textKey: 'SUB_SERVICES_DATA.site-muhasebe.F3_D'
    },
    {
      icon: "fas fa-chart-pie",
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.F4_T',
      textKey: 'SUB_SERVICES_DATA.site-muhasebe.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.site-muhasebe.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.site-muhasebe.P1_T', descKey: 'SUB_SERVICES_DATA.site-muhasebe.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.site-muhasebe.P2_T', descKey: 'SUB_SERVICES_DATA.site-muhasebe.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.site-muhasebe.P3_T', descKey: 'SUB_SERVICES_DATA.site-muhasebe.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.site-muhasebe.P4_T', descKey: 'SUB_SERVICES_DATA.site-muhasebe.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/accounting-1.jpg',
    imgBack: 'assets/images/photo-1460925895917-afdab827c52f.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.site-muhasebe.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-mobile-alt',
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.I1_T',
      descKey: 'SUB_SERVICES_DATA.site-muhasebe.I1_D'
    },
    {
      icon: 'fas fa-eye',
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.I2_T',
      descKey: 'SUB_SERVICES_DATA.site-muhasebe.I2_D'
    },
    {
      icon: 'fas fa-file-signature',
      titleKey: 'SUB_SERVICES_DATA.site-muhasebe.I3_T',
      descKey: 'SUB_SERVICES_DATA.site-muhasebe.I3_D'
    }
  ];
}
