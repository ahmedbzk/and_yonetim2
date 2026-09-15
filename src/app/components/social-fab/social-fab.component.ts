import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-social-fab',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './social-fab.component.html',
  styleUrl: './social-fab.component.scss'
})
export class SocialFabComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
