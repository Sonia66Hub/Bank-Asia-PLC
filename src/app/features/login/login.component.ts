import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// ১. ফুটার এবং হেডার দুটোই ইমপোর্ট করুন
import { FooterComponent } from '../../core/layouts/footer/footer.component';
import { HeaderComponent } from '../../core/layouts/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  // ২. imports অ্যারিতে HeaderComponent যোগ করে দিন
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FooterComponent, 
    HeaderComponent  // <--- এটি যোগ করা হলো
  ], 
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  submitted = false;
  errorMessage = '';

  loginForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(12), Validators.maxLength(12)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)]
    ]
  });

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username?.trim();
    const password = this.loginForm.value.password;

    this.http.get<any>('assets/users.json').subscribe({
      next: (res) => {
        const users = res.users || [];

        const matchedUser = users.find(
          (u: any) =>
            u.username.toLowerCase() === username?.toLowerCase() &&
            u.password === password
        );

        if (!matchedUser) {
          this.errorMessage = 'Invalid user name or password';
          return;
        }

        // ✅ LOGIN SUCCESS → DASHBOARD
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'User data file not found';
      }
    });
  }
}