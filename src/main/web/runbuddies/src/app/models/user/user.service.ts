import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../abstract-entity-service';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractEntityService<User, string>{

  constructor(http: HttpClient) {
    super(http, 'api/v1/users');
  }
}
