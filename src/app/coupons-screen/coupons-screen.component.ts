import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon/coupon.service';
import { CouponsListResponse, Coupon } from '../coupon/coupon.model';

@Component({
  selector: 'zanesquad-coupons-screen',
  templateUrl: './coupons-screen.component.html',
  styleUrls: ['./coupons-screen.component.sass']
})
export class CouponsScreenComponent implements OnInit {

  public coupons: Coupon[]
  public loading = false

  constructor(
    private couponService: CouponService,
  ) { }

  public editCoupon(couponUid: string) {
    console.log(`TODO: navigate to Edit Coupon screen`)
  }

  public createNewCoupon() {
    console.log(`TODO: navigate to Create Coupon screen`)
  }

  ngOnInit() {
    this.loadCouponsAsync()
  }

  private loadCouponsAsync() {
    this.loading = true
    this.couponService.retrieveUserCoupons()
      .subscribe((response: CouponsListResponse) => {
        this.coupons = response.data
      },
      error => {
        console.log(`error: `, error)
      })
      .add(() => {
        this.loading = false
      })
  }
}
