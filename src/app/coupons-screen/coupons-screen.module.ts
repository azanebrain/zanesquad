import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsScreenComponent } from './coupons-screen.component';
import { CouponsScreenRoutingModule } from './coupons-screen.routing.module';

@NgModule({
  declarations: [
    CouponsScreenComponent
  ],
  imports: [
    CommonModule,
    CouponsScreenRoutingModule,
  ]
})
export class CouponsScreenModule { }
