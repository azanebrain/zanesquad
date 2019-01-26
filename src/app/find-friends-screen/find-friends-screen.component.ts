import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSearchResponse, User } from '../user/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FriendRequestService } from '../friend-request/friend-request.service';

enum FIND_FRIENDS_SCREEN_STATES {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT,
}

@Component({
  selector: 'zanesquad-find-friends-screen',
  templateUrl: './find-friends-screen.component.html',
  styleUrls: ['./find-friends-screen.component.sass']
})
export class FindFriendsScreenComponent implements OnInit {

  public findFriendForm: FormGroup
  public previousSearchTerm = ''
  public users: any
  public state: FIND_FRIENDS_SCREEN_STATES = FIND_FRIENDS_SCREEN_STATES.LOADING
  public states = FIND_FRIENDS_SCREEN_STATES

  constructor(
    private formBuilder: FormBuilder,
    private friendRequestService: FriendRequestService,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.retrieveUserAsync()
    this.initForm()
  }

  /**
   * Creates a friend request between this user and another
   *
   * @param recipientGuid The recipient of the friend request
   */
  public createFriendRequest(recipient: User) {
      this.friendRequestService.createFriendRequestAsync({
        recipient: recipient.guid
      })
      .subscribe((result: any) => {
        this.snackBar.open(`Successfully sent a friend request to ${recipient.fullname}!`, 'Okay')
      },
        err => {
          this.snackBar.open(`An error occurred trying to create the friend request. You may have already sent a friend request`, null, {
            duration: 3000,
          });
        })
  }

  public submitForm() {
    this.userService.searchForUserByFullNameAsync(this.findFriendForm.value.fullname)
      .subscribe((result: UserSearchResponse) => {
        this.users = result.data
        console.log(`users: `, this.users)
      },
        err => {
          this.users = []
          this.previousSearchTerm = this.findFriendForm.value.fullname
        })
  }

  private initForm() {
    this.findFriendForm = this.formBuilder.group({
      fullname: ['', Validators.required]
    })
  }

  private async retrieveUserAsync() {
    const user = await this.userService.getUser()
    if (!user) {
      this.state = FIND_FRIENDS_SCREEN_STATES.LOGGED_OUT
    } else {
      this.state = FIND_FRIENDS_SCREEN_STATES.LOGGED_IN
    }
  }

}
