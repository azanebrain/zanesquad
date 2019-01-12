import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CouponsScreenComponent } from './coupons-screen.component';
import { CouponsScreenRoutingModule } from './coupons-screen.routing.module';
import { CouponModule } from '../coupon/coupon.module';
import { CreateCouponScreenModule } from '../create-coupon-screen/create-coupon-screen.module';
import { RouterModule } from '@angular/router';
import { CouponsListScreenModule } from '../coupons-list-screen/coupons-list-screen.module';

@NgModule({
  declarations: [
    CouponsScreenComponent
  ],
  imports: [
    CommonModule,
    CouponsListScreenModule,
    CouponsScreenRoutingModule,
    CreateCouponScreenModule,
  ]
})
export class CouponsScreenModule { }
