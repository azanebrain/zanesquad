 import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { CouponsScreenComponent } from './coupons-screen.component';


const routes: Routes = [
  {
    path: 'coupons',
    component: CouponsScreenComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CouponsScreenRoutingModule { }
