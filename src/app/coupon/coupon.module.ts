import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponService } from './coupon.service';
import { ZanesquadEndpointModule } from '../endpoint/endpoint.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ZanesquadEndpointModule,
  ],
  providers: [
    CouponService,
  ]
})
export class CouponModule { }
