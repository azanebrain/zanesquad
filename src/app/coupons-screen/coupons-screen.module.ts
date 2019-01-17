import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsScreenComponent } from './coupons-screen.component';
import { CouponsScreenRoutingModule } from './coupons-screen.routing.module';
import { CreateCouponScreenModule } from '../create-coupon-screen/create-coupon-screen.module';
import { CouponsListScreenModule } from '../coupons-list-screen/coupons-list-screen.module';
import { EditCouponScreenModule } from '../edit-coupon-screen/edit-coupon-screen.module';

@NgModule({
  declarations: [
    CouponsScreenComponent
  ],
  imports: [
    CommonModule,
    CouponsListScreenModule,
    CouponsScreenRoutingModule,
    CreateCouponScreenModule,
    EditCouponScreenModule,
  ]
})
export class CouponsScreenModule { }
