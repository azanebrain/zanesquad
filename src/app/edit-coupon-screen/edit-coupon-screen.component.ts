import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZanesquadStateManagerService } from '../state-manager/state-manager.service';
import { Coupon } from '../coupon/coupon.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'zanesquad-edit-coupon-screen',
  templateUrl: './edit-coupon-screen.component.html',
  styleUrls: ['./edit-coupon-screen.component.sass']
})
export class EditCouponScreenComponent implements OnInit {
  public coupon: Coupon
  public editForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private state: ZanesquadStateManagerService
  ) { }

  ngOnInit() {
    this.coupon = this.state.selectCurrentCoupon()
    this.initForm()
  }

  public submitForm() {
    console.log(`this form: `, this.editForm.value)
  }

  private initForm() {
    const currentCouponCode = this.coupon ? this.coupon.code : ''
    this.editForm = this.formBuilder.group({
      Code: [currentCouponCode, Validators.required]
    })
  }

}
