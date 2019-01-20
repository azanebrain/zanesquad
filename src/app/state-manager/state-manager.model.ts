import { Coupon } from '../coupon/coupon.model';
import { Company } from '../company/company.model';

export interface ZanesquadState {
  currentCompany: Company;
  currentCoupon: Coupon;
}
