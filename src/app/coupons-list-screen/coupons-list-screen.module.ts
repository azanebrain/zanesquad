import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsListScreenComponent } from './coupons-list-screen.component';
import { CouponCardModule } from '../coupon-card/coupon-card.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CouponModule } from '../coupon/coupon.module';

@NgModule({
  declarations: [CouponsListScreenComponent],
  imports: [
    CommonModule,
    CouponModule,
    CouponCardModule,
    RouterModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class CouponsListScreenModule { }
