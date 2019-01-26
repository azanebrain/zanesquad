import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestsScreenComponent } from './friend-requests-screen.component';
import { FriendRequestModule } from '../friend-request/friend-request.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FriendRequestsScreenComponent],
  imports: [
    CommonModule,
    FriendRequestModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
  ]
})
export class FriendRequestsScreenModule { }
