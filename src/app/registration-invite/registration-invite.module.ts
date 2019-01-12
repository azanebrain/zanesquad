import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationInviteComponent } from './registration-invite.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RegistrationInviteComponent],
  exports: [RegistrationInviteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ]
})
export class RegistrationInviteModule { }
