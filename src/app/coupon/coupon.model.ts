export interface Coupon {
  code: string;
  company: {
    guid: string; // GUID
    name: string;
  };
  guid: string; // GUID
}

// The coupon of a friend. A limited version of a coupon
export interface FriendCoupon {
  guid: string;
  code: string;
  friendFullname: string;
}

export interface CouponsListResponse {
  status: string;
  data: Coupon[];
  message: string;
}

export interface FriendsCouponsForCompanyResponse {
  status: string;
  data: FriendCoupon[];
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
