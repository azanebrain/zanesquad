import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZanesquadStateManagerService } from '../state-manager/state-manager.service';
import { Coupon, UpdateCouponPayload, UpdateCouponResponse } from '../coupon/coupon.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CouponService } from '../coupon/coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'zanesquad-edit-coupon-screen',
  templateUrl: './edit-coupon-screen.component.html',
  styleUrls: ['./edit-coupon-screen.component.sass']
})
export class EditCouponScreenComponent implements OnInit {
  public coupon: Coupon
  public editForm: FormGroup

  constructor(
    private couponService: CouponService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private state: ZanesquadStateManagerService,
  ) { }

  ngOnInit() {
    this.coupon = this.state.selectCurrentCoupon()
    this.initForm()
  }

  public submitForm() {
    console.log(`this form: `, this.editForm.value)
    this.couponService.updateCoupon(<UpdateCouponPayload>this.editForm.value)
      .subscribe((result: UpdateCouponResponse) => {
        this.snackBar.open(`Your coupon was successfully update`, 'Okay')
          .afterDismissed().subscribe(() => {
            this.router.navigate(['coupons'])
          })
      },
      err => {
        this.snackBar.open(`An error occurred trying to update your coupon: ${err.message}`, null, {
          duration: 3000,
        });
      })
  }

  private initForm() {
    if (this.coupon) {
      this.editForm = this.formBuilder.group({
        code: [this.coupon.code, Validators.required],
        couponGuid: [this.coupon.guid, Validators.required],
      })
    }
  }

}
