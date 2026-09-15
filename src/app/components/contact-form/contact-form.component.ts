import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // API Uç noktası
  private apiUrl = 'https://andyonetim.com.tr/api/send-mail.php'; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Şablondan form elemanlarına kolay erişim için getter metotları
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitSuccess = false;
    this.submitError = false;
    
    // Form hatalıysa uyarıları göstermek için tüm alanları 'touched' yapıyoruz
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    // Backend'e HTTP Post İsteği
    this.http.post(this.apiUrl, this.contactForm.value).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = true;
        this.errorMessage = 'Sunucuya bağlanırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
      }
    });
  }
}
