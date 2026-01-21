import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private sessionService: SessionStorageService,
    private router: Router
  ) {}

  login(user: any): void {
    this.sessionService.setLogin(user); // ✅ save session
  }

  logout(): void {
    this.sessionService.clear(); // ✅ remove session
    this.router.navigate(['/login']); // redirect
  }

  isAuthenticatedUser(): boolean {
    return this.sessionService.isLoggedIn(); // check session
  }

  redirectToRecruiterApp(): void {
    this.router.navigate(['/login']);
  }
}
