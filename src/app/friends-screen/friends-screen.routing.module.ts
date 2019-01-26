import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { FriendsScreenComponent } from './friends-screen.component';
import { FriendRequestsScreenComponent } from '../friend-requests-screen/friend-requests-screen.component';
import { FindFriendsScreenComponent } from '../find-friends-screen/find-friends-screen.component';


const routes: Routes = [
  {
    path: 'friends',
    component: FriendsScreenComponent,
    children: [
      {
        path: 'requests',
        component: FriendRequestsScreenComponent,
      },
      {
        path: 'find',
        component: FindFriendsScreenComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/friends/requests'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FriendsScreenRoutingModule { }
