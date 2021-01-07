import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../abstract-entity-service';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractEntityService<User, string>{

  constructor(http: HttpClient) {
    super(http, 'api/v1/users');
  }

  checkUserExists(): Observable<boolean> {
    return this.httpClient.get(`${this.basePath}/me`, { observe: 'response' }).pipe(
      map(response => response.status === 200)
    );
  }

  getCurrentUser(): Observable<User> {
    return this.get('me');
  }

  signUp(user: User): Observable<User> {
    return this.post('signup', user);
  }
}
