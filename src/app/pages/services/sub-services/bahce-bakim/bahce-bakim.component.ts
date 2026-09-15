import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bahce-bakim',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './bahce-bakim.component.html',
  styleUrl: './bahce-bakim.component.scss'
})
export class BahceBakimComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.bahce-bakim.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.bahce-bakim.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.bahce-bakim.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-seedling",
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.F1_T',
      textKey: 'SUB_SERVICES_DATA.bahce-bakim.F1_D'
    },
    {
      icon: "fas fa-tree",
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.F2_T',
      textKey: 'SUB_SERVICES_DATA.bahce-bakim.F2_D'
    },
    {
      icon: "fas fa-water",
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.F3_T',
      textKey: 'SUB_SERVICES_DATA.bahce-bakim.F3_D'
    },
    {
      icon: "fas fa-leaf",
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.F4_T',
      textKey: 'SUB_SERVICES_DATA.bahce-bakim.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.bahce-bakim.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.bahce-bakim.P1_T', descKey: 'SUB_SERVICES_DATA.bahce-bakim.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.bahce-bakim.P2_T', descKey: 'SUB_SERVICES_DATA.bahce-bakim.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.bahce-bakim.P3_T', descKey: 'SUB_SERVICES_DATA.bahce-bakim.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.bahce-bakim.P4_T', descKey: 'SUB_SERVICES_DATA.bahce-bakim.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1517048676732-d65bc937f952.jpg',
    imgBack: 'assets/images/photo-1522071820081-009f0129c71c.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.bahce-bakim.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-check',
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.I1_T',
      descKey: 'SUB_SERVICES_DATA.bahce-bakim.I1_D'
    },
    {
      icon: 'fas fa-seedling',
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.I2_T',
      descKey: 'SUB_SERVICES_DATA.bahce-bakim.I2_D'
    },
    {
      icon: 'fas fa-shield-alt',
      titleKey: 'SUB_SERVICES_DATA.bahce-bakim.I3_T',
      descKey: 'SUB_SERVICES_DATA.bahce-bakim.I3_D'
    }
  ];
}
