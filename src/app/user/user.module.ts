import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

/**
 * This module contains services, models, etc for managing the current user
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
