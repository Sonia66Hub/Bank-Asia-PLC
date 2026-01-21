import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
<<<<<<< HEAD
=======
import { environment } from '../../../environments/environment';
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AuthGuard implements CanActivate, CanActivateChild {
=======
export class AuthGuard implements CanActivate, CanActivateChild  {
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
<<<<<<< HEAD
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      this.authService.redirectToRecruiterApp();
      return false;
    }
  }
}
=======
    if (!environment.production) {
      return true;
    }
    if (this.authService.isAuthenticatedUser()) {
        return true;
    } else {
        if (environment.production) {
            this.authService.redirectToRecruiterApp();
        }
        return false;
    }
  }

}
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
