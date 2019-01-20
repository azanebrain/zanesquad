import { Component, OnInit } from '@angular/core';
import { ZanesquadStateManagerService } from '../state-manager/state-manager.service';
import { Company } from '../company/company.model';
import { FriendsCouponsForCompanyResponse, FriendCoupon } from '../coupon/coupon.model';
import { CouponService } from '../coupon/coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user/user.service';

enum COMPANY_DETAILS_SCREEN_STATES {
  ERROR,
  HAS_COUPONS,
  LOADING,
  LOGGED_OUT,
  NO_COUPONS,
}

@Component({
  selector: 'zanesquad-company-details-screen',
  templateUrl: './company-details-screen.component.html',
  styleUrls: ['./company-details-screen.component.sass']
})
export class CompanyDetailsScreenComponent implements OnInit {
  public company: Company
  public coupons: FriendCoupon[]
  public state: COMPANY_DETAILS_SCREEN_STATES = COMPANY_DETAILS_SCREEN_STATES.LOADING
  public states = COMPANY_DETAILS_SCREEN_STATES

  constructor(
    private couponService: CouponService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private stateService: ZanesquadStateManagerService,
  ) { }

  ngOnInit() {
    this.initState()
    // If the user isn't logged in, show the state and stop
    if (!this.userService.currentUser) {
      this.state = COMPANY_DETAILS_SCREEN_STATES.LOGGED_OUT
      return
    }
    // If the user is logged in, load their friends' coupons
    if (this.company) {
      this.retrieveCouponsAsync()
    }
  }

  private initState() {
    this.company = this.stateService.selectCurrentCompany()
  }

  /**
   * Finds coupons of the current user's friends for the current company
   */
  private retrieveCouponsAsync() {
    this.couponService.retrieveFriendsCouponsForCopmany(this.company.guid)
      .subscribe((result: FriendsCouponsForCompanyResponse) => {
        this.coupons = result.data

        if (this.coupons.length > 0) {
          this.state = COMPANY_DETAILS_SCREEN_STATES.HAS_COUPONS
        } else {
          this.state = COMPANY_DETAILS_SCREEN_STATES.NO_COUPONS
        }
      },
        err => {
          this.state = COMPANY_DETAILS_SCREEN_STATES.ERROR
          this.snackBar.open(`An error occurred retrieving coupons for ${this.company.name}`, null, {
            duration: 3000,
          });
        })
  }

}
