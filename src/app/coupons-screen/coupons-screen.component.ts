import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon/coupon.service';
import { CouponsListResponse, Coupon } from '../coupon/coupon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'zanesquad-coupons-screen',
  templateUrl: './coupons-screen.component.html',
  styleUrls: ['./coupons-screen.component.sass']
})
export class CouponsScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
