import { Component, OnInit } from '@angular/core';
import { CouponsListResponse, Coupon } from '../coupon/coupon.model';
import { CouponService } from '../coupon/coupon.service';
import { Router } from '@angular/router';
import { ZanesquadStateManagerService } from '../state-manager/state-manager.service';

@Component({
  selector: 'zanesquad-coupons-list-screen',
  templateUrl: './coupons-list-screen.component.html',
  styleUrls: ['./coupons-list-screen.component.sass']
})
export class CouponsListScreenComponent implements OnInit {

  public coupons: Coupon[]
  public loading = false

  constructor(
    private couponService: CouponService,
    private router: Router,
    private state: ZanesquadStateManagerService
  ) { }

  public editCoupon(coupon: Coupon) {
    this.state.setCurrentCoupon(coupon)
    this.router.navigateByUrl('coupons/edit')
  }

  public createNewCoupon() {
    this.router.navigateByUrl('coupons/create')
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
