import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-danisma',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './danisma.component.html',
  styleUrl: './danisma.component.scss'
})
export class DanismaComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.danisma.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.danisma.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.danisma.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-user-shield",
      titleKey: 'SUB_SERVICES_DATA.danisma.F1_T',
      textKey: 'SUB_SERVICES_DATA.danisma.F1_D'
    },
    {
      icon: "fas fa-box",
      titleKey: 'SUB_SERVICES_DATA.danisma.F2_T',
      textKey: 'SUB_SERVICES_DATA.danisma.F2_D'
    },
    {
      icon: "fas fa-phone-alt",
      titleKey: 'SUB_SERVICES_DATA.danisma.F3_T',
      textKey: 'SUB_SERVICES_DATA.danisma.F3_D'
    },
    {
      icon: "fas fa-id-badge",
      titleKey: 'SUB_SERVICES_DATA.danisma.F4_T',
      textKey: 'SUB_SERVICES_DATA.danisma.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.danisma.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.danisma.P1_T', descKey: 'SUB_SERVICES_DATA.danisma.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.danisma.P2_T', descKey: 'SUB_SERVICES_DATA.danisma.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.danisma.P3_T', descKey: 'SUB_SERVICES_DATA.danisma.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.danisma.P4_T', descKey: 'SUB_SERVICES_DATA.danisma.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1556740738-b6a63e27c4df.jpg',
    imgBack: 'assets/images/photo-1549923746-c502d488b3ea.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.danisma.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-smile',
      titleKey: 'SUB_SERVICES_DATA.danisma.I1_T',
      descKey: 'SUB_SERVICES_DATA.danisma.I1_D'
    },
    {
      icon: 'fas fa-lock',
      titleKey: 'SUB_SERVICES_DATA.danisma.I2_T',
      descKey: 'SUB_SERVICES_DATA.danisma.I2_D'
    },
    {
      icon: 'fas fa-cogs',
      titleKey: 'SUB_SERVICES_DATA.danisma.I3_T',
      descKey: 'SUB_SERVICES_DATA.danisma.I3_D'
    }
  ];
}
