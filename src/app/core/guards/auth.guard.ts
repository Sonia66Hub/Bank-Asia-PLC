import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    // ১. লোকাল ডেভেলপমেন্ট মোডে সরাসরি এক্সেস দিবে
    if (!environment.production) {
      return true;
    }

    // ২. প্রোডাকশনে সিগন্যাল বা কুকি চেক করবে
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      // ৩. লগইন না থাকলে মেইন অ্যাপে পাঠিয়ে দিবে
      this.authService.redirectToRecruiterApp();
      return false;
    }
  }
}