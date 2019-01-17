import { Injectable } from '@angular/core';
import { ZanesquadState } from './state-manager.model';
import { Coupon } from '../coupon/coupon.model';

/**
 * A super hacky state manager to store info for items being edited
 */
@Injectable({
  providedIn: 'root'
})
export class ZanesquadStateManagerService {

  private state: ZanesquadState = {
    currentCoupon: null
  }

  constructor() { }

  public selectCurrentCoupon(): Coupon {
    return this.state.currentCoupon
  }

  /**
   * Sets a coupon to work on
   *
   * @param coupon The active coupon
   */
  public setCurrentCoupon(coupon: Coupon): void {
    this.state.currentCoupon = coupon
  }
}
