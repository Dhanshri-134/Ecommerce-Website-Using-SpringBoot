import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

<<<<<<< HEAD
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles'));
  }

  public setToken(jwtToken: string) {
=======
  public setRoles(roles: string[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }

  public setToken(jwtToken: string): void {
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
<<<<<<< HEAD
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public isAdmin() {
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Admin';
    // return roles.includes('Admin');
=======
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
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
  }

  public isUser(): boolean {
    const roles: any[] = this.getRoles();
    return roles.includes('User');
<<<<<<< HEAD
  }

=======
  }
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
}
