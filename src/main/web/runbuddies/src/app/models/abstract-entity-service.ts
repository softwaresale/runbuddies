import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class AbstractEntityService<T, ID> {

  protected basePath: string;

  protected constructor(protected httpClient: HttpClient, path: string) {
    this.basePath = `${environment.apiBaseUrl}/${path}`;
  }

  public get(path: string): Observable<T> {
    return this.httpClient.get<T>(path);
  }

  public getCollection(path: string): Observable<T[]> {
    const fullPath = `${this.basePath}/${path}`;
    return this.httpClient.get<T[]>(fullPath);
  }

  public post(path: string, entity: T): Observable<T> {
    const fullPath = `${this.basePath}/${path}`;
    return this.httpClient.post<T>(fullPath, entity);
  }

  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.basePath);
  }

  public getById(id: ID): Observable<T> {
    const path = `${this.basePath}/${id}`;
    return this.httpClient.get<T>(path);
  }
}
