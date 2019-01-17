export interface Coupon {
  code: string;
  company: {
    guid: string; // GUID
    name: string;
  };
  guid: string; // GUID
}

export interface CouponsListResponse {
  status: string;
  data: Coupon[];
  message: string;
}

export interface AddCouponPayload {
  companyGuid: string; // GUID
  code: string;
}

export interface UpdateCouponPayload {
  code: string;
  couponGuid: string;
}

export interface UpdateCouponResponse {
  message: string;
  status: string;
}
