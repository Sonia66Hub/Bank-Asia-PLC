import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../../core/services/auth/auth.service';

=======

// ১. ফুটার এবং হেডার দুটোই ইমপোর্ট করুন
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
import { FooterComponent } from '../../core/layouts/footer/footer.component';
import { HeaderComponent } from '../../core/layouts/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent
  ],
=======
  // ২. imports অ্যারিতে HeaderComponent যোগ করে দিন
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FooterComponent, 
    HeaderComponent  // <--- এটি যোগ করা হলো
  ], 
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
<<<<<<< HEAD
  private authService = inject(AuthService);
=======
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d

  submitted = false;
  errorMessage = '';

  loginForm = this.fb.group({
<<<<<<< HEAD
    username: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
=======
    username: [
      '',
      [Validators.required, Validators.minLength(12), Validators.maxLength(12)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)]
    ]
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
  });

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';

<<<<<<< HEAD
    if (this.loginForm.invalid) return;
=======
    if (this.loginForm.invalid) {
      return;
    }
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d

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

<<<<<<< HEAD
        // ✅ SAVE TO SESSION STORAGE
        this.authService.login(matchedUser);

        // ✅ REDIRECT
=======
        // ✅ LOGIN SUCCESS → DASHBOARD
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'User data file not found';
      }
    });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
