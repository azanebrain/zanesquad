import { Component, OnInit } from '@angular/core';
import { FriendRequestService } from '../friend-request/friend-request.service';
import { FriendRequest, FriendRequestListResponse } from '../friend-request/friend-request.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'zanesquad-friend-requests-screen',
  templateUrl: './friend-requests-screen.component.html',
  styleUrls: ['./friend-requests-screen.component.sass']
})
export class FriendRequestsScreenComponent implements OnInit {

  public friendRequests: FriendRequest[]
  public loading = false

  constructor(
    private friendRequestService: FriendRequestService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  public acceptFriendRequest(friendRequestGuid: string) {
    console.log('accepting FR for: ', friendRequestGuid)
  }

  public createNewFriendRequest() {
    console.log(`navigate to Find Friend screen`)
  }
  public declineFriendRequest(friendRequestGuid: string) {
    console.log('declining FR for: ' , friendRequestGuid)
  }

  ngOnInit() {
    this.loadFriendRequestsAsync()
  }

  private loadFriendRequestsAsync() {
    this.loading = true
    this.friendRequestService.retrieveUserFriendRequestsAsync()
      .subscribe((response: FriendRequestListResponse) => {
        this.friendRequests = response.data
      },
        error => {
          this.snackBar.open(`An error occurred while loading your friend requests! Please try again in a few minutes.`, null, {
            duration: 3000,
          });
        })
      .add(() => {
        this.loading = false
      })
  }

}
