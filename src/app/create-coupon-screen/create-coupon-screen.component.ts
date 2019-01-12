import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Company, RetrieveCompaniesResult } from '../company/company.model';
import { CouponService } from '../coupon/coupon.service';
import { AddCouponPayload } from '../coupon/coupon.model';

enum CREATE_COUPON_SCREEN_STATES {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT,
}

@Component({
  selector: 'zanesquad-create-coupon-screen',
  templateUrl: './create-coupon-screen.component.html',
  styleUrls: ['./create-coupon-screen.component.sass']
})
export class CreateCouponScreenComponent implements OnInit {

  public companiesList: Company[] = []
  public createCouponForm: FormGroup
  public state: CREATE_COUPON_SCREEN_STATES = CREATE_COUPON_SCREEN_STATES.LOADING
  public states = CREATE_COUPON_SCREEN_STATES

  constructor(
    private companyService: CompanyService,
    private couponService: CouponService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.retrieveUserAsync()
    this.retrieveCompaniesAsync()
    this.initForm()
  }

  public submitForm() {
    const payload: AddCouponPayload = {
      code: this.createCouponForm.value.Code,
      companyGuid: this.createCouponForm.value.CompanyGuid,
    }

    this.couponService.addCoupon(payload)
      .subscribe((result: any) => {
        console.log(`result: `, result)
      },
      err => {
        console.log(`err: `, err)
        this.snackBar.open(`An error occurred trying to create a coupon: ${err.message}` , null, {
          duration: 3000,
        });
      })
  }

  private retrieveCompaniesAsync() {
    this.companyService.retrieveCompaniesAsync()
      .subscribe((companiesResult: RetrieveCompaniesResult) => {
        this.companiesList = companiesResult.data
      },
      err => {
        this.snackBar.open('An error occurred getting the list of companies', null, {
          duration: 3000,
        });
      })
  }
  private initForm() {
    this.createCouponForm = this.formBuilder.group({
      CompanyGuid: ['', Validators.required],
      Code: ['', Validators.required],
    })
  }

  private async retrieveUserAsync() {
    const user = await this.userService.getUser()
    if (!user) {
      this.state = CREATE_COUPON_SCREEN_STATES.LOGGED_OUT
    } else {
      this.state = CREATE_COUPON_SCREEN_STATES.LOGGED_IN
    }
  }

}
