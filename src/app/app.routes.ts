import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BahceBakimComponent } from './pages/services/sub-services/bahce-bakim/bahce-bakim.component';
import { ConciergeComponent } from './pages/services/sub-services/concierge/concierge.component';
import { DanismaComponent } from './pages/services/sub-services/danisma/danisma.component';
import { DenetimRaporlamaComponent } from './pages/services/sub-services/denetim-raporlama/denetim-raporlama.component';
import { SiteDanismanlikComponent } from './pages/services/sub-services/site-danismanlik/site-danismanlik.component';
import { SiteHukukComponent } from './pages/services/sub-services/site-hukuk/site-hukuk.component';
import { SiteMuhasebeComponent } from './pages/services/sub-services/site-muhasebe/site-muhasebe.component';
import { TeknikComponent } from './pages/services/sub-services/teknik/teknik.component';
import { TemizlikComponent } from './pages/services/sub-services/temizlik/temizlik.component';
import { WebTasarimComponent } from './pages/services/sub-services/web-tasarim/web-tasarim.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { pageKey: 'HOME' } },
  { path: 'kurumsal', component: AboutComponent, data: { pageKey: 'ABOUT' } },
  { path: 'hizmetlerimiz', component: ServicesComponent, data: { pageKey: 'SERVICES' } },
  { path: 'hizmetlerimiz/bahce-bakim', component: BahceBakimComponent, data: { pageKey: 'BAHCE_BAKIM' } },
  { path: 'hizmetlerimiz/concierge', component: ConciergeComponent, data: { pageKey: 'CONCIERGE' } },
  { path: 'hizmetlerimiz/danisma', component: DanismaComponent, data: { pageKey: 'DANISMA' } },
  { path: 'hizmetlerimiz/denetim-raporlama', component: DenetimRaporlamaComponent, data: { pageKey: 'DENETIM_RAPORLAMA' } },
  { path: 'hizmetlerimiz/site-danismanlik', component: SiteDanismanlikComponent, data: { pageKey: 'SITE_DANISMANLIK' } },
  { path: 'hizmetlerimiz/site-hukuk', component: SiteHukukComponent, data: { pageKey: 'SITE_HUKUK' } },
  { path: 'hizmetlerimiz/site-muhasebe', component: SiteMuhasebeComponent, data: { pageKey: 'SITE_MUHASEBE' } },
  { path: 'hizmetlerimiz/teknik', component: TeknikComponent, data: { pageKey: 'TEKNIK' } },
  { path: 'hizmetlerimiz/temizlik', component: TemizlikComponent, data: { pageKey: 'TEMIZLIK' } },
  { path: 'hizmetlerimiz/web-tasarim', component: WebTasarimComponent, data: { pageKey: 'WEB_TASARIM' } },
  { path: 'iletisim', component: ContactComponent, data: { pageKey: 'CONTACT' } },
  { path: '**', redirectTo: '' }
];
