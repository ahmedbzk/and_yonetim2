import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-denetim-raporlama',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent, TranslateModule],
  templateUrl: './denetim-raporlama.component.html',
  styleUrl: './denetim-raporlama.component.scss'
})
export class DenetimRaporlamaComponent {
  titleData = {
    badgeKey: 'SUB_SERVICES_DATA.denetim-raporlama.HERO_BADGE',
    titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.HERO_TITLE',
    descKey: 'SUB_SERVICES_DATA.denetim-raporlama.HERO_DESC'
  };

  features = [
    {
      icon: "fas fa-file-invoice-dollar",
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.F1_T',
      textKey: 'SUB_SERVICES_DATA.denetim-raporlama.F1_D'
    },
    {
      icon: "fas fa-balance-scale",
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.F2_T',
      textKey: 'SUB_SERVICES_DATA.denetim-raporlama.F2_D'
    },
    {
      icon: "fas fa-clipboard-check",
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.F3_T',
      textKey: 'SUB_SERVICES_DATA.denetim-raporlama.F3_D'
    },
    {
      icon: "fas fa-chart-line",
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.F4_T',
      textKey: 'SUB_SERVICES_DATA.denetim-raporlama.F4_D'
    }
  ];

  processTitleDescKey = 'SUB_SERVICES_DATA.denetim-raporlama.PROCESS_DESC';

  processSteps = [
    { step: 1, titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.P1_T', descKey: 'SUB_SERVICES_DATA.denetim-raporlama.P1_D' },
    { step: 2, titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.P2_T', descKey: 'SUB_SERVICES_DATA.denetim-raporlama.P2_D' },
    { step: 3, titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.P3_T', descKey: 'SUB_SERVICES_DATA.denetim-raporlama.P3_D' },
    { step: 4, titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.P4_T', descKey: 'SUB_SERVICES_DATA.denetim-raporlama.P4_D' }
  ];

  images = {
    imgFront: 'assets/images/photo-1554224155-6726b3ff858f.jpg',
    imgBack: 'assets/images/photo-1454165804606-c3d57bc86b40.jpg'
  };

  infoTitleKey = 'SUB_SERVICES_DATA.denetim-raporlama.INFO_TITLE';

  infoList = [
    {
      icon: 'fas fa-shield-alt',
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.I1_T',
      descKey: 'SUB_SERVICES_DATA.denetim-raporlama.I1_D'
    },
    {
      icon: 'fas fa-exclamation-triangle',
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.I2_T',
      descKey: 'SUB_SERVICES_DATA.denetim-raporlama.I2_D'
    },
    {
      icon: 'fas fa-gavel',
      titleKey: 'SUB_SERVICES_DATA.denetim-raporlama.I3_T',
      descKey: 'SUB_SERVICES_DATA.denetim-raporlama.I3_D'
    }
  ];
}
