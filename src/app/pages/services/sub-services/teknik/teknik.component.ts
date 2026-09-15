import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teknik',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './teknik.component.html',
  styleUrl: './teknik.component.scss'
})
export class TeknikComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.teknik.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.teknik.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.teknik.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-bolt",
      titleKey: 'SUB_SERVICES_DATA.teknik.F1_T',
      textKey: 'SUB_SERVICES_DATA.teknik.F1_D'
    },
    {
      icon: "fas fa-wrench",
      titleKey: 'SUB_SERVICES_DATA.teknik.F2_T',
      textKey: 'SUB_SERVICES_DATA.teknik.F2_D'
    },
    {
      icon: "fas fa-elevator",
      titleKey: 'SUB_SERVICES_DATA.teknik.F3_T',
      textKey: 'SUB_SERVICES_DATA.teknik.F3_D'
    },
    {
      icon: "fas fa-thermometer-half",
      titleKey: 'SUB_SERVICES_DATA.teknik.F4_T',
      textKey: 'SUB_SERVICES_DATA.teknik.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.teknik.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.teknik.P1_T', descKey: 'SUB_SERVICES_DATA.teknik.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.teknik.P2_T', descKey: 'SUB_SERVICES_DATA.teknik.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.teknik.P3_T', descKey: 'SUB_SERVICES_DATA.teknik.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.teknik.P4_T', descKey: 'SUB_SERVICES_DATA.teknik.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1581092160607-ee22621dd758.jpg',
    imgBack: 'assets/images/photo-1581092335397-9583eb92d232.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.teknik.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-stopwatch',
      titleKey: 'SUB_SERVICES_DATA.teknik.I1_T',
      descKey: 'SUB_SERVICES_DATA.teknik.I1_D'
    },
    {
      icon: 'fas fa-tools',
      titleKey: 'SUB_SERVICES_DATA.teknik.I2_T',
      descKey: 'SUB_SERVICES_DATA.teknik.I2_D'
    },
    {
      icon: 'fas fa-file-contract',
      titleKey: 'SUB_SERVICES_DATA.teknik.I3_T',
      descKey: 'SUB_SERVICES_DATA.teknik.I3_D'
    }
  ];
}
