import { Inject, Injectable } from '@angular/core';
import { AuthService as Auth0AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userApiEndpoint: string = `${environment.apiBaseUrl}/api/v1/users`;

  constructor(
    private auth: Auth0AuthService,
    private http: HttpClient,
  ) { }

  login(): Observable<void> {
    return this.auth.loginWithRedirect({
      // redirect_uri: 'http://localhost:4200/home',
      audience: 'https://www.runbuddies.com/api',
    });
  }

  logout(): void {
    this.auth.logout({
      // returnTo: this.doc.location.origin
      returnTo: 'http://localhost:4200/start'
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
