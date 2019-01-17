import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Coupon } from '../coupon/coupon.model';

@Component({
  selector: 'zanesquad-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.sass']
})
export class CouponCardComponent implements OnInit {

  @Input() coupon: Coupon

  @Output() editCoupon = new EventEmitter<Coupon>()

  constructor() { }

  public edit() {
    this.editCoupon.emit(this.coupon)
  }

  ngOnInit() {
  }

}
