import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestParms, LoginResponse } from './user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * This service handles storing information and making endpoint requests about the current user
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public loginUserAsync(params: LoginRequestParms): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.domain}/api/users/v1/login`, params)
  }
}
