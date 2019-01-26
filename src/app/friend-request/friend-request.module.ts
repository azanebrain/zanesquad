import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestService } from './friend-request.service';
import { ZanesquadEndpointModule } from '../endpoint/endpoint.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ZanesquadEndpointModule,
  ],
  providers: [
    FriendRequestService,
  ]
})
export class FriendRequestModule { }
