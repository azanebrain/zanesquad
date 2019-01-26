export interface FriendRequest {
  guid: string;
  fullname: string;
  username: string;
}

export interface FriendRequestListResponse {
  status: string;
  data: FriendRequest[];
  message: string;
}
