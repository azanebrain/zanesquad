import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponCardComponent } from './coupon-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CouponCardComponent],
  exports: [CouponCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class CouponCardModule { }
