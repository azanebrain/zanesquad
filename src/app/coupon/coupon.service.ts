import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';
import { Observable } from 'rxjs';
import { CouponsListResponse } from './coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public retrieveUserCoupons(): Observable<CouponsListResponse> {
    return this.endpointService.getAsync<CouponsListResponse>(`${environment.domain}/api/coupons/v1`)
  }
}
