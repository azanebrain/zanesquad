import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsScreenComponent } from './friends-screen.component';
import { RouterModule } from '@angular/router';
import { FriendsScreenRoutingModule } from './friends-screen.routing.module';

@NgModule({
  declarations: [FriendsScreenComponent],
  imports: [
    CommonModule,
    FriendsScreenRoutingModule,
    RouterModule,
  ]
})
export class FriendsScreenModule { }
