import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ZanesquadEndpointService {

  // The current user. Used for edpoint credentials
  private currentUser: UserCredentials = null

  constructor(private http: HttpClient) { }

  public getAsync<T>(path, params?) {
    return this.http.get<T>(path, {
      params: { ...params, ...this.currentUser }
    })
  }

  public postAsync<T>(path, params) {
    return this.http.post<T>(path, { ...params, ...this.currentUser })
  }

  /**
   * Sets the current user
   */
  public setUser(user: UserCredentials): void {
    this.currentUser = user
    console.log(`user set to: `, this.currentUser)
  }
}
