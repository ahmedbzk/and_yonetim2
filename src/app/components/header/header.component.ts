import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isDropdownOpen = false;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {}

  get activeLang(): string {
    return this.languageService.getCurrentLanguage();
  }

  setLang(lang: string, event: Event) {
    event.preventDefault();
    this.languageService.setLanguage(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      this.isDropdownOpen = false; // Reset when menu closes
    }
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
    document.body.style.overflow = '';
  }
}
