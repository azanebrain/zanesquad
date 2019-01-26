import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindFriendsScreenComponent } from './find-friends-screen.component';
import { RegistrationInviteModule } from '../registration-invite/registration-invite.module';
import { MatButtonModule } from '@angular/material/button';
import { UserModule } from '../user/user.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ZanesquadSubmitIfValidModule } from '../submit-if-valid/submit-if-valid.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FriendRequestModule } from '../friend-request/friend-request.module';

@NgModule({
  declarations: [FindFriendsScreenComponent],
  imports: [
    CommonModule,
    FriendRequestModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RegistrationInviteModule,
    UserModule,
    ZanesquadSubmitIfValidModule,
  ]
})
export class FindFriendsScreenModule { }
