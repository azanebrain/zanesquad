import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';
import { Observable } from 'rxjs';
import { CouponsListResponse, AddCouponPayload } from './coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public retrieveUserCoupons(): Observable<CouponsListResponse> {
    return this.endpointService.getAsync<CouponsListResponse>(`${environment.domain}/api/coupons/v1`)
  }

  public addCoupon(params: AddCouponPayload): any {
    return this.endpointService.postAsync(`${environment.domain}/api/coupons/v1`, params)
  }
}
