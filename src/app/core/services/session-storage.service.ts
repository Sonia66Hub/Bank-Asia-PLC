import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private readonly AUTH_KEY = 'isLoggedIn';
  private readonly USER_KEY = 'loggedUser';

  // login হলে save হবে
  setLogin(user: any) {
    sessionStorage.setItem(this.AUTH_KEY, 'true');
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // login আছে কিনা check
  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.AUTH_KEY) === 'true';
  }

  // user info get
  getUser(): any {
    const user = sessionStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // logout বা session remove
  clear(): void {
    sessionStorage.removeItem(this.AUTH_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }
}
