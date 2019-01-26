import { Injectable } from '@angular/core';
import { LoginRequestParms, LoginResponse, UserCredentials, UserSearchResponse } from './user.model';
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

  public currentUser: UserCredentials = null
  // public currentUser: UserCredentials = { username: 'user1', password: 'reallyBadPassword123' }

  constructor(private endpointService: ZanesquadEndpointService) { }

  public getUser(): UserCredentials {
    return this.currentUser
  }

  public loginUserAsync(params: LoginRequestParms): Observable<LoginResponse> {
    return this.endpointService.postAsync<LoginResponse>(`${environment.domain}/api/users/v1/login`, params)
  }

  public setUser(userCredentials: UserCredentials) {
    this.currentUser = userCredentials
  }

  public searchForUserByFullNameAsync(fullName: string): Observable<UserSearchResponse> {
    return this.endpointService.getAsync<UserSearchResponse>(`${environment.domain}/api/users/v1/search`, {
      fullname: fullName
    })
  }
}
