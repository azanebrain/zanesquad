import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CouponsScreenComponent } from './coupons-screen.component';
import { CouponsScreenRoutingModule } from './coupons-screen.routing.module';
import { CouponModule } from '../coupon/coupon.module';
import { CouponCardModule } from '../coupon-card/coupon-card.module';

@NgModule({
  declarations: [
    CouponsScreenComponent
  ],
  imports: [
    CommonModule,
    CouponCardModule,
    CouponModule,
    CouponsScreenRoutingModule,
    MatButtonModule,
  ]
})
export class CouponsScreenModule { }
