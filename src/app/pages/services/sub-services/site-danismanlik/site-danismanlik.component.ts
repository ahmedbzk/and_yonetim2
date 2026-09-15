import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-site-danismanlik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './site-danismanlik.component.html',
  styleUrl: './site-danismanlik.component.scss'
})
export class SiteDanismanlikComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.site-danismanlik.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.site-danismanlik.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.site-danismanlik.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-users-cog",
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.F1_T',
      textKey: 'SUB_SERVICES_DATA.site-danismanlik.F1_D'
    },
    {
      icon: "fas fa-hand-holding-usd",
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.F2_T',
      textKey: 'SUB_SERVICES_DATA.site-danismanlik.F2_D'
    },
    {
      icon: "fas fa-chalkboard-teacher",
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.F3_T',
      textKey: 'SUB_SERVICES_DATA.site-danismanlik.F3_D'
    },
    {
      icon: "fas fa-balance-scale",
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.F4_T',
      textKey: 'SUB_SERVICES_DATA.site-danismanlik.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.site-danismanlik.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.site-danismanlik.P1_T', descKey: 'SUB_SERVICES_DATA.site-danismanlik.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.site-danismanlik.P2_T', descKey: 'SUB_SERVICES_DATA.site-danismanlik.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.site-danismanlik.P3_T', descKey: 'SUB_SERVICES_DATA.site-danismanlik.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.site-danismanlik.P4_T', descKey: 'SUB_SERVICES_DATA.site-danismanlik.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1573164713988-8665fc963095.jpg',
    imgBack: 'assets/images/photo-1517048676732-d65bc937f952.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.site-danismanlik.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-book-open',
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.I1_T',
      descKey: 'SUB_SERVICES_DATA.site-danismanlik.I1_D'
    },
    {
      icon: 'fas fa-handshake',
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.I2_T',
      descKey: 'SUB_SERVICES_DATA.site-danismanlik.I2_D'
    },
    {
      icon: 'fas fa-chart-pie',
      titleKey: 'SUB_SERVICES_DATA.site-danismanlik.I3_T',
      descKey: 'SUB_SERVICES_DATA.site-danismanlik.I3_D'
    }
  ];
}
