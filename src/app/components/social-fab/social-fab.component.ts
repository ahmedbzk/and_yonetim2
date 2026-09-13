import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-social-fab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './social-fab.component.html',
  styleUrl: './social-fab.component.scss'
})
export class SocialFabComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
