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
    
    // রিফ্রেশ করলে যেন লগইন চলে না যায়
    if (this.isBrowser && this.cookieService.getCookie(Cookies.AUTH)) {
      this.isAuthenticated.set(true);
    }
  }

  setLoginStatus(status: boolean) {
    this.isAuthenticated.set(status);
    if (this.isBrowser && status) {
        // ৩টি আর্গুমেন্ট (নাম, ভ্যালু, দিন)
        this.cookieService.setCookie(Cookies.AUTH, 'true', 1);
    }
  }

  redirectToRecruiterApp() {
    if (this.isBrowser) {
      redirectExternal(RecruiterPanelUrl);
    }
  }
}