import { Injectable } from '@angular/core';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';
import { Observable } from 'rxjs';
import { FriendRequestListResponse, CreateFriendRequestPayload, CreateFriendRequestResponse } from './friend-request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public createFriendRequestAsync(payload: CreateFriendRequestPayload): Observable<CreateFriendRequestResponse> {
    return this.endpointService.postAsync<CreateFriendRequestResponse>(`${environment.domain}/api/friendrequests/v1`, payload)
  }

  /**
   * Retrieves a list of the current user's OPEN friend requests
   */
  public retrieveUserFriendRequestsAsync(): Observable<FriendRequestListResponse> {
    return this.endpointService.getAsync<FriendRequestListResponse>(`${environment.domain}/api/friendrequests/v1`)
  }
}
