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
