 import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { CouponsScreenComponent } from './coupons-screen.component';
import { CreateCouponScreenComponent } from '../create-coupon-screen/create-coupon-screen.component';
import { CouponsListScreenComponent } from '../coupons-list-screen/coupons-list-screen.component';
import { EditCouponScreenComponent } from '../edit-coupon-screen/edit-coupon-screen.component';


const routes: Routes = [
  {
    path: 'coupons',
    component: CouponsScreenComponent,
    children: [
      {
        path: 'create',
        component: CreateCouponScreenComponent,
      },
      {
        path: 'edit',
        component: EditCouponScreenComponent,
      },
      {
        path: 'list',
        component: CouponsListScreenComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/coupons/list'
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
export class CouponsScreenRoutingModule { }
