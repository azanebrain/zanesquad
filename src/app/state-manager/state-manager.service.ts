import { Injectable } from '@angular/core';
import { ZanesquadState } from './state-manager.model';
import { Coupon } from '../coupon/coupon.model';
import { Company } from '../company/company.model';

/**
 * A super hacky state manager to store info for items being edited
 */
@Injectable({
  providedIn: 'root'
})
export class ZanesquadStateManagerService {

  private state: ZanesquadState = {
    currentCompany: null,
    currentCoupon: null,
  }

  constructor() { }

  public selectCurrentCoupon(): Coupon {
    return this.state.currentCoupon
  }

  public selectCurrentCompany(): Company {
    return this.state.currentCompany
  }

  /**
   * Sets a coupon to work on
   *
   * @param coupon The active coupon
   */
  public setCurrentCoupon(coupon: Coupon): void {
    this.state.currentCoupon = coupon
  }

  /**
   * Sets a company to view the details of
   *
   * @param copmany The active company
   */
  setCurrentCompany(company: Company): any {
    this.state.currentCompany = company
  }
}
