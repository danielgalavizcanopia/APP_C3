import { Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuardService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  // TOKEN
  setToken(token: string): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, token)
    }

  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY) ?? 'null'
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // USER
  setUser(user: string): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))
    }

  }

  getUser(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(this.USER_KEY) ?? 'null');
    }
    return null;
  }


  getProject(){
  if(isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('selectedOption');
    }
    return null;
  }

  clearAll(): void {
    localStorage.clear()
  }

}
