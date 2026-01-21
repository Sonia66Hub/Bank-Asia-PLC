<<<<<<< HEAD
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
=======
import { computed, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { isPlatformBrowser } from '@angular/common';
import { Cookies, RecruiterPanelUrl } from '../../../shared/enums/app.enums';
import { redirectExternal } from '../../../shared/utils/functions';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isBrowser: boolean;
    private isAuthenticated = signal<boolean>(false);
    public isAuthenticatedUser = computed(() => this.isAuthenticated());

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private cookieService: CookieService) {
        this.isBrowser = isPlatformBrowser(this.platformId);
        if (this.cookieService.getCookie(Cookies.AUTH)) {
            this.isAuthenticated.set(true);
        }
    }

    redirectToRecruiterApp() {
        if (this.isBrowser) {
            redirectExternal(RecruiterPanelUrl)
        }
    }
    
}
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
