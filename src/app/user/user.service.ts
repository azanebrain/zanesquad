import { Injectable } from '@angular/core';
import { LoginRequestParms, LoginResponse } from './user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';

/**
 * This service handles storing information and making endpoint requests about the current user
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public loginUserAsync(params: LoginRequestParms): Observable<LoginResponse> {
    return this.endpointService.postAsync<LoginResponse>(`${environment.domain}/api/users/v1/login`, params)
  }
}
