import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CouponsScreenComponent } from './coupons-screen.component';
import { CouponsScreenRoutingModule } from './coupons-screen.routing.module';
import { CouponModule } from '../coupon/coupon.module';

@NgModule({
  declarations: [
    CouponsScreenComponent
  ],
  imports: [
    CommonModule,
    CouponModule,
    CouponsScreenRoutingModule,
    MatButtonModule,
  ]
})
export class CouponsScreenModule { }
