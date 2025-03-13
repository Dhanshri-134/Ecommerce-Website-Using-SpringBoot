import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: string[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }

  public setToken(jwtToken: string): void {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') || '';
  }

  public clear(): void {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return !!this.getRoles().length && !!this.getToken();
  }

  public isAdmin(): boolean {
    const roles: any[] = this.getRoles();
    return roles.includes('Admin');
  }

  public isUser(): boolean {
    const roles: any[] = this.getRoles();
    return roles.includes('User');
  }
}
